class Item {

    constructor(id, name, icon, recipe, recipeQuantity, maxStack, isTool = false) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.recipe = recipe;
        this.recipeQuantity = recipeQuantity ?? 1;
        this.maxStack = maxStack ?? 64;
        this.isTool = isTool;
    }

    static burnable(id, name, icon, burnedItemId, maxStack) {

        const item = new Item();
        item.id = id;
        item.name = name;
        item.icon = icon;
        item.burnedItemId = burnedItemId;
        item.maxStack = maxStack ?? 64;
        item.isTool = false;
        item.recipe = [];
        item.recipeQuantity = 0;

        return item;
    }

    static fuel(id, name, icon, fuelQuantity, maxStack) {

        const item = new Item();
        item.id = id;
        item.name = name;
        item.icon = icon;
        item.fuelQuantity = fuelQuantity;
        item.maxStack = maxStack ?? 64;
        item.isTool = false;
        item.recipe = [];
        item.recipeQuantity = 0;

        return item;
    }

    isBurnable() {
        return this.burnedItemId != null;
    }

    isFuel() {
        return this.fuelQuantity != null && this.fuelQuantity > 0;
    }
}

export default Item;
