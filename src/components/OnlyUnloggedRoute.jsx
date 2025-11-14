import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

export default function OnlyUnloggedRoute () {
    const location = useLocation();
    const {auth} = useAuth();
    return !auth 
        ? <Outlet />
        : <Navigate state={{location}} replace={true} to="/" />
}