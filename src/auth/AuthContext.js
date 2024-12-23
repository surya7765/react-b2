import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAtuhenticated, setIsAuthenticated] = useState(false);

    const login = (username, password) => {
        if(username && password) {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    }

    const logout = () => {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAtuhenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;