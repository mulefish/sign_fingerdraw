import React from 'react'
import { useState } from 'react';
import Canvas from './MyCanvas2.js'

const width = window.innerWidth;
const height = window.innerHeight * 0.3;
const wrapper = {
  border: '1px solid #e0e0e0',
};

function App() {
  const [saveTrigger, setSaveTrigger] = useState(0);
  const [clearTrigger, setClearTrigger] = useState(0);

  return (
    <div>
      <div style={wrapper}>
        <Canvas width={width} height={height} saveTrigger={saveTrigger} clearTrigger={clearTrigger} />
      </div>
      <button onClick={() => setClearTrigger(clearTrigger + 1)}>clear</button>
      <button onClick={() => setSaveTrigger(saveTrigger + 1)}>save</button>
      <hr />
      <img src="" id='imageToSave' width='100'></img>
    </div>)
}
export default App