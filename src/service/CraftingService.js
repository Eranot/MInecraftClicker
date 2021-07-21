import ItemService from '../service/ItemService';

class CraftingService {

    constructor() {
        this.itemService = new ItemService();
    }

    // Returns the new item, quantity of the item
    craftItem(inventorySlots, columns, rows) {
        const items = this.itemService.getAllItems();

        for (const item of items) {
            if (this._testRecipe(inventorySlots, columns, rows, item)) {
                console.log({ item });
                return [item, 1];
            }
        }

        return [null, null];
    }

    removeItemsFromCraftingSpace(inventorySlots, columns, rows, item) {
        if (!item || item.recipe.length == 0 || item.recipe.length > rows || item.recipe[0].lenght > columns) {
            return false;
        }

        for (let rowModifier = 0; rowModifier <= rows - item.recipe.length; rowModifier += 1) {
            for (let columnModifier = 0; columnModifier <= columns - item.recipe[0].length; columnModifier += 1) {
                if (this._testRecipeWithModifiers(inventorySlots, columns, rows, item, rowModifier, columnModifier)) {

                    for (let row = rowModifier; row < item.recipe.length + rowModifier; row += 1) {
                        for (let column = columnModifier; column < item.recipe[0].length + columnModifier; column += 1) {

                            let index = row * columns + column;

                            inventorySlots[index].item = null;
                            inventorySlots[index].quantity = null;

                        }
                    }

                }
            }
        }
    }

    _testRecipe(inventorySlots, columns, rows, item) {

        if (item.recipe.length == 0 || item.recipe.length > rows || item.recipe[0].lenght > columns) {
            return false;
        }

        for (let rowModifier = 0; rowModifier <= rows - item.recipe.length; rowModifier += 1) {
            for (let columnModifier = 0; columnModifier <= columns - item.recipe[0].length; columnModifier += 1) {
                if (this._testRecipeWithModifiers(inventorySlots, columns, rows, item, rowModifier, columnModifier)) {
                    return true;
                }
            }
        }

        return false;
    }

    _testRecipeWithModifiers(inventorySlots, columns, rows, item, rowModifier, columnModifier) {
        for (let row = 0; row < rows; row += 1) {
            for (let column = 0; column < columns; column += 1) {
                let index = (row + rowModifier) * columns + (column + columnModifier);
                let itemId = inventorySlots[index]?.item?.id ?? null;

                // Se o item não tem esse index (por exemplo, quando ele é 2x2)
                if ((row >= item.recipe.length || column >= item.recipe[0].length)) {

                    // Se não tem nenhum item na Crafting table a mais, tá safe
                    if (!itemId) {
                        continue;
                    } else { // Se tem um item, não pode ser o item selecionado
                        return false;
                    }
                }

                if (itemId !== item.recipe[row][column]) {
                    return false;
                }
            }
        }

        return true;
    }

}

export default CraftingService;