import React from 'react';
import '../../../css/Hud.css';
import './CraftingTable.css';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import CraftingSpace from '../../molecule/CraftingSpace/CraftingSpace';
import CraftResultSlot from '../../molecule/CraftResultSlot/CraftResultSlot';
import MouseSlot from '../../molecule/MouseSlot/MouseSlot';

const CraftingTable = (props) => {

    const {
        handInventorySlots,
        regularInventorySlots,
        craftResultSlot,
        craftingTableInventorySlots,
        mouseSlot,
        onSelectItem,
    } = props;

    return (
        <div className="painel">
            <div className="row">
                <div
                    style={{ marginRight: 18 }}
                >
                    <CraftingSpace
                        columns={3}
                        rows={3}
                        inventorySlots={craftingTableInventorySlots}
                        onSelectItem={onSelectItem}
                    />
                </div>

                <CraftResultSlot
                    inventorySlot={craftResultSlot}
                    onSelectItem={onSelectItem}
                />

            </div>
            <div className="grid-container" style={{ marginTop: 18 }}>
                {regularInventorySlots.map((inventorySlot, index) =>
                    <ItemSlot
                        key={index}
                        inventorySlot={inventorySlot}
                        onSelectItem={onSelectItem}
                    ></ItemSlot>)
                }
            </div>

            <div className="grid-container" style={{ marginTop: 18 }}>
                {handInventorySlots.map((inventorySlot, index) =>
                    <ItemSlot
                        key={index}
                        inventorySlot={inventorySlot}
                        onSelectItem={onSelectItem}
                    ></ItemSlot>)
                }
            </div>

            <MouseSlot
                inventorySlot={mouseSlot}
            />
        </div >
    )
}

export default CraftingTable;