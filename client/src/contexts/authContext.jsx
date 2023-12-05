import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { usePersistedState } from "../hooks/usePersistedState";
import * as authService from "../services/authService";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        navigate('/');
    };

    const values = {
        loginSubmitHandler,
        userId: auth._id,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.accessToken
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};