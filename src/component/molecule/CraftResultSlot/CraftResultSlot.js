import React from 'react';
import '../../../css/Hud.css';
import './CraftResultSlot.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';

const CraftResultSlot = (props) => {

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

export default CraftResultSlot;