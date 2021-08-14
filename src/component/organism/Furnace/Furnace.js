import React from 'react';
import '../../../css/Hud.css';
import './Furnace.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import FurnaceResultSlot from '../../molecule/FurnaceResultSlot/FurnaceResultSlot';

const Furnace = (props) => {

    const {
        handInventorySlots,
        regularInventorySlots,
        craftResultSlot,
        furnaceFuelSlot,
        furnaceBurnSlot,
        onSelectItem,
        setHoveredItem
    } = props;

    return (
        <div className="painel">

            <div className="hudLabel" style={{ marginTop: 0, marginBottom: 2 }}>
                Furnace
            </div>

            <div className="row">
                <div
                    style={{ marginRight: 28 }}
                >
                    <div className="column">
                        <ItemSlot
                            inventorySlot={furnaceBurnSlot}
                            onSelectItem={onSelectItem}
                            setHoveredItem={setHoveredItem}
                        />

                        <div className="fire-icon-container">
                            <img src="effect/furnace-fire-empty.png"></img>
                        </div>

                        <ItemSlot
                            inventorySlot={furnaceFuelSlot}
                            onSelectItem={onSelectItem}
                            setHoveredItem={setHoveredItem}
                        />
                    </div>
                </div>

                <FurnaceResultSlot
                    inventorySlot={craftResultSlot}
                    onSelectItem={onSelectItem}
                    setHoveredItem={setHoveredItem}
                />

            </div>

            <div className="hudLabel" style={{ marginTop: 6, marginBottom: 2 }}>
                Inventory
            </div>

            <div className="grid-container">
                {regularInventorySlots.map((inventorySlot, index) =>
                    <ItemSlot
                        key={index}
                        inventorySlot={inventorySlot}
                        onSelectItem={onSelectItem}
                        setHoveredItem={setHoveredItem}
                    ></ItemSlot>)
                }
            </div>

            <div className="grid-container" style={{ marginTop: 18 }}>
                {handInventorySlots.map((inventorySlot, index) =>
                    <ItemSlot
                        key={index}
                        inventorySlot={inventorySlot}
                        onSelectItem={onSelectItem}
                        setHoveredItem={setHoveredItem}
                    ></ItemSlot>)
                }
            </div>
        </div >
    )
}

export default Furnace;