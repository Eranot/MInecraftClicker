import React from 'react';
import '../../../css/Hud.css';
import './CraftingSpace.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';

const CraftingSpace = (props) => {
    const { inventorySlots, onDrag, onDrop, columns, rows, } = props;

    const getSlots = () => {
        return [...Array(columns * rows).keys()].map((index) =>
            <ItemSlot
                key={index}
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