import React, { useState } from 'react';
import './LoadingBar.css';

const LoadingBar = (props) => {

    const { percentage, width } = props;

    const percentageWidth = width * (percentage / 100.0);

    return (
        <div className="background-bar" style={{ width: width }}>
            <div className="percentage-bar" style={{ width: percentageWidth }}></div>
        </div>
    );
}

export default LoadingBar;