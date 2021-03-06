import React from 'react';
import '../../../css/Hud.css';
import './Furnace.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import FurnaceResultSlot from '../../molecule/FurnaceResultSlot/FurnaceResultSlot';

const Furnace = (props) => {

    const {
        handInventorySlots,
        regularInventorySlots,
        furnaceFuelSlot,
        furnaceBurnSlot,
        furnaceResultSlot,
        onSelectItem,
        setHoveredItem
    } = props;

    return (
        <div className="painel">

            <div className="hudLabel" style={{ marginTop: 0, marginBottom: 2 }}>
                Furnace
            </div>

            <div className="row">
                <div>
                    <div className="column">
                        <ItemSlot
                            inventorySlot={furnaceBurnSlot}
                            onSelectItem={onSelectItem}
                            setHoveredItem={setHoveredItem}
                        />

                        <div className="fire-icon-container">
                            <img src="effect/furnace-fire-empty.png" alt="Burning indicator"></img>

                            <div className="fire-fill-container">
                                <div className="fire-fill" alt="Burning indicator" style={{
                                    height: furnaceFuelSlot.loading
                                        ? (100.0 - furnaceFuelSlot.loading) + "%"
                                        : "0%"
                                }
                                }></div>
                            </div>
                        </div>

                        <ItemSlot
                            inventorySlot={furnaceFuelSlot}
                            onSelectItem={onSelectItem}
                            setHoveredItem={setHoveredItem}
                        />
                    </div>
                </div>

                <div className="arrow-icon-container">
                    <img src="effect/arrow-empty.png" alt="Arrow indicator"></img>

                    <div className="arrow-fill-container">
                        <div className="arrow-fill" alt="Arrow indicator" style={{
                            width: furnaceBurnSlot.loading
                                ? (furnaceBurnSlot.loading) + "%"
                                : "0%"
                        }
                        }></div>
                    </div>
                </div>

                <FurnaceResultSlot
                    inventorySlot={furnaceResultSlot}
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