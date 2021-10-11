// import { useState } from 'react';
// export default function SaveOrClearHook() {
//     const [choice, setChoice] = useState(undefined);
//     function handleChoice(c) {
//         if (c === "save") {
//             setChoice("save")
//         } else {
//             setChoice("clear")
//         }
//     }
//     return [choice, handleChoice];
// }
// 
import { useState } from 'react';
// export const defaultMessage = 'default example message';
export default function SaveOrClearHook() {
    const [choice, setChoice] = useState(undefined);
    function handleChoice(whence) {
        // setMessage(choice)
        if (whence === "save") {
            setChoice("save")
        } else {
            setChoice("clear")
        }
    }
    return {
        choice,
        handleChoice
    };
}