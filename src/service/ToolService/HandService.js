import ITEM from "../../enum/ItemsEnum";
import ToolService from "./ToolService";

class HandService extends ToolService {

    getRandomItem() {
        let options = [];

        options = [
            { id: ITEM.OAK_LOG, chance: 80 },
            { id: ITEM.APPLE, chance: 7 },
            { id: ITEM.SUGAR_CANE, chance: 7 },
            { id: ITEM.EGG, chance: 7 },
        ];

        return this.getItemIdFromOptions(options);
    }

}

export default HandService;