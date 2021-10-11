import React from 'react'
// import { useState } from 'react';
import Canvas from './MyCanvas2.js'
import saveOrClearHook from './hooks/SaveOrClearHook.js';

const width = window.innerWidth;
const height = window.innerHeight * 0.3;
const border = {
  border: '1px solid #e0e0e0',
}
const note = {
  position: 'relative',
  top: '10px',
  left: '40px',
  color: '#606060',
}
const dot = {
  height: '6px',
  width: '6px',
  backgroundColor: '#FFD580',
  borderRadius: '100%',
  display: 'inline-block',
  marginLeft: '6px',
}

function App() {

  const [choice, hideOrShowCss, handleChoiceFunction] = saveOrClearHook();

  return (
    <div>
      <div style={border}>
        <Canvas width={width} height={height} actionChoice={choice} />
      </div>
      <button onClick={() => handleChoiceFunction("clear")}>clear</button>
      <button onClick={() => handleChoiceFunction("save")}>save</button>
      <hr />
      <div style={hideOrShowCss}>
        <img alt='signature' style={border} src="" id='imageToSave' width='100'></img>
      </div>

    </div >)
}
export default App