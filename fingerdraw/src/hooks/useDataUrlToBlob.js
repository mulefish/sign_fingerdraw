import { useState } from "react";
const useDataUrlToBlob = () => {
  const [blob, setBlob] = useState(undefined);
  function convertToBlobFunction(dataUrl) {
    // Make it easy to save as a file
    let array, binary, i, len;
    // Note to self: "The atob() method decodes a base-64 encoded string"
    binary = atob(dataURL.split(",")[1]);
    array = [];
    i = 0;
    len = binary.length;
    while (i < len) {
      array.push(binary.charCodeAt(i));
      i++;
    }
    setBlob(
      new Blob([new Uint8Array(array)], {
        type: "image/png",
      })
    );
    return {
      blob,
      convertToBlobFunction,
    };
  }
};
export default useDataUrlToBlob;
