import React, { useCallback, useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import X from "./hooks/helpers.js";
// // eslint-disable-next-line no-unused-vars
// const GRAY = "background:#e0e0e0;"
// // eslint-disable-next-line no-unused-vars
// const RED = "background:#ff0000;"
// // eslint-disable-next-line no-unused-vars
// const ORANGE = "background:#FFD580;"
// // eslint-disable-next-line no-unused-vars
// const BLUE = "background:#ADD8E6;"

function dataURLtoBlob(dataURL) {
  console.log(`ONE %c ${dataURL}`, X.RED);
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
  const blob = new Blob([new Uint8Array(array)], {
    type: "image/png",
  });
  console.log(`TWO %c  ${blob}`, X.RED);

  return blob;
  // TODO! Send the blob to the server!
}

const Canvas = ({ width, height, actionChoice }) => {
  // const r = Math.random()
  // return <div>hello {width} and {height} !! {r}</div>
  const canvasRef = useRef(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setXY] = useState(undefined);
  const [eventCounter, setEventCounter] = useState(0);

  const startPaint = useCallback((event) => {
    const xy = getXY(event);
    if (xy) {
      setXY(xy);
      setIsPainting(true);
    }
  }, []);

  const doSave = () => {
    const canvas = canvasRef.current;
    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    setEventCounter(eventCounter + 1);
    console.log(`%c ${eventCounter} save! `, X.ORANGE);
    // eslint-disable-next-line no-unused-vars
    const blob = dataURLtoBlob(image); // Ready to save!
    document.getElementById("imageToSave").src = image;
  };

  const doClear = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setEventCounter(eventCounter + 1);
    console.log(`%c ${eventCounter} clear! `, X.BLUE);
    context.clearRect(0, 0, canvas.width, canvas.height);
    const widget = document.getElementById("imageToSave");
    widget.src = "";
  };

  useEffect(() => {
    if (actionChoice === "save") {
      doSave();
    } else if (actionChoice === "clear") {
      doClear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionChoice]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    canvas.addEventListener("mousedown", startPaint);
    // return () => {
    //     canvas.removeEventListener('mousedown', startPaint);
    // };
    return;
  }, [startPaint]);

  const paint = useCallback(
    (event) => {
      if (isPainting) {
        const newXY = getXY(event);
        if (mousePosition && newXY) {
          drawLine(mousePosition, newXY);
          setXY(newXY);
        }
      }
    },
    [isPainting, mousePosition]
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    canvas.addEventListener("mousemove", paint);
    return () => {
      canvas.removeEventListener("mousemove", paint);
    };
  }, [paint]);

  const exitPaint = useCallback(() => {
    setIsPainting(false);
    setXY(undefined);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    canvas.addEventListener("mouseup", exitPaint);
    canvas.addEventListener("mouseleave", exitPaint);
    return () => {
      canvas.removeEventListener("mouseup", exitPaint);
      canvas.removeEventListener("mouseleave", exitPaint);
    };
  }, [exitPaint]);

  const getXY = (event) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop,
    };
  };

  const drawLine = (origXY, newXY) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (context) {
      context.strokeStyle = "black";
      // context.lineJoin = 'round';
      context.lineWidth = 1;

      context.beginPath();
      context.moveTo(origXY.x, origXY.y);
      context.lineTo(newXY.x, newXY.y);
      context.closePath();

      context.stroke();
    }
  };

  return <canvas ref={canvasRef} height={height} width={width} />;
};

export default Canvas;
