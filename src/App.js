import React, { useEffect } from 'react';
import './App.css';
import CraftingTable from './component/organism/CraftingTable/CraftingTable';

function App() {

  useEffect(() => {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }, []);

  return (
    <div className="App">
      <CraftingTable />
    </div>
  );
}

export default App;
