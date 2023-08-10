import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, createContext, useState, useContext } from "react";

const AuthContext = createContext(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signIn = () => setIsAuthenticated(true);
    const signOut = () => {
        setIsAuthenticated(false);
        AsyncStorage.clear();
    };

    return <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);