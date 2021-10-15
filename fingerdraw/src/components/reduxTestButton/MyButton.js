import React from "react";
import { useSelector, useDispatch } from "react-redux";
import thunks from "./../signature/redux/thunks.js";
function MyButton() {
  const dispatch = useDispatch();
  const testInfo = useSelector((state) => state.signatureReducer.testInfo);

  function reduxTest(msg) {
    dispatch(thunks.getTest("hello my dear"));
  }

  return (
    <button onClick={() => reduxTest("hello")}>MyButton = {testInfo}</button>
  );
}
export default MyButton;
