import { useState } from "react"

export const usePersistedState = (defaultValue) => {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem('auth');

        if (persistedState) {
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        let serializedValue;

        setState(value);

        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem('auth', serializedValue);

    };

    return [
        state,
        setPersistedState
    ]
};