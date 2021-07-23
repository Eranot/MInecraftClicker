import React, { useEffect, useState, useReducer } from 'react';
import '../../../css/Hud.css';
import './CraftingTable.css';
import InventoryService from '../../../service/InventoryService';
import CraftingService from '../../../service/CraftingService';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import CraftingSpace from '../../molecule/CraftingSpace/CraftingSpace';
import CraftResultSlot from '../../molecule/CraftResultSlot/CraftResultSlot';
import InventorySlot from '../../../model/InventorySlot';

const CraftingTable = () => {

    const [inventorySlots, setInventorySlots] = useState([]);
    const [numberOfSlots, setNumberOfSlots] = useState([]);
    const [selectedInventorySlot, setSelectedInventorySlot] = useState(null);
    const [craftResultSlot, setCraftResultSlot] = useState(null);
    const [craftingTableInventorySlots, setCraftingTableInventorySlots] = useState([]);

    const inventoryService = InventoryService.getInstance();

    useEffect(() => {
        setNumberOfSlots(27);
        updateAllSlots();
    }, []);

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
        await updateAllSlots();

        // Test crafting after all drops
        await tryToCreateItem();
    }

    const updateAllSlots = async () => {
        await setCraftingTableInventorySlots(inventoryService.getCraftingTableInventorySlots())
        await setInventorySlots(inventoryService.getRegularInventorySlots());
        await setCraftResultSlot(inventoryService.getCraftResultSlot());
    }

    const tryToCreateItem = async () => {
        const craftingService = new CraftingService();
        const [item, quantity] = craftingService.craftItem(inventoryService.getCraftingTableInventorySlots(), 3, 3);
        await onCreateItem(item, quantity);
    }

    const getSlots = () => {
        return [...Array(numberOfSlots).keys()].map((index) =>
            <ItemSlot
                inventorySlot={inventorySlots[index]}
                index={index}
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

            await setCraftResultSlot(inventoryService.getCraftResultSlot());
            await updateAllSlots();
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