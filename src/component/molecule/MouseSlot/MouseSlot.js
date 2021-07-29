import React, { useState, useEffect } from 'react';
import './MouseSlot.css';

const MouseSlot = (props) => {

    const { inventorySlot } = props;

    // Mouse
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const onMoveMouse = (evt) => {
        const { clientX, clientY } = evt;
        setMouseX(clientX);
        setMouseY(clientY);
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMoveMouse);
    }, []);

    return (
        <div className="item-slot-mouse" style={{ position: 'absolute', left: mouseX, top: mouseY }}>
            {inventorySlot?.item && (
                <>
                    <img
                        className="item-image-mouse"
                        src={"item/" + inventorySlot.item.icon + ".png"}
                        draggable="true"
                        alt="Mouse item"
                    />

                    <div className="quantity" style={{ display: inventorySlot.quantity === 1 ? 'none' : 'block' }}>{inventorySlot.quantity}</div>
                </>
            )}
        </div>
    )
}

export default MouseSlot;