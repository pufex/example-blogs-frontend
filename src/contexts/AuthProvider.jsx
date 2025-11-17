import { createContext, useState, useContext, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import api from "../api/axios-setup"
import { LoaderCircle } from "lucide-react";

const AuthContext = createContext({})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null)
    const [loading, setLoading] = useState(true)

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

    const refresh = useCallback(async () => {
        try{
            const response = await api.get("/auth/refresh-token", {
                withCredentials: true
            })
            setAuth(response.data)
            console.log(response.data)
            return response.data.accessToken
        }catch(err){
            console.log(err)
            return null
        }
    })

    const logout = useCallback(async () => {
        try{
            await api.get("/auth/logout", { withCredentials: true})
            setAuth(null)
        }catch(err){
            console.log(err)
        }
    }, [])

    useEffect(() => {
        const initialLoad = async () => {
            try{
                await refresh();
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        }

        initialLoad();
    }, [])
    
    return <AuthContext.Provider value={{auth, login, register, refresh, logout}}>
        {
            loading
                ? <div className="w-full min-h-screen fixed z-50 bg-slate-200 flex items-center justify-center">
                    <LoaderCircle className="w-10 h-10 text-blue-600 animate-spin"/>
                </div>
                : children
        }
    </AuthContext.Provider>
}