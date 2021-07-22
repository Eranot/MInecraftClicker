import React, { useEffect, useState } from 'react';
import '../../../css/Hud.css';
import './CraftingSpace.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import CraftingService from '../../../service/CraftingService';

const CraftingSpace = (props) => {
    const { inventorySlots, onCreateItem, onDrag, onDrop, columns, rows, } = props;

    const getSlots = () => {
        return [...Array(columns * rows).keys()].map((index) =>
            <ItemSlot
                inventorySlot={inventorySlots[index]}
                index={index}
                onDrag={onDrag}
                onDrop={onDrop}
            ></ItemSlot>)
    }

    return (
        <div className={"c-" + columns + "-" + rows}>
            {getSlots()}
        </div>
    )
}

export default CraftingSpace;