import Item from "../model/Item";
import ITEM from "../enum/ItemsEnum";

class ItemService {

    constructor() {
        this._items = [
            // Basic materials
            new Item(ITEM.OAK_LOG, "Oak log", "oak_log", []),
            new Item(ITEM.OAK_PLANKS, "Oak planks", "oak_planks", [[ITEM.OAK_LOG]], 4),
            new Item(ITEM.COBBLESTONE, "Cobblestone", "cobblestone", []),
            new Item(ITEM.IRON_INGOT, "Iron Ingot", "iron_ingot", []),
            new Item(ITEM.GOLD_INGOT, "Gold Ingot", "gold_ingot", []),
            new Item(ITEM.DIAMOND, "Diamond", "diamond", []),

            // Pickaxes
            new Item(ITEM.WOODEN_PICKAXE, "Wooden Pickaxe", "wooden_pickaxe", [
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1),
            new Item(ITEM.STONE_PICKAXE, "Stone Pickaxe", "stone_pickaxe", [
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE, ITEM.COBBLESTONE],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1),
            new Item(ITEM.IRON_PICKAXE, "Iron Pickaxe", "iron_pickaxe", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1),
            new Item(ITEM.GOLDEN_PICKAXE, "Golden Pickaxe", "golden_pickaxe", [
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1),
            new Item(ITEM.DIAMOND_PICKAXE, "Diamond Pickaxe", "diamond_pickaxe", [
                [ITEM.DIAMOND, ITEM.DIAMOND, ITEM.DIAMOND],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1),

            // Shovels
            new Item(ITEM.WOODEN_SHOVEL, "Wooden Shovel", "wooden_shovel", [
                [ITEM.OAK_PLANKS],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.STONE_SHOVEL, "Stone Shovel", "stone_shovel", [
                [ITEM.COBBLESTONE],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.IRON_SHOVEL, "Iron Shovel", "iron_shovel", [
                [ITEM.IRON_INGOT],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.GOLDEN_SHOVEL, "Golden Shovel", "golden_shovel", [
                [ITEM.GOLD_INGOT],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.DIAMOND_SHOVEL, "Diamond Shovel", "diamond_shovel", [
                [ITEM.DIAMOND],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1),

            // Axes
            new Item(ITEM.WOODEN_AXE, "Wooden Axe", "wooden_axe", [
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
                [ITEM.OAK_PLANKS, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.STONE_AXE, "Stone Axe", "stone_axe", [
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE],
                [ITEM.COBBLESTONE, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.IRON_AXE, "Iron Axe", "iron_axe", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [ITEM.IRON_INGOT, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.GOLDEN_AXE, "Golden Axe", "golden_axe", [
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [ITEM.GOLD_INGOT, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.DIAMOND_AXE, "Diamond Axe", "diamond_axe", [
                [ITEM.DIAMOND, ITEM.DIAMOND],
                [ITEM.DIAMOND, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),

            // Hoes
            new Item(ITEM.WOODEN_HOE, "Wooden Hoe", "wooden_hoe", [
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
                [null, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.STONE_HOE, "Stone Hoe", "stone_hoe", [
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE],
                [null, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.IRON_HOE, "Iron Hoe", "iron_hoe", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [null, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.GOLDEN_HOE, "Golden Hoe", "golden_hoe", [
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [null, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.DIAMOND_HOE, "Diamond Hoe", "diamond_hoe", [
                [ITEM.DIAMOND, ITEM.DIAMOND],
                [null, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),

            // Commom blocks
            new Item(ITEM.CRAFTING_TABLE, "Crafting Table", "crafting_table_front", [
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
                [ITEM.OAK_PLANKS, null, ITEM.OAK_PLANKS],
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
            ], 1, 1),
            new Item(ITEM.FURNACE, "Furnace", "furnace_front", [
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE, ITEM.COBBLESTONE],
                [ITEM.COBBLESTONE, null, ITEM.COBBLESTONE],
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE, ITEM.COBBLESTONE],
            ], 1, 1),

            new Item(ITEM.STICK, "Stick", "stick", [[ITEM.OAK_PLANKS], [ITEM.OAK_PLANKS]], 4),
            new Item(ITEM.FLINT, "Flint", "flint", []),
            new Item(ITEM.COAL, "Coal", "coal", []),
            new Item(ITEM.TORCH, "Torch", "torch", [[ITEM.COAL], [ITEM.STICK]], 4),
            new Item(ITEM.FLINT_AND_STEEL, "Flint and steel", "flint_and_steel", [
                [ITEM.IRON_INGOT, ITEM.FLINT],
            ], 1),
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