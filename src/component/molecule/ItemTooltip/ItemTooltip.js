import React, { useState, useEffect } from 'react';
import './ItemTooltip.css';

const ItemTooltip = (props) => {

    const { hoveredItem } = props;

    // Mouse
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const onMoveMouse = (evt) => {
        const { clientX, clientY } = evt;
        setMouseX(clientX + 30);
        setMouseY(clientY - 45);
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMoveMouse);
    }, []);

    return (
        <>
            {hoveredItem && (
                <div className="item-tooltip-container" style={{ position: 'absolute', left: mouseX, top: mouseY }}>
                    <span className="item-tooltip-text">{hoveredItem.name}</span>
                </div>
            )}
        </>
    )
}

export default ItemTooltip;