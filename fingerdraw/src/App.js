import React from "react";
import SignatureCanvas from "./components/signature/SignatureCanvas.js";
import useSaveOrClearHook from "./components/signature/hooks/useSaveOrClearHook.js";
// import MyButton from "./components/something/MyButton.js";
import { useSelector, useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { X, height, width, border, dot, note, href } from "./helpers.js";
function App() {
  const choiceHook = useSaveOrClearHook();
  const testInfo = "This string is grist for a test.";
  return (
    <div>
      <div style={border}>
        <SignatureCanvas
          width={width}
          height={height}
          actionChoice={choiceHook.choice}
        />
      </div>
      <button onClick={() => choiceHook.handleChoiceFunction("clear")}>
        clear
      </button>
      <button onClick={() => choiceHook.handleChoiceFunction("save")}>
        save
      </button>

      <hr />
      <div style={choiceHook.hideOrShowCss}>
        <img
          alt="signature"
          style={border}
          src=""
          id="imageToSave"
          width="200"
        ></img>
      </div>
      <div style={note}>
        TODOs!<br></br>
        <div style={dot}></div> make touch aware!<br></br>
        <div style={dot}></div> insert into PDF!<br></br>
        <div style={dot}></div> maybe convert to react native...<br></br>
        <div style={dot}></div>{" "}
        <a style={href} href="/add_to_pdf.html">
          /add_to_pdf.html 2
        </a>
        <br></br>
        <br />
        {/* // This button is just here to validate that Redux is set up correctly.  */}
        {/* <button onClick={() => reduxTest("hello")}>
          reduxTest and thunk test! testInfo = {testInfo}
        </button> */}
        {/* <MyButton /> */}
      </div>
    </div>
  );
}
export default App;
