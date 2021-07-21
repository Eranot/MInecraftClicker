import Item from "../model/Item";
import ITEM from "../enum/ItemsEnum";

class ItemService {

    constructor() {
        this._items = [
            new Item(ITEM.FLINT_AND_STEEL, "Flint and steel", "flint_and_steel", [
                [ITEM.IRON_INGOT, ITEM.FLINT],
            ]),
            new Item(ITEM.WOODEN_PICKAXE, "Wooden Pickaxe", "wooden_pickaxe", []),
            new Item(ITEM.IRON_PICKAXE, "Iron Pickaxe", "iron_pickaxe", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ]),
            new Item(ITEM.WOOD, "Wood", "wood", []),
            new Item(ITEM.IRON_INGOT, "Iron Ingot", "iron_ingot", []),
            new Item(ITEM.COBBLESTONE, "Cobblestone", "cobblestone", []),
            new Item(ITEM.STICK, "Stick", "stick", []),
            new Item(ITEM.FLINT, "Flint", "flint", []),
        ]
    }

    getAllItems = () => {
        return this._items;
    }

    getItemById(id) {
        return this._items.find(item => item.id === id);
    }
}

export default ItemService;