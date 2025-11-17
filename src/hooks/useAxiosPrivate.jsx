import { useAuth } from "../contexts/AuthProvider"
import { useEffect } from "react"
import { axiosPrivate } from "../api/axios-setup"

export const  useAxiosPrivate = () => {
    const {refresh, auth} = useAuth();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers["authorization"]){
                    config.headers["authorization"] = `Bearer ${auth.accessToken}`
                }

                return config
            },
            err => Promise.reject(err)
        )

        const responseIntercept = axiosPrivate.interceptors.response.use(
            config => config,
            async (err) => {
                const prevRequest = err?.config
                if(err?.response.status === 403 && !prevRequest?.sent){
                    prevRequest.sent = true
                    const newAccessToken = await refresh();
                    prevRequest.headers['authorization'] = `Bearer ${newAccessToken}`
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(err)
            }
        )

        return () => {
            axiosPrivate.interceptors.response.eject(responseIntercept)
            axiosPrivate.interceptors.request.eject(requestIntercept)
        }
    }, [auth, refresh])

    return axiosPrivate;    
} 