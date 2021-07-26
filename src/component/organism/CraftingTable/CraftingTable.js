import React, { useReducer } from 'react';
import '../../../css/Hud.css';
import './CraftingTable.css';
import InventoryService from '../../../service/InventoryService';
import CraftingService from '../../../service/CraftingService';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import CraftingSpace from '../../molecule/CraftingSpace/CraftingSpace';
import CraftResultSlot from '../../molecule/CraftResultSlot/CraftResultSlot';
import MouseSlot from '../../molecule/MouseSlot/MouseSlot';
import { useEffect } from 'react/cjs/react.development';

const CraftingTable = (props) => {

    const { forceUpdate } = props;

    const inventoryService = InventoryService.getInstance();

    const regularInventorySlots = inventoryService.getRegularInventorySlots();
    const craftResultSlot = inventoryService.getCraftResultSlot();
    const craftingTableInventorySlots = inventoryService.getCraftingTableInventorySlots();
    const mouseSlot = inventoryService.getMouseSlot();

    const tryToCreateItem = async () => {
        const craftingService = new CraftingService();
        const [item, quantity] = craftingService.craftItem(inventoryService.getCraftingTableInventorySlots(), 3, 3);
        await onCreateItem(item, quantity);
    }

    const onSelectItem = async (inventorySlot, event) => {
        const craftingService = new CraftingService();

        // If it is a ghost item, make it real
        if (inventorySlot.ghost) {
            inventorySlot.ghost = false;
            craftingService.removeItemsFromCraftingSpace(craftingTableInventorySlots, 3, 3, inventorySlot);
        }

        // If it is the left mouse button
        if (event.button === 0) {
            inventoryService.moveItem(mouseSlot, inventorySlot);
        } else if (event.button === 2) { // Right mouse button
            if (mouseSlot.quantity > 0) {
                inventoryService.sendItemTo(mouseSlot, inventorySlot, 1);
            } else {
                inventoryService.sendItemTo(inventorySlot, mouseSlot, Math.floor(inventorySlot.quantity / 2));
            }
        }

        await forceUpdate();

        // Test crafting after all drops
        await tryToCreateItem();
    }

    const getSlots = () => {
        return regularInventorySlots.map((inventorySlot, index) =>
            <ItemSlot
                key={index}
                inventorySlot={inventorySlot}
                onSelectItem={onSelectItem}
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
                    onSelectItem={onSelectItem}
                />

                <CraftResultSlot
                    inventorySlot={craftResultSlot}
                    onSelectItem={onSelectItem}
                />

            </div>
            <div className="grid-container">
                {getSlots()}
            </div>
            <MouseSlot
                inventorySlot={mouseSlot}
            />
        </div>
    )
}

export default CraftingTable;