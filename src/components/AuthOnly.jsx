import { useAuth } from "../contexts/AuthProvider";

export default function AuthOnly ({children}) {
    const {auth} = useAuth();
    
    return auth
        ? children
        : null
}