import React, { useEffect, useState } from 'react';
import './ItemSlot.css';

const ItemSlot = (props) => {

    const { inventorySlot, onDrag, onDrop } = props;

    const _onDrag = (event) => {
        onDrag(inventorySlot);
    }

    const _onDrop = async (event) => {
        event.preventDefault();
        await onDrop(inventorySlot);
    }

    const _onDragOver = (event) => {
        event.preventDefault();
    }

    return (
        <div
            className="item-slot"
            onDrop={_onDrop}
            onDragOver={_onDragOver}
        >
            {inventorySlot?.item && (
                <>
                    <img
                        className="item-image"
                        src={"item/" + inventorySlot.item.icon + ".png"}
                        draggable="true"
                        onDragStart={_onDrag}
                    />

                    <div className="quantity">{inventorySlot.quantity}</div>
                </>
            )}
        </div>
    )
}

export default ItemSlot;