import { createContext, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom"
import api from "../api/axios-setup"

const AuthContext = createContext({})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null)

    const login = useCallback(async (body) => {
        try{
            const response = await api.post(
                "/auth/login",
                body,
                { withCredentials: true }
            )
            console.log(response.data)
            setAuth(response.data)
        }catch(err){
            console.log(err)
        }
    }, [])

    const register = useCallback(async (body) => {
        try{
            await api.post("/auth/register", body)
            navigate("/auth/login")
        }catch(err){
            console.log(err)
        }
    }, [])

    return <AuthContext.Provider value={{auth, login, register}}>
        {children}
    </AuthContext.Provider>
}