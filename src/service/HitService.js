import ItemService from '../service/ItemService';
import InventoryService from './InventoryService';
import ITEM from "../enum/ItemsEnum";
import moment from 'moment';
import PickaxeService from './ToolService/PickaxeService';
import HandService from './ToolService/HandService';
import FishingRodService from './ToolService/FishingRodService';

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

    hit(setLoadingPercentageCallback, equipedSlot) {
        return new Promise((resolve) => {

            // Original equiped item. If the item changes, the hit is canceled
            const originalEquipedItemId = equipedSlot?.item?.id;

            if (this.waitingUntil) {
                resolve();
                return;
            }

            const hitTime = this.getHitTime();
            this.waitingFrom = moment();
            this.waitingUntil = moment().add(hitTime, 'millisecond');

            const intervalId = setInterval(() => {

                if (originalEquipedItemId !== equipedSlot?.item?.id) {
                    // Cancels the hit
                    setLoadingPercentageCallback(null, true);
                    clearInterval(intervalId);
                    if (this.timeoutId) {
                        clearTimeout(this.timeoutId);
                        this.timeoutId = null;
                    }
                    this.waitingUntil = null;
                    resolve(true);
                    return;
                }

                const percentage = this.getLoadingPercentage();
                setLoadingPercentageCallback(percentage);
            }, 10)

            this.timeoutId = setTimeout(() => {
                if (!this.timeoutId) {
                    return;
                }

                const item = this.getRandomItem(equipedSlot?.item?.id);
                const slot = this.inventoryService.getFirstAvailableSlot(item);

                if (slot) {
                    if (!slot.item) {
                        slot.item = item;
                        slot.quantity = 1;
                    } else {
                        slot.quantity += 1;
                    }
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
                break;

            case ITEM.FISHING_ROD:
                let fishingRodService = new FishingRodService();
                itemId = fishingRodService.getRandomItem(equipedItemId);
                break;
            default:
                let handService = new HandService();
                itemId = handService.getRandomItem(equipedItemId);
                break;

        }

        return this.itemService.getItemById(itemId);
    }

    // Get the hit time in milliseconds
    getHitTime() {
        return 1200;
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