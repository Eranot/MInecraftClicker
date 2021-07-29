import React, { useReducer } from 'react';
import '../../../css/Hud.css';
import './CraftingTable.css';
import InventoryService from '../../../service/InventoryService';
import ItemSlot from '../../atom/ItemSlot/ItemSlot';
import CraftingSpace from '../../molecule/CraftingSpace/CraftingSpace';
import CraftResultSlot from '../../molecule/CraftResultSlot/CraftResultSlot';
import MouseSlot from '../../molecule/MouseSlot/MouseSlot';

const CraftingTable = (props) => {

    const {
        forceUpdate,
        regularInventorySlots,
        craftResultSlot,
        craftingTableInventorySlots,
        mouseSlot,
        tryToCreateItem,
        onSelectItem,
        onCreateItem,
    } = props;

    const inventoryService = InventoryService.getInstance();

    return (
        <div className="painel">
            <div className="row">
                <CraftingSpace
                    columns={3}
                    rows={3}
                    inventorySlots={craftingTableInventorySlots}
                    onSelectItem={onSelectItem}
                />

                <CraftResultSlot
                    inventorySlot={craftResultSlot}
                    onSelectItem={onSelectItem}
                />

            </div>
            <div className="grid-container">
                {regularInventorySlots.map((inventorySlot, index) =>
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
        </div>
    )
}

export default CraftingTable;