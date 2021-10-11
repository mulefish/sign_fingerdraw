import { useState } from 'react';
export default function SaveOrClearHook() {
    const [choice, setChoice] = useState(undefined);
    function handleChoice(c) {
        if (c === "save") {
            setChoice("save")
        } else {
            setChoice("clear")
        }
    }
    return [choice, handleChoice];
}