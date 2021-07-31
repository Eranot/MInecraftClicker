import Item from "../model/Item";
import ITEM from "../enum/ItemsEnum";

class ItemService {

    constructor() {
        this._items = [
            // Basic materials
            new Item(ITEM.OAK_LOG, "Oak log", "block/oak_log", []),
            new Item(ITEM.OAK_PLANKS, "Oak planks", "block/oak_planks", [[ITEM.OAK_LOG]], 4),
            new Item(ITEM.COBBLESTONE, "Cobblestone", "block/cobblestone", []),
            new Item(ITEM.IRON_INGOT, "Iron Ingot", "item/iron_ingot", []),
            new Item(ITEM.GOLD_INGOT, "Gold Ingot", "item/gold_ingot", []),
            new Item(ITEM.DIAMOND, "Diamond", "item/diamond", []),

            // Pickaxes
            new Item(ITEM.WOODEN_PICKAXE, "Wooden Pickaxe", "item/wooden_pickaxe", [
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1),
            new Item(ITEM.STONE_PICKAXE, "Stone Pickaxe", "item/stone_pickaxe", [
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE, ITEM.COBBLESTONE],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1),
            new Item(ITEM.IRON_PICKAXE, "Iron Pickaxe", "item/iron_pickaxe", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1),
            new Item(ITEM.GOLDEN_PICKAXE, "Golden Pickaxe", "item/golden_pickaxe", [
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1),
            new Item(ITEM.DIAMOND_PICKAXE, "Diamond Pickaxe", "item/diamond_pickaxe", [
                [ITEM.DIAMOND, ITEM.DIAMOND, ITEM.DIAMOND],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1),

            // Shovels
            new Item(ITEM.WOODEN_SHOVEL, "Wooden Shovel", "item/wooden_shovel", [
                [ITEM.OAK_PLANKS],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.STONE_SHOVEL, "Stone Shovel", "item/stone_shovel", [
                [ITEM.COBBLESTONE],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.IRON_SHOVEL, "Iron Shovel", "item/iron_shovel", [
                [ITEM.IRON_INGOT],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.GOLDEN_SHOVEL, "Golden Shovel", "item/golden_shovel", [
                [ITEM.GOLD_INGOT],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.DIAMOND_SHOVEL, "Diamond Shovel", "item/diamond_shovel", [
                [ITEM.DIAMOND],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1),

            // Axes
            new Item(ITEM.WOODEN_AXE, "Wooden Axe", "item/wooden_axe", [
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
                [ITEM.OAK_PLANKS, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.STONE_AXE, "Stone Axe", "item/stone_axe", [
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE],
                [ITEM.COBBLESTONE, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.IRON_AXE, "Iron Axe", "item/iron_axe", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [ITEM.IRON_INGOT, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.GOLDEN_AXE, "Golden Axe", "item/golden_axe", [
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [ITEM.GOLD_INGOT, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.DIAMOND_AXE, "Diamond Axe", "item/diamond_axe", [
                [ITEM.DIAMOND, ITEM.DIAMOND],
                [ITEM.DIAMOND, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),

            // Hoes
            new Item(ITEM.WOODEN_HOE, "Wooden Hoe", "item/wooden_hoe", [
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
                [null, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.STONE_HOE, "Stone Hoe", "item/stone_hoe", [
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE],
                [null, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.IRON_HOE, "Iron Hoe", "item/iron_hoe", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [null, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.GOLDEN_HOE, "Golden Hoe", "item/golden_hoe", [
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [null, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.DIAMOND_HOE, "Diamond Hoe", "item/diamond_hoe", [
                [ITEM.DIAMOND, ITEM.DIAMOND],
                [null, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1),

            // Ores
            new Item(ITEM.IRON_ORE, "Iron Ore", "block/iron_ore", []),
            new Item(ITEM.GOLD_ORE, "Gold Ore", "block/gold_ore", []),

            // Commom blocks
            new Item(ITEM.CRAFTING_TABLE, "Crafting Table", "block/crafting_table_front", [
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
                [ITEM.OAK_PLANKS, null, ITEM.OAK_PLANKS],
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
            ], 1, 1),
            new Item(ITEM.FURNACE, "Furnace", "block/furnace_front", [
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE, ITEM.COBBLESTONE],
                [ITEM.COBBLESTONE, null, ITEM.COBBLESTONE],
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE, ITEM.COBBLESTONE],
            ], 1, 1),

            new Item(ITEM.APPLE, "Apple", "item/apple", []),
            new Item(ITEM.SUGAR_CANE, "Sugar cane", "item/sugar_cane", []),
            new Item(ITEM.EGG, "Egg", "item/egg", []),


            new Item(ITEM.STICK, "Stick", "item/stick", [[ITEM.OAK_PLANKS], [ITEM.OAK_PLANKS]], 4),
            new Item(ITEM.FLINT, "Flint", "item/flint", []),
            new Item(ITEM.COAL, "Coal", "item/coal", []),
            new Item(ITEM.TORCH, "Torch", "item/torch", [[ITEM.COAL], [ITEM.STICK]], 4),
            new Item(ITEM.FLINT_AND_STEEL, "Flint and steel", "item/flint_and_steel", [
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