import React from 'react';
import './ItemSlot.css';

const ItemSlot = (props) => {

    const { inventorySlot, onSelectItem, setHoveredItem, width, height } = props;

    const onHoverItem = () => {
        if (inventorySlot.item && setHoveredItem) {
            setHoveredItem(inventorySlot.item);
        }
    }

    const onNotHoverItem = () => {
        if (inventorySlot.item && setHoveredItem) {
            setHoveredItem(null);
        }
    }

    return (
        <div
            className="item-slot"
            onMouseUp={(event) => onSelectItem(inventorySlot, event)}
            onMouseOver={onHoverItem}
            onMouseLeave={onNotHoverItem}
            style={{ width: width, height: height }}
        >

            <div>
                {inventorySlot?.item && (
                    <>
                        <img
                            className="item-image"
                            src={inventorySlot.item.icon + ".png"}
                            draggable="true"
                            onDragStart={(event) => onSelectItem(inventorySlot, event)}
                            alt="Item"
                        />

                        <div className="quantity" style={{ display: inventorySlot.quantity === 1 ? 'none' : 'block' }}>{inventorySlot.quantity}</div>
                    </>

                )}
                <div className="hover-container"></div>
            </div>

        </div>
    )
}

export default ItemSlot;