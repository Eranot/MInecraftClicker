import React from 'react';
import '../../../css/Hud.css';
import './FurnaceResultSlot.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';

const FurnaceResultSlot = (props) => {

    const { inventorySlot, onSelectItem, setHoveredItem } = props;

    return (
        <ItemSlot
            inventorySlot={inventorySlot}
            onSelectItem={onSelectItem}
            setHoveredItem={setHoveredItem}
            width={75}
            height={75}
        />
    )
}

export default FurnaceResultSlot;