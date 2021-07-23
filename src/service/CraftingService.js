import ItemService from '../service/ItemService';

class CraftingService {

    constructor() {
        this.itemService = new ItemService();
    }

    // Returns the new item, quantity of the item
    craftItem(inventorySlots, columns, rows) {
        const items = this.itemService.getAllItems();

        for (const item of items) {
            let quantity = this._testRecipe(inventorySlots, columns, rows, item);
            if (quantity > 0) {
                console.log({ item, quantity });
                return [item, quantity];
            }
        }

        return [null, null];
    }

    removeItemsFromCraftingSpace(inventorySlots, columns, rows, craftingInventorySlot) {
        const item = craftingInventorySlot.item;
        const quantityToRemove = craftingInventorySlot.quantity;

        if (!item || item.recipe.length == 0 || item.recipe.length > rows || item.recipe[0].lenght > columns) {
            return false;
        }

        for (let rowModifier = 0; rowModifier <= rows - item.recipe.length; rowModifier += 1) {
            for (let columnModifier = 0; columnModifier <= columns - item.recipe[0].length; columnModifier += 1) {
                if (this._testRecipeWithModifiers(inventorySlots, columns, rows, item, rowModifier, columnModifier)) {

                    for (let row = rowModifier; row < item.recipe.length + rowModifier; row += 1) {
                        for (let column = columnModifier; column < item.recipe[0].length + columnModifier; column += 1) {

                            let index = row * columns + column;

                            if (inventorySlots[index].quantity <= quantityToRemove) {
                                inventorySlots[index].item = null;
                                inventorySlots[index].quantity = null;
                            } else {
                                inventorySlots[index].quantity -= quantityToRemove;
                            }


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
                let quantity = this._testRecipeWithModifiers(inventorySlots, columns, rows, item, rowModifier, columnModifier);
                if (quantity > 0) {
                    return quantity;
                }
            }
        }

        return 0;
    }

    _testRecipeWithModifiers(inventorySlots, columns, rows, item, rowModifier, columnModifier) {
        let lessQuantity = item.maxStack;

        for (let row = 0; row < rows; row += 1) {
            for (let column = 0; column < columns; column += 1) {

                if (row < rowModifier || column < columnModifier) {
                    let indexNormal = row * columns + column;
                    let itemId = inventorySlots[indexNormal]?.item?.id ?? null;
                    if (itemId) {
                        return 0;
                    }
                }

                let index = (row + rowModifier) * columns + (column + columnModifier);
                let itemId = inventorySlots[index]?.item?.id ?? null;

                // Se o item não tem esse index (por exemplo, quando ele é 2x2)
                if ((row >= item.recipe.length || column >= item.recipe[0].length)) {

                    // Se não tem nenhum item na Crafting table a mais, tá safe
                    if (!itemId) {
                        continue;
                    } else { // Se tem um item, não pode ser o item selecionado
                        return 0;
                    }
                }

                if (itemId !== item.recipe[row][column]) {
                    return 0;
                }

                lessQuantity = lessQuantity > inventorySlots[index].quantity ? inventorySlots[index].quantity : lessQuantity;
            }
        }

        return lessQuantity;
    }

}

export default CraftingService;