import ITEM from "../../enum/ItemsEnum";
import ToolService from "./ToolService";

class HandService extends ToolService {

    getRandomItem() {
        let options = [];

        options = [
            { id: ITEM.OAK_LOG, chance: 1 },
        ];

        return this.getItemIdFromOptions(options);
    }

}

export default HandService;