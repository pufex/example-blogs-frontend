import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider"
import { LoaderCircle } from "lucide-react";

export default function LogoutButton () {

    const [loading, setLoading] = useState(false)
    const {logout} = useAuth();

    const handleClick = async () => {
        try{
            setLoading(true)
            await logout();
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    return <button 
        className={`flex items-center gap-2 text-xl text-white font-semibold transform ${!loading && "hover:bg-blue-500 px-2 py-1 rounded-lg active:bg-blue-400 cursor-pointer"}`}
        disabled={loading}
        onClick={handleClick}
    >
        {
            loading
                ? <>
                    Logging out
                    <LoaderCircle className="w-6 h-6 text-white animate-spin" />
                </> 
                : "Log out"
        }
    </button>
}