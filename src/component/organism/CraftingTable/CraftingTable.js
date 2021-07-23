import React, { useEffect, useState, useReducer } from 'react';
import '../../../css/Hud.css';
import './CraftingTable.css';
import InventoryService from '../../../service/InventoryService';
import CraftingService from '../../../service/CraftingService';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import CraftingSpace from '../../molecule/CraftingSpace/CraftingSpace';
import CraftResultSlot from '../../molecule/CraftResultSlot/CraftResultSlot';

const CraftingTable = () => {

    const inventoryService = InventoryService.getInstance();

    const inventorySlots = inventoryService.getRegularInventorySlots();
    const craftResultSlot = inventoryService.getCraftResultSlot();
    const craftingTableInventorySlots = inventoryService.getCraftingTableInventorySlots();

    const [selectedInventorySlot, setSelectedInventorySlot] = useState(null);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const onDrag = (inventorySlot) => {
        setSelectedInventorySlot(inventorySlot);
    }

    const onDragFromResultSlot = (inventorySlot) => {
        onDrag(inventorySlot);

        // If the item was dragged, it isn't a ghost anymore
        inventorySlot.ghost = false;

        // Remover os itens do space
        let craftingService = new CraftingService();
        craftingService.removeItemsFromCraftingSpace(craftingTableInventorySlots, 3, 3, inventorySlot);
    }

    const onDrop = async (inventorySlot) => {
        if (!selectedInventorySlot || selectedInventorySlot == inventorySlot) {
            return;
        }

        const craftingService = new CraftingService();

        // If it is a ghost item, make it real
        if (inventorySlot.ghost) {
            inventorySlot.ghost = false;
            craftingService.removeItemsFromCraftingSpace(craftingTableInventorySlots, 3, 3, inventorySlot);
        }

        await setSelectedInventorySlot(false);
        inventoryService.moveItem(selectedInventorySlot, inventorySlot);
        await forceUpdate();

        // Test crafting after all drops
        await tryToCreateItem();
    }


    const tryToCreateItem = async () => {
        const craftingService = new CraftingService();
        const [item, quantity] = craftingService.craftItem(inventoryService.getCraftingTableInventorySlots(), 3, 3);
        await onCreateItem(item, quantity);
    }

    const getSlots = () => {
        return inventorySlots.map((inventorySlot) =>
            <ItemSlot
                inventorySlot={inventorySlot}
                onDrag={onDrag}
                onDrop={onDrop}
            ></ItemSlot>)
    }

    const onCreateItem = async (item, quantity) => {
        let resultSlot = inventoryService.getCraftResultSlot();

        if (resultSlot && (!resultSlot.item || resultSlot.ghost)) {
            resultSlot.item = item;
            resultSlot.quantity = quantity;
            resultSlot.ghost = item ? true : false;

            await forceUpdate();
        }
    }

    return (
        <div className="painel">
            <div className="row">
                <CraftingSpace
                    columns={3}
                    rows={3}
                    inventorySlots={craftingTableInventorySlots}
                    selectedInventorySlot={selectedInventorySlot}
                    onDrag={onDrag}
                    onDrop={onDrop}
                    onCreateItem={onCreateItem}
                />

                <CraftResultSlot
                    inventorySlot={craftResultSlot}
                    onDrag={onDragFromResultSlot}
                    onDrop={onDrop}
                />

            </div>
            <div className="grid-container">
                {getSlots()}
            </div>
        </div>
    )
}

export default CraftingTable;