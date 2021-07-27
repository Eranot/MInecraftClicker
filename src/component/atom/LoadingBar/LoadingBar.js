import React, { useState } from 'react';
import './LoadingBar.css';

const LoadingBar = (props) => {

    const { percentage, width, height } = props;

    const percentageWidth = width * (percentage / 100.0);

    return (
        <div className="background-bar" style={{ width: width, height: height }}>
            <div className="percentage-bar" style={{ width: percentageWidth, height: height }}></div>
        </div>
    );
}

export default LoadingBar;