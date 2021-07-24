import React from 'react';
import './ItemSlot.css';

const ItemSlot = (props) => {

    const { inventorySlot, onSelectItem } = props;

    return (
        <div
            className="item-slot"
            onMouseUp={() => onSelectItem(inventorySlot)}
        >
            {inventorySlot?.item && (
                <>
                    <img
                        className="item-image"
                        src={"item/" + inventorySlot.item.icon + ".png"}
                        draggable="true"
                        onDragStart={() => onSelectItem(inventorySlot)}

                    />

                    <div className="quantity" style={{ display: inventorySlot.quantity === 1 ? 'none' : 'block' }}>{inventorySlot.quantity}</div>
                </>
            )}
        </div>
    )
}

export default ItemSlot;