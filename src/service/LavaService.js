import ItemService from './ItemService';
import InventoryService from './InventoryService';
import moment from 'moment';

// Takes care of the lava destroy function
class LavaService {

    static _instance = null;

    static getInstance() {
        if (this._instance == null) {
            this._instance = new LavaService();
        }

        return this._instance;
    }

    constructor() {
        this.inventoryService = InventoryService.getInstance();
        this.itemService = new ItemService();
    }

    destroyItem(setLoadingPercentageCallback) {
        return new Promise((resolve) => {
            if (this.waitingUntil) {
                resolve();
                return;
            }

            const hitTime = this.getDestroyTime();
            this.waitingFrom = moment();
            this.waitingUntil = moment().add(hitTime, 'millisecond');

            this.intervalId = setInterval(() => {
                const percentage = this.getLoadingPercentage();
                setLoadingPercentageCallback(percentage);

                const inventoryService = InventoryService.getInstance();
                const lavaSlot = inventoryService.getLavaSlot();

                if (!lavaSlot.item) {
                    this.waitingUntil = null;
                    clearInterval(this.intervalId);
                    clearTimeout(this.timeoutId);
                    setLoadingPercentageCallback(null);
                    resolve();
                }
            }, 10)

            this.timeoutId = setTimeout(() => {
                const inventoryService = InventoryService.getInstance();
                const lavaSlot = inventoryService.getLavaSlot();

                if (lavaSlot.item) {
                    lavaSlot.item = null;
                    lavaSlot.quantity = null;
                }

                this.waitingUntil = null;
                clearInterval(this.intervalId);
                clearTimeout(this.timeoutId);
                setLoadingPercentageCallback(null);
                resolve();

                if (lavaSlot.quantity && lavaSlot.quantity > 0) {
                    this.destroyItem(setLoadingPercentageCallback)
                }

            }, hitTime);

        })
    }

    // Get the destroy time in milliseconds
    getDestroyTime() {
        return 2000;
    }

    getLoadingPercentage() {
        const from = this.waitingFrom.valueOf();
        const until = this.waitingUntil.valueOf();

        if (!from || !until) {
            return null;
        }

        const max = until - from;
        const now = moment().valueOf() - from;

        return now * 100.0 / max;
    }

}

export default LavaService;