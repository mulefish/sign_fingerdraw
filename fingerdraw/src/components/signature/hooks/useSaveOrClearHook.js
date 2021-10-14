import { useState } from "react";

export default function useSaveOrClearHook() {
  const [choice, setChoice] = useState("");
  const [hideOrShowCss, setHideOrShowCss] = useState({ display: "none" });
  function handleChoiceFunction(whence) {
    if (whence === "save") {
      setHideOrShowCss({ display: "block" });
      setChoice("save");
    } else {
      setHideOrShowCss({ display: "none" });
      setChoice("clear");
    }
  }
  return {
    choice,
    hideOrShowCss,
    handleChoiceFunction,
  };
}
