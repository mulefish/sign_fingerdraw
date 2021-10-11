import React from 'react'
import { useState } from 'react';
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

  const [choice, handleChoice] = saveOrClearHook();


  const [saveTrigger, setSaveTrigger] = useState(0);
  const [clearTrigger, setClearTrigger] = useState(0);
  const [showImage, setShowImage] = useState({ display: 'none' });
  // useEffect(() => {
  //   if (saveTrigger > clearTrigger) {
  //     setShowImage({ display: 'block' });
  //   } else {
  //     setShowImage({ display: 'none' });
  //   }
  // }, [saveTrigger, clearTrigger]);

  const saveOrClear = (whence) => {
    if (whence === "clear") {
      setClearTrigger(clearTrigger + 1)
      setSaveTrigger(0)
      setShowImage({ display: 'none' });

      // handleChoice("clear")
      // console.log("HELLO CHOICE " + choice)

      handleChoice("clear")
      console.log("HELLO CHOICE " + choice)

    } else {
      setClearTrigger(0)
      setSaveTrigger(saveTrigger + 1)
      setShowImage({ display: 'block' });

      handleChoice("save")
      console.log("HELLO CHOICE " + choice)


    }
  }

  // handleChoice("save")
  // console.log("HELLO CHOICE " + choice)



  return (
    <div>
      <div style={border}>
        <Canvas width={width} height={height} saveTrigger={saveTrigger} clearTrigger={clearTrigger} />
      </div>
      <button onClick={() => saveOrClear("clear")}>clear</button>
      <button onClick={() => saveOrClear("save")}>save</button>
      <hr />
      <div style={showImage}>
        <img alt='signature' style={border} src="" id='imageToSave' width='100'></img>
      </div>


      <div style={note}>
        TODOs: {clearTrigger}
        <br></br>
        <span style={dot}></span> Save to server
        <br></br>
        <span style={dot}></span> Make this touch aware
        <br></br>
        <span style={dot}></span> Maybe convert to React Native
      </div>
    </div >)
}
export default App