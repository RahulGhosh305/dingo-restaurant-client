import { createContext } from "react";
import useCustomAuthFunction from "./useCustomAuthFunction";

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const authValue = useCustomAuthFunction()

    return <AuthContext.Provider value={authValue}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider