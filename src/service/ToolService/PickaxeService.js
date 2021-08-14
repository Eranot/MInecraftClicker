import ITEM from "../../enum/ItemsEnum";
import ToolService from "./ToolService";

class PickaxeService extends ToolService {

    getRandomItem(equipedItemId) {
        let options = [];

        switch (equipedItemId) {
            case ITEM.WOODEN_PICKAXE:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 90 },
                    { id: ITEM.COAL, chance: 10 },
                ];
                break;
            case ITEM.STONE_PICKAXE:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 90 },
                    { id: ITEM.COAL, chance: 10 },
                    { id: ITEM.IRON_ORE, chance: 6 },
                    { id: ITEM.GOLD_ORE, chance: 3 },
                    { id: ITEM.REDSTONE, chance: 3 },
                ];
                break;
            case ITEM.IRON_PICKAXE:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 90 },
                    { id: ITEM.COAL, chance: 10 },
                    { id: ITEM.IRON_ORE, chance: 6 },
                    { id: ITEM.GOLD_ORE, chance: 3 },
                    { id: ITEM.REDSTONE, chance: 3 },
                    { id: ITEM.DIAMOND, chance: 1 },
                ];
                break;
            case ITEM.GOLDEN_PICKAXE:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 90 },
                    { id: ITEM.COAL, chance: 10 },
                    { id: ITEM.IRON_ORE, chance: 6 },
                    { id: ITEM.GOLD_ORE, chance: 3 },
                    { id: ITEM.REDSTONE, chance: 3 },
                ];
                break;
            case ITEM.DIAMOND_PICKAXE:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 90 },
                    { id: ITEM.COAL, chance: 10 },
                    { id: ITEM.IRON_ORE, chance: 6 },
                    { id: ITEM.GOLD_ORE, chance: 3 },
                    { id: ITEM.REDSTONE, chance: 3 },
                    { id: ITEM.DIAMOND, chance: 1 },
                    { id: ITEM.OBSIDIAN, chance: 1 },
                ];
                break;
            default:
                options = [];
                break;
        }

        return this.getItemIdFromOptions(options);
    }

}

export default PickaxeService;