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
}

export default Item;
