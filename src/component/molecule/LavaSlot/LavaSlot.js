import React, { useState, useEffect } from 'react';
import LavaService from '../../../service/LavaService';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import LoadingBar from '../../atom/LoadingBar/LoadingBar';
import './LavaSlot.css';

const LavaSlot = (props) => {

    const {
        inventorySlot: lavaInventorySlot,
        onSelectItem
    } = props;

    const [loadingPercentage, setLoadingPercentage] = useState(null);

    useEffect(() => {
        if (lavaInventorySlot.item) {
            const lavaService = LavaService.getInstance();
            lavaService.destroyItem(setLoadingPercentage);
        }
    }, [lavaInventorySlot]);

    return (
        <div className="lava-slot">
            <img className="lava"
                src="gif/lava.gif"
                alt="Lava"
            />

            <div style={{ paddingBottom: 15 }}>
                <div style={{ height: 5, marginTop: 5, marginBottom: 5 }}>
                    {loadingPercentage && (
                        <LoadingBar
                            percentage={loadingPercentage}
                            width={54}
                            height={5}
                            color={"white"}
                        />
                    )}
                </div>

                <ItemSlot
                    inventorySlot={lavaInventorySlot}
                    onSelectItem={onSelectItem}
                />
            </div>
        </div>
    )
}

export default LavaSlot;