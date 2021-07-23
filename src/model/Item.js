class Item {

    constructor(id, name, icon, recipe, maxStack) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.recipe = recipe;
        this.maxStack = maxStack ?? 64;
    }
}

export default Item;
