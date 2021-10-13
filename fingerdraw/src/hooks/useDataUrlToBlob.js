import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import X from ".//helpers.js";

const useDataUrlToBlob = () => {
  const [blob, setBlob] = useState(undefined);
  function convertToBlobFunction(dataUrl) {
    // console.log(`%c ${dataUrl}`, X.BLUE)
    let binary = atob(dataUrl.split(",")[1]);
    let array = [];
    let i = 0;
    const len = binary.length;
    while (i < len) {
      array.push(binary.charCodeAt(i));
      i++;
    }
    const _blob = new Blob([new Uint8Array(array)], { type: "image/png" })
    setBlob(_blob)
  }
  return {
    blob,
    convertToBlobFunction,
  };
};
export default useDataUrlToBlob;
