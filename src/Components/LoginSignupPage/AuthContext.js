import { createContext } from "react";
import useCustomAuthFunction from "./useCustomAuthFunction";

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const authValues = useCustomAuthFunction()

    return <AuthContext.Provider value={authValues}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider