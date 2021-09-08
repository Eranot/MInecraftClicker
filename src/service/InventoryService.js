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
            new InventorySlot(0, null, 0, false, true),
            new InventorySlot(1, null, 0, false, true),
            new InventorySlot(2, null, 0, false, true),
            new InventorySlot(3),
            new InventorySlot(4),
            new InventorySlot(5),
            new InventorySlot(6),
            new InventorySlot(7),
            new InventorySlot(8),

            // Regular inventory
            new InventorySlot(9, itemService.getItemById(ITEM.WOODEN_PICKAXE), 1),
            new InventorySlot(10, itemService.getItemById(ITEM.STONE_PICKAXE), 1),
            new InventorySlot(11, itemService.getItemById(ITEM.IRON_PICKAXE), 1),
            new InventorySlot(12, itemService.getItemById(ITEM.GOLDEN_PICKAXE), 1),
            new InventorySlot(13, itemService.getItemById(ITEM.DIAMOND_PICKAXE), 1),
            new InventorySlot(14, itemService.getItemById(ITEM.FLINT), 2),
            new InventorySlot(15, itemService.getItemById(ITEM.COAL), 64, 0),
            new InventorySlot(16, itemService.getItemById(ITEM.COAL), 1),
            new InventorySlot(17, itemService.getItemById(ITEM.GOLD_INGOT), 64),
            new InventorySlot(18, itemService.getItemById(ITEM.SAND), 64),
            new InventorySlot(19, itemService.getItemById(ITEM.GLASS), 64),
            new InventorySlot(20, itemService.getItemById(ITEM.WOODEN_PICKAXE), 1),
            new InventorySlot(21, itemService.getItemById(ITEM.STRING), 64),
            new InventorySlot(22, itemService.getItemById(ITEM.STICK), 64),
            new InventorySlot(23),
            new InventorySlot(24),
            new InventorySlot(25),
            new InventorySlot(26),
            new InventorySlot(27),
            new InventorySlot(28),
            new InventorySlot(29),
            new InventorySlot(30),
            new InventorySlot(31),
            new InventorySlot(32),
            new InventorySlot(33),
            new InventorySlot(34),
            new InventorySlot(35),

            // Crafting table
            new InventorySlot(36),
            new InventorySlot(37),
            new InventorySlot(38),
            new InventorySlot(39),
            new InventorySlot(40),
            new InventorySlot(41),
            new InventorySlot(42),
            new InventorySlot(43),
            new InventorySlot(44),

            // Crafting table result slot
            new InventorySlot(45, null, 0, true),

            // Mouse slot
            new InventorySlot(46),

            // Hand slot
            new InventorySlot(47),

            // Lava slot
            new InventorySlot(48),

            // Furnace fuel
            new InventorySlot(49),

            // Furnace burn
            new InventorySlot(50),

            // Furnace result
            new InventorySlot(51),
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

    getFurnaceFuelSlot = () => {
        return this._inventorySlots[49];
    }

    getFurnaceBurnSlot = () => {
        return this._inventorySlots[50];
    }

    getFurnaceResultSlot = () => {
        return this._inventorySlots[51];
    }

    moveItem(from, to) {

        // Verifies if the result slot is receiveing an item
        if ((to.isCraftResult && from.item) || (from.isCraftResult && to.item)) {
            return;
        }

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

        // Makes the move
        const auxItem = from.item;
        const auxQuantity = from.quantity;

        from.item = to.item;
        from.quantity = to.quantity;

        to.item = auxItem;
        to.quantity = auxQuantity;
    }

    sendItemTo(from, to, quantity) {

        // Verifies if the result slot is receiveing an item
        if ((to.isCraftResult && from.item) || (from.isCraftResult && to.item)) {
            return;
        }

        if (from.quantity < quantity) {
            return;
        }

        // If the items are the same, we add the quantity
        if (from.item && to.item && from.item.id === to.item.id) {
            if (to.quantity < to.item.maxStack) {
                from.quantity -= quantity;
                to.quantity += quantity;
                this.checkSlotQuantity(from);
                this.checkSlotQuantity(to);
            }
        } else if (!to.item) { // If the other slot is empty, create one there
            to.item = from.item;
            to.quantity = quantity;
            from.quantity -= quantity;
            this.checkSlotQuantity(from);
            this.checkSlotQuantity(to);
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

        const regularSlots = this.getRegularInventorySlots();
        const handSlots = this.getHandInventorySlots();

        // First tries to stack
        for (let slot of regularSlots) {
            if (slot.item && slot.item.id === item.id && slot.quantity < item.maxStack) {
                return slot;
            }
        }

        for (let slot of handSlots) {
            if (slot.item && slot.item.id === item.id && slot.quantity < item.maxStack) {
                return slot;
            }
        }

        // Empty slots 
        for (let slot of regularSlots) {
            if (!slot.item) {
                return slot;
            }
        }

        for (let slot of handSlots) {
            if (!slot.item) {
                return slot;
            }
        }

        return null;
    }

}

export default InventoryService;