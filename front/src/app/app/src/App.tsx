import React from 'react';
import './App.css';
import SimpleGraph from './components/SimpleGraph'
import LoadGraphWithHook from './components/LoadGraphWithHook'
import MultiGraph from './components/MultiGraph'
import GraphEventsLog from './components/GraphEventsLog'
import DragNdrop from './components/DragNdrop'

function App() {
  return (
    <div className="App" style={{width: "90%"}}>
      <SimpleGraph />
      <LoadGraphWithHook />
      <MultiGraph />
      <GraphEventsLog />
      <DragNdrop />
    </div>
  );
}

export default App;
