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
    const [hideOrShowCss, setHideOrShowCss] = useState({})
    function handleChoiceFunction(whence) {
        // setMessage(choice)
        if (whence === "save") {
            setHideOrShowCss({ 'display': 'block' })
            setChoice("save")
        } else {
            setHideOrShowCss({ 'display': 'none' })
            setChoice("clear")
        }
    }
    const o = {}
    return {
        choice,
        o,
        handleChoiceFunction
    };
}