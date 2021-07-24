import React from 'react';
import '../../../css/Hud.css';
import './CraftResultSlot.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';

const CraftResultSlot = (props) => {

    const { inventorySlot, onSelectItem } = props;

    return (
        <ItemSlot
            inventorySlot={inventorySlot}
            onSelectItem={onSelectItem}
        />
    )
}

export default CraftResultSlot;