import { useAuth } from "../contexts/AuthProvider";

export default function LoggedOutOnly ({children}) {
    const {auth} = useAuth();
    
    return !auth
        ? children
        : null
}