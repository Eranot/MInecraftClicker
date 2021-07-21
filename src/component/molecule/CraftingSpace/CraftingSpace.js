import React, { useEffect, useState } from 'react';
import '../../../css/Hud.css';
import './CraftingSpace.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import CraftingService from '../../../service/CraftingService';

const CraftingSpace = (props) => {

    const { inventorySlots, onCreateItem, onDrag, onDrop, columns, rows, } = props;

    const _onDropInventory = (inventorySlot) => {
        let newInventorySlots = onDrop(inventorySlot);
        const craftingService = new CraftingService();
        const [item, quantity] = craftingService.craftItem(newInventorySlots, columns, rows);

        onCreateItem(item, quantity);
    }

    useEffect(() => {
        const craftingService = new CraftingService();
        const [item, quantity] = craftingService.craftItem(inventorySlots, columns, rows);
        onCreateItem(item, quantity);
    }, [inventorySlots])

    const getSlots = () => {
        return [...Array(columns * rows).keys()].map((index) =>
            <ItemSlot
                inventorySlot={inventorySlots[index]}
                index={index}
                onDrag={onDrag}
                onDrop={_onDropInventory}
            ></ItemSlot>)
    }

    return (
        <div className={"c-" + columns + "-" + rows}>
            {getSlots()}
        </div>
    )
}

export default CraftingSpace;