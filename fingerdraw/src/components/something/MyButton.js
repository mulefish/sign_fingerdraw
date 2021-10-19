import React from "react";
import { useSelector, useDispatch } from "react-redux";
import thunks from "./../signature/redux/thunks.js";
function MyButton() {
  const dispatch = useDispatch();
  const testInfo = useSelector((state) => state.signatureReducer.testInfo);

  function reduxTest(msg) {
    dispatch(thunks.getTest("This uses redux! It does nothing really. It provides grist for a test."));
  }

  return (
    <button onClick={() => reduxTest("hello")}>MyButton = {testInfo}</button>
  );
}
export default MyButton;
