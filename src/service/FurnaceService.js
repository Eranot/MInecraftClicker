import ItemService from './ItemService';
import InventoryService from './InventoryService';
import moment from 'moment';

// Takes care of auto click function
class FurnaceService {

    static _instance = null;

    static getInstance() {
        if (this._instance == null) {
            this._instance = new FurnaceService();
        }

        return this._instance;
    }

    constructor() {
        this.inventoryService = InventoryService.getInstance();
        this.itemService = new ItemService();
        this.burnsLeft = 0;
    }

    async startFurnace(burnSlot, fuelSlot, resultSlot, setBurningPercentageCallback, setFuelPercentageCallback, onBurnEnd) {

        if (!burnSlot.item || (!fuelSlot.item && !this.waitingFuelUntil) || !burnSlot.item.isBurnable() || (fuelSlot.item && !fuelSlot.item.isFuel() && !this.waitingFuelUntil)) {
            return;
        }

        const newItem = this.itemService.getItemById(burnSlot.item.burnedItemId);

        if (resultSlot.quantity >= newItem.maxStack || (resultSlot.item && resultSlot.item.id !== newItem.id)) {
            return;
        }

        const now = moment();

        if (!this.waitingFuelUntil) {
            this.startFuel(fuelSlot, burnSlot, resultSlot, setFuelPercentageCallback, setBurningPercentageCallback, onBurnEnd, now);
        }

        if (!this.waitingBurningUntil) {
            this.startBurning(now);
        }
    }

    startBurning(now) {
        const burnTime = this.getBurnTime();
        this.waitingBurningFrom = now;
        this.waitingBurningUntil = now.clone().add(burnTime, 'millisecond');
    }

    async startFuel(fuelSlot, burnSlot, resultSlot, setFuelPercentageCallback, setBurningPercentageCallback, onBurnEnd, now) {
        const originalBurnItemId = burnSlot.item.id;

        const fuelTime = this.getFuelTime() * fuelSlot.item.fuelQuantity + 11; // Adds eleven just to be sure the timer will be right
        this.waitingFuelFrom = now;
        this.waitingFuelUntil = this.waitingFuelFrom.clone().add(fuelTime, 'millisecond');

        // Instantly reduces the fuel
        fuelSlot.quantity -= 1;
        this.inventoryService.checkSlotQuantity(fuelSlot);

        this.fuelIntervalId = setInterval(() => {

            if (originalBurnItemId !== burnSlot?.item?.id) {
                // Cancels the burning
                setBurningPercentageCallback(null, true);
                this.waitingBurningUntil = null;
                return;
            }

            // Material burn is over
            if (this.waitingBurningUntil && moment() >= this.waitingBurningUntil) {
                this.burnMaterial(burnSlot, resultSlot, setBurningPercentageCallback, onBurnEnd);
            }

            const fuelPercentage = this.getFuelPercentage();
            const burningPercentage = this.getBurningPercentage();
            setFuelPercentageCallback(fuelPercentage);
            setBurningPercentageCallback(burningPercentage);
        }, 10);

        this.timeoutFuelId = setTimeout(() => {
            if (!this.timeoutFuelId) {
                return;
            }

            clearInterval(this.fuelIntervalId);
            setFuelPercentageCallback(null);
            onBurnEnd();

            // If the fuel slot still has fuel, keep burning it
            if (fuelSlot.item
                && fuelSlot.item.isFuel()
                && fuelSlot.quantity > 0
                && burnSlot.item?.isBurnable()
                && burnSlot.quantity > 0
            ) {
                this.startFuel(fuelSlot, burnSlot, resultSlot, setFuelPercentageCallback, setBurningPercentageCallback, onBurnEnd, this.waitingFuelUntil);
            } else {
                this.waitingFuelUntil = null;
            }

        }, this.waitingFuelUntil.diff(moment()));
    }

    /*
    * Creates the new item
    */
    burnMaterial(burnSlot, resultSlot, setBurningPercentageCallback, onBurnEnd) {

        if (!burnSlot.item || !this.waitingBurningUntil) {
            this.waitingBurningUntil = null;
            return;
        }

        const newItem = this.itemService.getItemById(burnSlot.item.burnedItemId);

        if (resultSlot.item?.id === newItem.id) {
            resultSlot.quantity += 1;
        } else {
            resultSlot.item = newItem;
            resultSlot.quantity = 1;
        }

        burnSlot.quantity -= 1;
        this.inventoryService.checkSlotQuantity(burnSlot);

        onBurnEnd();

        clearInterval(this.burnIntervalId);
        setBurningPercentageCallback(null);

        // If there is still more items to be burned, repeat the process
        if (burnSlot.quantity > 0 && burnSlot.quantity < newItem.maxStack) {
            this.startBurning(this.waitingBurningUntil);
        } else {
            this.waitingBurningUntil = null;
        }

    }

    getBurnTime() {
        return 2000;
    }

    getFuelTime() {
        return 2000;
    }

    getBurningPercentage() {
        const from = this.waitingBurningFrom.valueOf();
        const until = this.waitingBurningUntil?.valueOf() ?? 0;

        if (!from || !until) {
            return null;
        }

        const max = until - from;
        const now = moment().valueOf() - from;

        return now * 100.0 / max;
    }

    getFuelPercentage() {
        const from = this.waitingFuelFrom.valueOf();
        const until = this.waitingFuelUntil.valueOf();

        if (!from || !until) {
            return null;
        }

        const max = until - from;
        const now = moment().valueOf() - from;

        return now * 100.0 / max;
    }

}

export default FurnaceService;