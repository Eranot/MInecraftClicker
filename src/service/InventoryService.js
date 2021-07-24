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
            new InventorySlot(null, 0),
            // Regular inventory
            new InventorySlot(itemService.getItemById(ITEM.IRON_INGOT), 1),
            new InventorySlot(itemService.getItemById(ITEM.IRON_INGOT), 1),
            new InventorySlot(itemService.getItemById(ITEM.IRON_INGOT), 2),
            new InventorySlot(itemService.getItemById(ITEM.STICK), 63),
            new InventorySlot(itemService.getItemById(ITEM.STICK), 2),
            new InventorySlot(itemService.getItemById(ITEM.FLINT), 2),
            new InventorySlot(itemService.getItemById(ITEM.COAL), 64, 0),
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
        ]
    }

    getRegularInventorySlots = () => {
        return this._inventorySlots.slice(10, 37);
    }

    getCraftingTableInventorySlots = () => {
        return this._inventorySlots.slice(37, 46);
    }

    getCraftResultSlot = () => {
        return this._inventorySlots[46];
    }

    getMouseSlot = () => {
        return this._inventorySlots[47];
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
}

export default InventoryService;