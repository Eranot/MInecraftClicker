class InventorySlot {

    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;

        /* If it is a solid item or is 
           only a crafting result not yet created */
        this.ghost = false;
    }
}

export default InventorySlot;
