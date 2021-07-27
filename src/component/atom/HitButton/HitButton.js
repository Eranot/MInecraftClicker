import React, { useState } from 'react';
import './HitButton.css';
import HitService from '../../../service/HitService';
import LoadingBar from '../LoadingBar/LoadingBar';

const HitButton = (props) => {

    const { forceUpdate } = props;

    const [loadingPercentage, setLoadingPercentage] = useState(null);

    const hitService = HitService.getInstance();

    const onClick = async () => {
        await hitService.hit(setLoadingPercentage);
        forceUpdate();
    }

    return (
        <div className="hit-button-container">
            <button
                onClick={onClick}
            >
                Hit
            </button>

            {loadingPercentage && (
                <LoadingBar
                    percentage={loadingPercentage}
                    width={100}
                    height={20}
                />
            )}
        </div>
    );
}

export default HitButton;