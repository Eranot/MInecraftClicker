import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import HitButton from './component/atom/HitButton/HitButton';
import ItemSlot from './component/atom/ItemSlot/ItemSlot';
import CraftingTable from './component/organism/CraftingTable/CraftingTable';
import InventoryService from './service/InventoryService';
import CraftingService from './service/CraftingService';
import LavaSlot from './component/molecule/LavaSlot/LavaSlot';
import ItemTooltip from '../src/component/molecule/ItemTooltip/ItemTooltip';
import AutoClickService from './service/AutoClickService';
import HudTab from './component/atom/HudTab/HudTab';

function App() {

  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const inventoryService = InventoryService.getInstance();
  const handInventorySlots = inventoryService.getHandInventorySlots();
  const regularInventorySlots = inventoryService.getRegularInventorySlots();
  const craftResultSlot = inventoryService.getCraftResultSlot();
  const craftingTableInventorySlots = inventoryService.getCraftingTableInventorySlots();
  const mouseSlot = inventoryService.getMouseSlot();
  const handSlot = inventoryService.getHandSlot();
  const lavaSlot = inventoryService.getLavaSlot();

  useEffect(() => {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }, []);

  const tryToCreateItem = async () => {
    const craftingService = new CraftingService();
    const [item, quantity] = craftingService.craftItem(inventoryService.getCraftingTableInventorySlots(), 3, 3);
    await onCreateItem(item, quantity);
  }

  const onSelectItem = async (inventorySlot, event) => {
    setHoveredItem(null);

    const craftingService = new CraftingService();

    // If it is a ghost item, make it real
    if (inventorySlot.ghost) {
      inventorySlot.ghost = false;
      craftingService.removeItemsFromCraftingSpace(craftingTableInventorySlots, 3, 3, inventorySlot);
    }

    // If it is the left mouse button
    if (event.button === 0) {
      inventoryService.moveItem(mouseSlot, inventorySlot);
    } else if (event.button === 2) { // Right mouse button
      if (mouseSlot.quantity > 0) {
        inventoryService.sendItemTo(mouseSlot, inventorySlot, 1);
      } else {
        inventoryService.sendItemTo(inventorySlot, mouseSlot, Math.floor(inventorySlot.quantity / 2));
      }
    }

    // Auto click if needed
    if (inventorySlot.isAutoClick) {
      AutoClickService.getInstance().startAutoClick(inventorySlot, (value) => {
        inventorySlot.hitLoading = value;
        forceUpdate();
      }, async () => {
        await forceUpdate();
      });
    }

    await forceUpdate();

    // Test crafting after all drops
    await tryToCreateItem();
  }

  const onCreateItem = async (item, quantity) => {
    let resultSlot = inventoryService.getCraftResultSlot();

    if (resultSlot && (!resultSlot.item || resultSlot.ghost)) {
      resultSlot.item = item;
      resultSlot.quantity = quantity;
      resultSlot.ghost = item ? true : false;

      await forceUpdate();
    }
  }

  const _setHoveredItem = (item) => {
    if (mouseSlot.item) {
      setHoveredItem(null);
    } else {
      setHoveredItem(item);
    }
  }

  const trocarAba = (num) => {
    setSelectedTab(num);
  }

  return (
    <div className="App">
      <div className="row">
        <div className="column">

          <div className="row tabs">
            <HudTab icon="block/crafting_table_front" selected={selectedTab === 0} onClick={() => trocarAba(0)} />
            <HudTab icon="block/furnace_front" selected={selectedTab === 1} onClick={() => trocarAba(1)} />
          </div>

          {true && (
            <CraftingTable
              forceUpdate={forceUpdate}
              handInventorySlots={handInventorySlots}
              regularInventorySlots={regularInventorySlots}
              craftResultSlot={craftResultSlot}
              craftingTableInventorySlots={craftingTableInventorySlots}
              mouseSlot={mouseSlot}
              tryToCreateItem={tryToCreateItem}
              onSelectItem={onSelectItem}
              onCreateItem={onCreateItem}
              setHoveredItem={_setHoveredItem}
            />
          )}

          <div className="hand-hit-button-container">
            <ItemSlot
              inventorySlot={handSlot}
              onSelectItem={onSelectItem}
              setHoveredItem={_setHoveredItem}
            />

            <HitButton
              forceUpdate={forceUpdate}
            />
          </div>
        </div>

        <div style={{ marginLeft: 20 }}>
          <LavaSlot
            inventorySlot={lavaSlot}
            onSelectItem={onSelectItem}
            setHoveredItem={_setHoveredItem}
          ></LavaSlot>
        </div>
      </div>

      <ItemTooltip
        hoveredItem={hoveredItem}
      />
    </div>
  );
}

export default App;
