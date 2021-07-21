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
        setCraftResultSlot(inventoryService.getCraftResultSlot());
        setCraftingTableInventorySlots(inventoryService.getCraftingTableInventorySlots());

        setInventorySlots(inventoryService.getRegularInventorySlots());
        setNumberOfSlots(27);
    }, []);

    const onDrag = (inventorySlot) => {
        setSelectedInventorySlot(inventorySlot);
    }

    const onDragFromResultSlot = (inventorySlot) => {
        // Remover os itens do space
        let s = new CraftingService();
        s.removeItemsFromCraftingSpace(craftingTableInventorySlots, 3, 3, inventorySlot.item);

        onDrag(inventorySlot);
    }

    const onDrop = (inventorySlot) => {
        if (!selectedInventorySlot) {
            return;
        }

        inventoryService.moveItem(selectedInventorySlot, inventorySlot);
        setSelectedInventorySlot(null);

        updateAllSlots();

        const lista = inventoryService.getCraftingTableInventorySlots();
        setCraftingTableInventorySlots(lista)

        return lista;
    }

    const updateAllSlots = () => {
        setInventorySlots(inventoryService.getRegularInventorySlots());
        setCraftResultSlot(inventoryService.getCraftResultSlot());
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

    const onCreateItem = (item, quantity) => {
        console.log("onCreateItem")
        if (craftResultSlot) {
            craftResultSlot.item = item;
            craftResultSlot.quantity = quantity;
            const newInventorySlot = new InventorySlot(item, quantity)
            setCraftResultSlot(newInventorySlot);
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