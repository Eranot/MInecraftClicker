import React from 'react';
import '../../../css/Hud.css';
import './CraftResultSlot.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';

const CraftResultSlot = (props) => {

    const { inventorySlot, onDrag, onDrop } = props;

    const _onDrag = (inventorySlot) => {
        onDrag(inventorySlot);
    }

    const _onDrop = (inventorySlot) => {
        onDrop(inventorySlot);
    }

    return (
        <ItemSlot
            inventorySlot={inventorySlot}
            onDrag={_onDrag}
            onDrop={_onDrop}
        />
    )
}

export default CraftResultSlot;