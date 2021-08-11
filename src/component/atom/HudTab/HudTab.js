import React, { useState } from 'react';
import './HudTab.css';

const HudTab = (props) => {

    const { onClick, forceUpdate, icon, selected } = props;

    return (
        <div className={"painel-no-bottom tab" + (selected ? "" : " disabled-tab")} onClick={onClick}>
            <img src={icon + ".png"}>
            </img>
        </div>
    );
}

export default HudTab;