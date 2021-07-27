import ITEM from "../../enum/ItemsEnum";
import ToolService from "./ToolService";

class PickaxeService extends ToolService {

    getRandomItem(equipedItemId) {
        let options = [];

        switch (equipedItemId) {
            case ITEM.WOODEN_PICKAXE:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 50 },
                    { id: ITEM.COAL, chance: 50 },
                ];
                break;
            case ITEM.STONE_PICKAXE:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 50 },
                    { id: ITEM.COAL, chance: 50 },
                ];
                break;
            case ITEM.IRON_PICKAXE:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 50 },
                    { id: ITEM.COAL, chance: 50 },
                ];
                break;
            case ITEM.GOLDEN_PICKAXE:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 50 },
                    { id: ITEM.COAL, chance: 50 },
                ];
                break;
            case ITEM.DIAMOND_PICKAXE:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 50 },
                    { id: ITEM.COAL, chance: 50 },
                ];
                break;
            default:
                options = [
                    { id: ITEM.COBBLESTONE, chance: 50 },
                    { id: ITEM.COAL, chance: 50 },
                ];
                break;
        }

        return this.getItemIdFromOptions(options);
    }

}

export default PickaxeService;