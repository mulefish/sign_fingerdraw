import { useState } from 'react';
export const defaultMessage = 'default example message';

export default function useExampleCustomReactHook() {
    const [message, setMessage] = useState(defaultMessage);
    function setMyMessage(message) {
        setMessage(message)
    }
    return {
        message,
        setMessage,
        setMyMessage
    };
}