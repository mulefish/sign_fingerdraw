import React from "react";
import SignatureCanvas from "./SignatureCanvas.js";
import useSaveOrClearHook from "./hooks/useSaveOrClearHook.js";

const width = window.innerWidth;
const height = window.innerHeight * 0.3;
const border = {
  border: "1px solid #e0e0e0",
};
const note = {
  position: "relative",
  top: "10px",
  left: "40px",
  color: "#606060",
};
const dot = {
  height: "6px",
  width: "6px",
  backgroundColor: "#FFD580",
  borderRadius: "100%",
  display: "inline-block",
  marginLeft: "6px",
};
const href = {
  color: "#FFD580",
};

function App() {
  const choiceHook = useSaveOrClearHook();

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
      </div>
    </div>
  );
}
export default App;
