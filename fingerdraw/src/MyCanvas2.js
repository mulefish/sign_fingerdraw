import React, { useCallback, useEffect, useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
const GRAY = "background:#e0e0e0;"
// eslint-disable-next-line no-unused-vars
const RED = "background:#ff0000;"
// eslint-disable-next-line no-unused-vars
const ORANGE = "background:#FFD580;"
// eslint-disable-next-line no-unused-vars
const BLUE = "background:#ADD8E6;"

function dataURLtoBlob(dataURL) {
    // Make it easy to save as a file
    let array, binary, i, len;
    // Note to self: "The atob() method decodes a base-64 encoded string"
    binary = atob(dataURL.split(',')[1]);
    array = [];
    i = 0;
    len = binary.length;
    while (i < len) {
        array.push(binary.charCodeAt(i));
        i++;
    }
    const blob = new Blob([new Uint8Array(array)], {
        type: 'image/png'
    });
    return blob;
    // TODO! Send the blob to the server!
};


const Canvas = ({ width, height, saveTrigger, clearTrigger }) => {
    // const r = Math.random()
    // return <div>hello {width} and {height} !! {r}</div>
    const canvasRef = useRef(null);
    const [isPainting, setIsPainting] = useState(false);
    const [mousePosition, setMousePosition] = useState(undefined);



    const startPaint = useCallback((event) => {
        const coordinates = getCoordinates(event);
        if (coordinates) {
            setMousePosition(coordinates);
            setIsPainting(true);
        }
    }, []);



    const doSave = () => {
        const canvas = canvasRef.current;
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        console.log(`%c ${saveTrigger} TODO! Save blob to server!`, ORANGE)
        // eslint-disable-next-line no-unused-vars
        const blob = dataURLtoBlob(image); // Ready to save!  
        document.getElementById("imageToSave").src = image;
    }
    const doClear = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        const widget = document.getElementById("imageToSave");
        widget.src = "";
    }
    useEffect(() => {
        if (saveTrigger > 0) {
            doSave()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [saveTrigger]);

    useEffect(() => {
        if (clearTrigger > 0) {
            doClear()
        }
    }, [clearTrigger]);



    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        canvas.addEventListener('mousedown', startPaint);
        return;
        // return () => {
        //     canvas.removeEventListener('mousedown', startPaint);
        // };
    }, [startPaint]);





    const paint = useCallback(
        (event) => {
            if (isPainting) {
                const newMousePosition = getCoordinates(event);
                if (mousePosition && newMousePosition) {
                    drawLine(mousePosition, newMousePosition);
                    setMousePosition(newMousePosition);
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
        canvas.addEventListener('mousemove', paint);
        return () => {
            canvas.removeEventListener('mousemove', paint);
        };
    }, [paint]);

    const exitPaint = useCallback(() => {
        setIsPainting(false);
        setMousePosition(undefined);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        canvas.addEventListener('mouseup', exitPaint);
        canvas.addEventListener('mouseleave', exitPaint);
        return () => {
            canvas.removeEventListener('mouseup', exitPaint);
            canvas.removeEventListener('mouseleave', exitPaint);
        };
    }, [exitPaint]);

    const getCoordinates = (event) => {
        if (!canvasRef.current) {
            return;
        }

        const canvas = canvasRef.current;
        return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
    };

    const drawLine = (originalMousePosition, newMousePosition) => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (context) {
            context.strokeStyle = 'black';
            // context.lineJoin = 'round';
            context.lineWidth = 1;

            context.beginPath();
            context.moveTo(originalMousePosition.x, originalMousePosition.y);
            context.lineTo(newMousePosition.x, newMousePosition.y);
            context.closePath();

            context.stroke();
        }
    };

    return <canvas ref={canvasRef} height={height} width={width} />;


};

export default Canvas;
