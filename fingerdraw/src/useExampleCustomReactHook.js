import { useState } from 'react';
export const defaultMessage = 'default example message';

export default function useExampleCustomReactHook() {
    const [message, setMessage] = useState(defaultMessage);
    return {
        message,
        setMessage,
    };
}