import ITEM from "../../enum/ItemsEnum";
import ToolService from "./ToolService";

class FishingRodService extends ToolService {

    getRandomItem(equipedItemId) {
        let options = [];

        switch (equipedItemId) {
            case ITEM.FISHING_ROD:
                options = [
                    { id: ITEM.COD, chance: 50 },
                    { id: ITEM.SALMON, chance: 40 },
                    { id: ITEM.PUFFERFISH, chance: 10 },
                    { id: ITEM.TROPICAL_FISH, chance: 10 },
                ];
                break;
            default:
                options = [];
                break;
        }

        return this.getItemIdFromOptions(options);
    }

}

export default FishingRodService;