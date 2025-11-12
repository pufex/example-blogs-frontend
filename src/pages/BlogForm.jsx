import { useState } from "react"
import Button from "../components/Button"
import { LoaderCircle } from "lucide-react"
import api from "../api/axios-setup"

export function BlogForm(){
    
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            setLoading(true)
            setError("");

            await api.post("/blogs", {title, content});

            setTitle("")
            setContent("")
        }catch(err){
            console.log(err)
            setError("Failed to submit the form.")
        }finally{
            console.log(error)
            setLoading(false)
        }
    }

    return <form className="w-full max-w-3xl mx-auto px-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl text-center w-full py-6">
            New blog form
        </h1>
        {
            error && <p className="w-full text-red-600 text-center py-4 font-semibold text-lg">
                {error}
            </p>
        }
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full h-10 pl-2 border-2 border-black/30 focus:border-blue-600 rounded-md outline-0 mb-4" placeholder="Your title goes here..." required/>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full border-2 rounded-md border-black/30 focus:border-blue-600 outline-0 mb-4 min-h-30 p-2" required/>
        <div className="w-full">
            {
                !loading 
                    ? <Button type="submit">
                        Submit
                    </Button>
                    : <div>
                        <LoaderCircle className="w-6 h-6 animate-spin text-blue-600"/>
                    </div>
            }
            
        </div>
    </form>
}