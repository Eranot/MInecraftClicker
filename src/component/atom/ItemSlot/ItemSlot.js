import React from 'react';
import LoadingBar from '../LoadingBar/LoadingBar';
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

    const backgroundColor = inventorySlot?.isAutoClick ? '#7d9e73' : null;

    return (
        <div
            className="item-slot"
            onMouseUp={(event) => onSelectItem(inventorySlot, event)}
            onMouseOver={onHoverItem}
            onMouseLeave={onNotHoverItem}
            style={{ width: width, height: height, backgroundColor: backgroundColor }}
        >

            <div>
                {inventorySlot?.isAutoClick && !inventorySlot?.item && (
                    <div className="auto-click-background">
                        <img src="autoclick.png"></img>
                    </div>
                )}

                {inventorySlot?.isAutoClick && inventorySlot?.hitLoading && (
                    <div className="hit-loading-container">
                        <LoadingBar
                            percentage={inventorySlot.hitLoading}
                            width={48}
                            height={5}
                            color={"green"}
                        />
                    </div>
                )}

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