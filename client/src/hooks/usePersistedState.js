import { useState } from "react"
import { getUserData, setUserData } from "../utils/localStorage"

export const usePersistedState = (defaultValue) => {

    const [state, setState] = useState(() => {
        const persistedState = getUserData();

        if (persistedState) {
            return persistedState;
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        let serializedValue;

        setState(value);

        if (typeof value === 'function') {
            serializedValue = value(state);
        } else {
            serializedValue = value;
        }

        setUserData(serializedValue);

    };

    return [
        state,
        setPersistedState
    ]
};