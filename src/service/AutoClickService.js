import ItemService from './ItemService';
import InventoryService from './InventoryService';
import moment from 'moment';
import HitService from './HitService';

// Takes care of auto click function
class AutoClickService {

    static _instance = null;

    static getInstance() {
        if (this._instance == null) {
            this._instance = new AutoClickService();
        }

        return this._instance;
    }

    constructor() {
        this.inventoryService = InventoryService.getInstance();
        this.itemService = new ItemService();
        this.hitServicesBySlot = {};
    }

    async startAutoClick(inventorySlot, setLoadingPercentageCallback, onHitEnd) {

        if (!inventorySlot.item || !inventorySlot.item.isTool) {
            return;
        }

        var hitService = this.hitServicesBySlot[inventorySlot.id];

        if (!hitService) {
            this.hitServicesBySlot[inventorySlot.id] = new HitService();
            hitService = this.hitServicesBySlot[inventorySlot.id];
        }

        hitService.hit((value, c) => {
            if (!inventorySlot.item || c) {
                setLoadingPercentageCallback(null);
                this.hitServicesBySlot[inventorySlot] = null;
            } else {
                setLoadingPercentageCallback(value);
            }
        }, inventorySlot).then(canceled => {
            onHitEnd();

            if (!canceled) {
                setTimeout(() => {
                    this.startAutoClick(inventorySlot, setLoadingPercentageCallback, onHitEnd);
                }, this.getCooldownTime())
            }
        });
    }

    getCooldownTime() {
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

export default AutoClickService;