import React from 'react';
import './LoadingBar.css';

const LoadingBar = (props) => {

    const { percentage, width, height, color } = props;

    const percentageWidth = width * (percentage / 100.0);

    return (
        <div className="background-bar" style={{ width: width, height: height }}>
            <div className="percentage-bar" style={{ width: percentageWidth, height: height, backgroundColor: color }}></div>
        </div>
    );
}

export default LoadingBar;