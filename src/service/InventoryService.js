import InventorySlot from '../model/InventorySlot';
import ItemService from '../service/ItemService';
import ITEM from "../enum/ItemsEnum";

// Cuida de todos os slots de todos os locais do jogo
class InventoryService {

    static _instance = null;

    static getInstance() {
        if (this._instance == null) {
            this._instance = new InventoryService();
        }

        return this._instance;
    }

    constructor() {

        const itemService = new ItemService();

        this._inventorySlots = [
            // Hand inventory
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),

            // Regular inventory
            new InventorySlot(itemService.getItemById(ITEM.IRON_INGOT), 1),
            new InventorySlot(itemService.getItemById(ITEM.IRON_INGOT), 1),
            new InventorySlot(itemService.getItemById(ITEM.IRON_INGOT), 2),
            new InventorySlot(itemService.getItemById(ITEM.STICK), 63),
            new InventorySlot(itemService.getItemById(ITEM.STICK), 2),
            new InventorySlot(itemService.getItemById(ITEM.FLINT), 2),
            new InventorySlot(itemService.getItemById(ITEM.COAL), 64, 0),
            new InventorySlot(itemService.getItemById(ITEM.OAK_LOG), 64),
            new InventorySlot(itemService.getItemById(ITEM.GOLD_INGOT), 64),
            new InventorySlot(itemService.getItemById(ITEM.DIAMOND), 64),
            new InventorySlot(itemService.getItemById(ITEM.COBBLESTONE), 64),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),

            // Crafting table
            new InventorySlot(itemService.getItemById(ITEM.COAL), 60),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(itemService.getItemById(ITEM.STICK), 10),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),
            new InventorySlot(null, 0),

            // Crafting table result slot
            new InventorySlot(null, 0),

            // Mouse slot
            new InventorySlot(null, 0),

            // Hand slot
            new InventorySlot(null, 0),

            // Lava slot
            new InventorySlot(null, 0),
        ]
    }

    getHandInventorySlots = () => {
        return this._inventorySlots.slice(0, 9);
    }

    getRegularInventorySlots = () => {
        return this._inventorySlots.slice(9, 36);
    }

    getCraftingTableInventorySlots = () => {
        return this._inventorySlots.slice(36, 45);
    }

    getCraftResultSlot = () => {
        return this._inventorySlots[45];
    }

    getMouseSlot = () => {
        return this._inventorySlots[46];
    }

    getHandSlot = () => {
        return this._inventorySlots[47];
    }

    getLavaSlot = () => {
        return this._inventorySlots[48];
    }

    moveItem(from, to) {
        let indexTo = this._inventorySlots.indexOf(to);
        let indexFrom = this._inventorySlots.indexOf(from);

        // If the items are the same, we want to stack them
        if (from.item && to.item && from.item.id === to.item.id) {
            if (from.quantity + to.quantity <= from.item.maxStack) {
                from.quantity = from.quantity + to.quantity;
                to.item = null;
                to.quantity = null;
            } else {
                to.quantity = from.quantity + to.quantity - from.item.maxStack;
                from.quantity = from.item.maxStack;
            }
        }

        this._inventorySlots[indexTo] = from;
        this._inventorySlots[indexFrom] = to;
    }

    sendItemTo(from, to, quantity) {

        if (from.quantity < quantity) {
            return;
        }

        // If the items are the same, we add the quantity
        if (from.item && to.item && from.item.id === to.item.id) {
            if (to.quantity < to.item.maxStack) {
                from.quantity -= quantity;
                to.quantity += quantity;
                this.checkSlotQuantity(from);
            }
        } else if (!to.item) { // If the other slot is empty, create one there
            to.item = from.item;
            to.quantity = quantity;
            from.quantity -= quantity;
            this.checkSlotQuantity(from);
        }

    }

    checkSlotQuantity(inventorySlot) {
        if (inventorySlot.quantity <= 0) {
            inventorySlot.quantity = 0;
            inventorySlot.item = null;
        }
    }

    getFirstAvailableSlot(item) {

        if (!item) {
            return null;
        }

        const slots = this.getRegularInventorySlots();

        for (let slot of slots) {
            if (slot.item && slot.item.id === item.id && slot.quantity < item.maxStack) {
                return slot;
            }
        }

        for (let slot of slots) {
            if (!slot.item) {
                return slot;
            }
        }

        return null;
    }

}

export default InventoryService;