import ItemService from '../service/ItemService';
import InventoryService from './InventoryService';
import ITEM from "../enum/ItemsEnum";
import moment from 'moment';
import PickaxeService from './ToolService/PickaxeService';
import HandService from './ToolService/HandService';

// Takes care of the hit function
class HitService {

    static _instance = null;

    static getInstance() {
        if (this._instance == null) {
            this._instance = new HitService();
        }

        return this._instance;
    }

    constructor() {
        this.inventoryService = InventoryService.getInstance();
        this.itemService = new ItemService();
    }

    hit(setLoadingPercentageCallback) {
        return new Promise((resolve) => {
            if (this.waitingUntil) {
                resolve();
                return;
            }

            const hitTime = this.getHitTime();
            this.waitingFrom = moment();
            this.waitingUntil = moment().add(hitTime, 'millisecond');

            const intervalId = setInterval(() => {
                const percentage = this.getLoadingPercentage();
                setLoadingPercentageCallback(percentage);
            }, 10)

            setTimeout(() => {
                const item = this.getRandomItem();
                const slot = this.inventoryService.getFirstAvailableSlot(item);

                if (!slot) {
                    this.waitingUntil = null;
                    clearInterval(intervalId);
                    setLoadingPercentageCallback(null);
                    resolve();
                    return;
                }

                if (!slot.item) {
                    slot.item = item;
                    slot.quantity = 1;
                } else {
                    slot.quantity += 1;
                }

                this.waitingUntil = null;
                clearInterval(intervalId);
                setLoadingPercentageCallback(null);
                resolve();
            }, hitTime);


        })
    }

    getRandomItem(equipedItemId) {

        let itemId = null;

        switch (equipedItemId) {
            case ITEM.WOODEN_PICKAXE:
            case ITEM.STONE_PICKAXE:
            case ITEM.IRON_PICKAXE:
            case ITEM.GOLDEN_PICKAXE:
            case ITEM.DIAMOND_PICKAXE:
                let pickaxeService = new PickaxeService();
                itemId = pickaxeService.getRandomItem(equipedItemId);
            default:
                let handService = new HandService();
                itemId = handService.getRandomItem(equipedItemId);

        }

        return this.itemService.getItemById(itemId);
    }

    // Get the hit time in milliseconds
    getHitTime() {
        return 200;
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

export default HitService;