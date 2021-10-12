import { useState } from "react";
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
    console.log(`AAAA %c ${_blob}`, X.BLUE)
    setBlob(_blob)
  }
  console.log(`BBBB %c ${blob}`, X.ORANGE)
  return {
    blob,
    convertToBlobFunction,
  };

};
export default useDataUrlToBlob;
