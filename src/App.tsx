import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Collapsible from './components/Collapsible';
import WindowSizeDisplay from './components/WindowSizeDisplay';
import DeviceType from './components/DeviceType';


function App() {

  return (
    <div className="App">
      <WindowSizeDisplay></WindowSizeDisplay>
      <DeviceType></DeviceType>
      <Collapsible title="React">
        The library for web and native user interfaces
      </Collapsible>
      <Collapsible title="States and Props">
        The summary of States and Props
      </Collapsible>
      <Collapsible title="React Patters">
        The summary of React Patterns
      </Collapsible>
    </div>
  );
}

export default App;
