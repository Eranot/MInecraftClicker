import React from 'react';
import './HudTab.css';

const HudTab = (props) => {

    const { onClick, icon, selected } = props;

    return (
        <div className={"painel-no-bottom tab" + (selected ? "" : " disabled-tab")} onClick={onClick}>
            <img src={icon + ".png"} alt="Tab">
            </img>
        </div>
    );
}

export default HudTab;