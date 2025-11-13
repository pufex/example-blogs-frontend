import { LoaderCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import api from "../api/axios-setup"


export default function DeleteBlogButton({ blog_id, removeBlogById }) {

    const [loading, setLoading] = useState(false)

    const handleButtonClick = async () => {
        try{
            setLoading(true)
            const result = api.delete(`/blogs/${blog_id}`)
            removeBlogById(blog_id)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    return <button
        className={`w-8 h-8 flex items-center justify-center rounded-md ${!loading ? "bg-red-700 border border-red-900  transform hover:bg-red-500 hover:scale-105 active:bg-red-400 active:scale-95 cursor-pointer" : "bg-red-500 border border-red-900"}`}
        disabled={loading}
        onClick={handleButtonClick}
    >
        {
            !loading
                ? <Trash2 className="text-white w-5 h-5" />
                : <LoaderCircle  className="text-white w-5 h-5 animate-spin"/>
        }
    </button>
}