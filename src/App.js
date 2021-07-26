import React, { useEffect, useReducer } from 'react';
import './App.css';
import HitButton from './component/atom/HitButton/HitButton';
import CraftingTable from './component/organism/CraftingTable/CraftingTable';

function App() {

  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }, []);

  return (
    <div className="App">
      <CraftingTable
        forceUpdate={forceUpdate}
      />
      <HitButton
        forceUpdate={forceUpdate}
      />
    </div>
  );
}

export default App;
