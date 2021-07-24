import React from 'react';
import './ItemSlot.css';

const ItemSlot = (props) => {

    const { inventorySlot, onSelectItem } = props;

    return (
        <div
            className="item-slot"
            onMouseUp={(event) => onSelectItem(inventorySlot, event)}
        >
            {inventorySlot?.item && (
                <>
                    <img
                        className="item-image"
                        src={"item/" + inventorySlot.item.icon + ".png"}
                        draggable="true"
                        onDragStart={(event) => onSelectItem(inventorySlot, event)}
                    />

                    <div className="quantity" style={{ display: inventorySlot.quantity === 1 ? 'none' : 'block' }}>{inventorySlot.quantity}</div>
                </>
            )}
        </div>
    )
}

export default ItemSlot;