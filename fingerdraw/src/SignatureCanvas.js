import React, { useCallback, useEffect, useRef, useState } from "react";

import useDataUrlToBlob from "./hooks/useDataUrlToBlob.js";
import X from "./hooks/helpers.js";

function saveThisBlobToBackendAsImage(blob) {
    // AXIOS or FETCH call to save blob here! 
    // The backend would recieve this as a byte array of type image/png. 
    // It would need to size it & save it & whatnot... 
    console.log(`%cPretend AXOIS call here with ${blob.size} bytes of type ${blob.type}`, X.GREEN)
}

const SignatureCanvas = ({ width, height, actionChoice }) => {
    const canvasRef = useRef(null);
    const [isPainting, setIsPainting] = useState(false);
    const [mousePosition, setXY] = useState(undefined);
    const [eventCounter, setEventCounter] = useState(0);

    const imageHook = useDataUrlToBlob(); // FINCH 

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

        imageHook.convertToBlobFunction(image);


        setEventCounter(eventCounter + 1);
        document.getElementById("imageToSave").src = image;
        console.log(`%c ${eventCounter} SAVE`, X.ORANGE)
    };

    const doClear = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        setEventCounter(eventCounter + 1);
        context.clearRect(0, 0, canvas.width, canvas.height);
        const widget = document.getElementById("imageToSave");
        widget.src = "";
        console.log(`%c ${eventCounter} CLEAR`, X.ORANGE)

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
        if (imageHook.blob !== undefined) {
            saveThisBlobToBackendAsImage(imageHook.blob)
        }
    }, [imageHook.blob])

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
            context.lineWidth = 6;

            context.beginPath();
            context.moveTo(origXY.x, origXY.y);
            context.lineTo(newXY.x, newXY.y);
            context.closePath();

            context.stroke();
        }
    };

    return <canvas ref={canvasRef} height={height} width={width} />;
};

export default SignatureCanvas;
