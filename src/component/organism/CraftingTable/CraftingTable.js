import React from 'react';
import '../../../css/Hud.css';
import './CraftingTable.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import CraftingSpace from '../../molecule/CraftingSpace/CraftingSpace';
import CraftResultSlot from '../../molecule/CraftResultSlot/CraftResultSlot';

const CraftingTable = (props) => {

    const {
        handInventorySlots,
        regularInventorySlots,
        craftResultSlot,
        craftingTableInventorySlots,
        onSelectItem,
        setHoveredItem
    } = props;

    return (
        <div className="painel">

            <div className="hudLabel" style={{ marginTop: 0, marginBottom: 2 }}>
                Crafting
            </div>

            <div className="row">
                <div
                    style={{ marginRight: 28 }}
                >
                    <CraftingSpace
                        columns={3}
                        rows={3}
                        inventorySlots={craftingTableInventorySlots}
                        onSelectItem={onSelectItem}
                        setHoveredItem={setHoveredItem}
                    />
                </div>

                <CraftResultSlot
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

export default CraftingTable;