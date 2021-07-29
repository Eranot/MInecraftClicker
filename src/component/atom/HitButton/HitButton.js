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

            <div style={{ height: 5, marginTop: 5, marginBottom: 5, marginLeft: 6, marginRight: 6 }}>
                {loadingPercentage && (
                    <LoadingBar
                        percentage={loadingPercentage}
                        width={168}
                        height={5}
                    />
                )}
            </div>

            <div className="minecraft-button"
                onClick={onClick}
                style={{ width: 150 }}
            >
                Hit
            </div>
        </div>
    );
}

export default HitButton;