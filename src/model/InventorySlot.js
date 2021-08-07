class InventorySlot {

    constructor(id, item, quantity = 0, isCraftResult = false, isAutoClick = false) {
        this.id = id;
        this.item = item;
        this.quantity = quantity;

        /* If it is a solid item or is 
           only a crafting result not yet created */
        this.ghost = false;

        this.isCraftResult = isCraftResult;
        this.isAutoClick = isAutoClick;
        this.hitLoading = null;
    }
}

export default InventorySlot;
