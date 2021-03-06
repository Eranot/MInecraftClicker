import Item from "../model/Item";
import ITEM from "../enum/ItemsEnum";

class ItemService {

    constructor() {
        this._items = [
            // Basic materials
            new Item(ITEM.OAK_LOG, "Oak log", "block/oak_log", []),
            new Item(ITEM.OAK_PLANKS, "Oak planks", "block/oak_planks", [[ITEM.OAK_LOG]], 4),
            Item.burnable(ITEM.COBBLESTONE, "Cobblestone", "block/cobblestone", ITEM.STONE),
            new Item(ITEM.STONE, "Stone", "block/stone", []),
            new Item(ITEM.IRON_INGOT, "Iron Ingot", "item/iron_ingot", []),
            new Item(ITEM.GOLD_INGOT, "Gold Ingot", "item/gold_ingot", []),
            new Item(ITEM.DIAMOND, "Diamond", "item/diamond", []),
            new Item(ITEM.OBSIDIAN, "Obsidian", "block/obsidian", []),

            // Pickaxes
            new Item(ITEM.WOODEN_PICKAXE, "Wooden Pickaxe", "item/wooden_pickaxe", [
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1, true),
            new Item(ITEM.STONE_PICKAXE, "Stone Pickaxe", "item/stone_pickaxe", [
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE, ITEM.COBBLESTONE],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1, true),
            new Item(ITEM.IRON_PICKAXE, "Iron Pickaxe", "item/iron_pickaxe", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1, true),
            new Item(ITEM.GOLDEN_PICKAXE, "Golden Pickaxe", "item/golden_pickaxe", [
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1, true),
            new Item(ITEM.DIAMOND_PICKAXE, "Diamond Pickaxe", "item/diamond_pickaxe", [
                [ITEM.DIAMOND, ITEM.DIAMOND, ITEM.DIAMOND],
                [null, ITEM.STICK, null],
                [null, ITEM.STICK, null],
            ], 1, 1, true),

            // Shovels
            new Item(ITEM.WOODEN_SHOVEL, "Wooden Shovel", "item/wooden_shovel", [
                [ITEM.OAK_PLANKS],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1, true),
            new Item(ITEM.STONE_SHOVEL, "Stone Shovel", "item/stone_shovel", [
                [ITEM.COBBLESTONE],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1, true),
            new Item(ITEM.IRON_SHOVEL, "Iron Shovel", "item/iron_shovel", [
                [ITEM.IRON_INGOT],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1, true),
            new Item(ITEM.GOLDEN_SHOVEL, "Golden Shovel", "item/golden_shovel", [
                [ITEM.GOLD_INGOT],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1, true),
            new Item(ITEM.DIAMOND_SHOVEL, "Diamond Shovel", "item/diamond_shovel", [
                [ITEM.DIAMOND],
                [ITEM.STICK],
                [ITEM.STICK],
            ], 1, 1, true),

            // Axes
            new Item(ITEM.WOODEN_AXE, "Wooden Axe", "item/wooden_axe", [
                [ITEM.OAK_PLANKS, ITEM.OAK_PLANKS],
                [ITEM.OAK_PLANKS, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1, true),
            new Item(ITEM.STONE_AXE, "Stone Axe", "item/stone_axe", [
                [ITEM.COBBLESTONE, ITEM.COBBLESTONE],
                [ITEM.COBBLESTONE, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1, true),
            new Item(ITEM.IRON_AXE, "Iron Axe", "item/iron_axe", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [ITEM.IRON_INGOT, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1, true),
            new Item(ITEM.GOLDEN_AXE, "Golden Axe", "item/golden_axe", [
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [ITEM.GOLD_INGOT, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1, true),
            new Item(ITEM.DIAMOND_AXE, "Diamond Axe", "item/diamond_axe", [
                [ITEM.DIAMOND, ITEM.DIAMOND],
                [ITEM.DIAMOND, ITEM.STICK],
                [null, ITEM.STICK],
            ], 1, 1, true),

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

            // Swords
            new Item(ITEM.WOODEN_SWORD, "Wooden Sword", "item/wooden_sword", [
                [ITEM.OAK_PLANKS],
                [ITEM.OAK_PLANKS],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.STONE_SWORD, "Stone Sword", "item/stone_sword", [
                [ITEM.COBBLESTONE],
                [ITEM.COBBLESTONE],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.IRON_SWORD, "Iron Sword", "item/iron_sword", [
                [ITEM.IRON_INGOT],
                [ITEM.IRON_INGOT],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.GOLDEN_SWORD, "Golden Sword", "item/golden_sword", [
                [ITEM.GOLD_INGOT],
                [ITEM.GOLD_INGOT],
                [ITEM.STICK],
            ], 1, 1),
            new Item(ITEM.DIAMOND_SWORD, "Diamond Sword", "item/diamond_sword", [
                [ITEM.DIAMOND],
                [ITEM.DIAMOND],
                [ITEM.STICK],
            ], 1, 1),

            // Ores
            Item.burnable(ITEM.IRON_ORE, "Iron Ore", "block/iron_ore", ITEM.IRON_INGOT),
            Item.burnable(ITEM.GOLD_ORE, "Gold Ore", "block/gold_ore", ITEM.GOLD_INGOT),

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
            Item.fuel(ITEM.COAL, "Coal", "item/coal", 8),
            new Item(ITEM.REDSTONE, "Redstone", "item/redstone", []),
            new Item(ITEM.TORCH, "Torch", "block/torch", [[ITEM.COAL], [ITEM.STICK]], 4),
            new Item(ITEM.FLINT_AND_STEEL, "Flint and steel", "item/flint_and_steel", [
                [ITEM.IRON_INGOT, ITEM.FLINT],
            ], 1, 1),

            new Item(ITEM.STONE_BRICKS, "Stone Bricks", "block/stone_bricks", [
                [ITEM.STONE, ITEM.STONE], [ITEM.STONE, ITEM.STONE]
            ], 4),
            Item.burnable(ITEM.SAND, "Sand", "block/sand", ITEM.GLASS, 64),
            new Item(ITEM.GLASS, "Glass", "block/glass", []),
            new Item(ITEM.GLASS_PANE, "Glass pane", "block/glass", [
                [ITEM.GLASS, ITEM.GLASS], [ITEM.GLASS, ITEM.GLASS]
            ], 4),
            new Item(ITEM.DIRT, "Dirt", "block/dirt", []),
            new Item(ITEM.STRING, "String", "item/string", []),
            new Item(ITEM.FISHING_ROD, "Fishing rod", "item/fishing_rod", [
                [null, null, ITEM.STICK],
                [null, ITEM.STICK, ITEM.STRING],
                [ITEM.STICK, null, ITEM.STRING],
            ], 1, 1, true),

            Item.burnable(ITEM.COD, "Cod", "item/cod", ITEM.COOKED_COD),
            new Item(ITEM.COOKED_COD, "Cooked Cod", "item/cooked_cod", []),

            Item.burnable(ITEM.SALMON, "Salmon", "item/salmon", ITEM.COOKED_SALMON),
            new Item(ITEM.COOKED_SALMON, "Cooked Salmon", "item/cooked_salmon", []),

            new Item(ITEM.PUFFERFISH, "Pufferfish", "item/pufferfish", []),
            new Item(ITEM.TROPICAL_FISH, "Tropical fish", "item/tropical_fish", []),

            Item.burnable(ITEM.BEEF, "Beef", "item/beef", ITEM.COOKED_BEEF),
            new Item(ITEM.COOKED_BEEF, "Cooked Beef", "item/cooked_beef", []),

            Item.burnable(ITEM.CHICKEN, "Chicken", "item/chicken", ITEM.COOKED_CHICKEN),
            new Item(ITEM.COOKED_CHICKEN, "Cooked Chicken", "item/cooked_chicken", []),

            new Item(ITEM.LADDER, "Ladder", "block/ladder", [
                [ITEM.STICK, null, ITEM.STICK],
                [ITEM.STICK, ITEM.STICK, ITEM.STICK],
                [ITEM.STICK, null, ITEM.STICK],
            ]),
            new Item(ITEM.LEATHER, "Leather", "item/leather", []),

            // Boots
            new Item(ITEM.LEATHER_BOOTS, "Leather boots", "item/leather_boots", [
                [ITEM.LEATHER, null, ITEM.LEATHER],
                [ITEM.LEATHER, null, ITEM.LEATHER],
            ], 1, 1),
            new Item(ITEM.IRON_BOOTS, "Iron boots", "item/iron_boots", [
                [ITEM.IRON_INGOT, null, ITEM.IRON_INGOT],
                [ITEM.IRON_INGOT, null, ITEM.IRON_INGOT],
            ], 1, 1),
            new Item(ITEM.GOLDEN_BOOTS, "Golden boots", "item/golden_boots", [
                [ITEM.GOLD_INGOT, null, ITEM.GOLD_INGOT],
                [ITEM.GOLD_INGOT, null, ITEM.GOLD_INGOT],
            ], 1, 1),
            new Item(ITEM.DIAMOND_BOOTS, "Diamond boots", "item/diamond_boots", [
                [ITEM.DIAMOND, null, ITEM.DIAMOND],
                [ITEM.DIAMOND, null, ITEM.DIAMOND],
            ], 1, 1),
            new Item(ITEM.CHAINMAIL_BOOTS, "Chainmail boots", "item/chainmail_boots", [], 1, 1),

            // Leggings
            new Item(ITEM.LEATHER_LEGGINGS, "Leather leggings", "item/leather_leggings", [
                [ITEM.LEATHER, ITEM.LEATHER, ITEM.LEATHER],
                [ITEM.LEATHER, null, ITEM.LEATHER],
                [ITEM.LEATHER, null, ITEM.LEATHER],
            ], 1, 1),
            new Item(ITEM.IRON_LEGGINGS, "Iron leggings", "item/iron_leggings", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [ITEM.IRON_INGOT, null, ITEM.IRON_INGOT],
                [ITEM.IRON_INGOT, null, ITEM.IRON_INGOT],
            ], 1, 1),
            new Item(ITEM.GOLDEN_LEGGINGS, "Golden leggings", "item/golden_leggings", [
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [ITEM.GOLD_INGOT, null, ITEM.GOLD_INGOT],
                [ITEM.GOLD_INGOT, null, ITEM.GOLD_INGOT],
            ], 1, 1),
            new Item(ITEM.DIAMOND_LEGGINGS, "Diamond leggings", "item/diamond_leggings", [
                [ITEM.DIAMOND, ITEM.DIAMOND, ITEM.DIAMOND],
                [ITEM.DIAMOND, null, ITEM.DIAMOND],
                [ITEM.DIAMOND, null, ITEM.DIAMOND],
            ], 1, 1),
            new Item(ITEM.CHAINMAIL_LEGGINGS, "Chainmail leggings", "item/chainmail_leggings", [], 1, 1),

            // Chestplates
            new Item(ITEM.LEATHER_CHESTPLATE, "Leather chestplate", "item/leather_chestplate", [
                [ITEM.LEATHER, null, ITEM.LEATHER],
                [ITEM.LEATHER, ITEM.LEATHER, ITEM.LEATHER],
                [ITEM.LEATHER, ITEM.LEATHER, ITEM.LEATHER],
            ], 1, 1),
            new Item(ITEM.IRON_CHESTPLATE, "Iron chestplate", "item/iron_chestplate", [
                [ITEM.IRON_INGOT, null, ITEM.IRON_INGOT],
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT, ITEM.IRON_INGOT],
            ], 1, 1),
            new Item(ITEM.GOLDEN_CHESTPLATE, "Golden chestplate", "item/golden_chestplate", [
                [ITEM.GOLD_INGOT, null, ITEM.GOLD_INGOT],
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
            ], 1, 1),
            new Item(ITEM.DIAMOND_CHESTPLATE, "Diamond chestplate", "item/diamond_chestplate", [
                [ITEM.DIAMOND, ITEM.DIAMOND, ITEM.DIAMOND],
                [ITEM.DIAMOND, null, ITEM.DIAMOND],
            ], 1, 1),
            new Item(ITEM.CHAINMAIL_CHESTPLATE, "Chainmail chestplate", "item/chainmail_chestplate", [], 1, 1),

            // Helmets
            new Item(ITEM.LEATHER_HELMET, "Leather helmet", "item/leather_helmet", [
                [ITEM.LEATHER, ITEM.LEATHER, ITEM.LEATHER],
                [ITEM.LEATHER, null, ITEM.LEATHER],
            ], 1, 1),
            new Item(ITEM.IRON_HELMET, "Iron helmet", "item/iron_helmet", [
                [ITEM.IRON_INGOT, ITEM.IRON_INGOT, ITEM.IRON_INGOT],
                [ITEM.IRON_INGOT, null, ITEM.IRON_INGOT],
            ], 1, 1),
            new Item(ITEM.GOLDEN_HELMET, "Golden helmet", "item/golden_helmet", [
                [ITEM.GOLD_INGOT, ITEM.GOLD_INGOT, ITEM.GOLD_INGOT],
                [ITEM.GOLD_INGOT, null, ITEM.GOLD_INGOT],
            ], 1, 1),
            new Item(ITEM.DIAMOND_HELMET, "Diamond helmet", "item/diamond_helmet", [
                [ITEM.DIAMOND, ITEM.DIAMOND, ITEM.DIAMOND],
                [ITEM.DIAMOND, null, ITEM.DIAMOND],
            ], 1, 1),
            new Item(ITEM.CHAINMAIL_CHESTPLATE, "Chainmail helmet", "item/chainmail_helmet", [], 1, 1),
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