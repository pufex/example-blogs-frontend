import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../api/axios-setup"


export function SingleBlog(){
    
    const {id: blog_id} = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState("")

    useEffect(() => {
        const getBlogById = async () => {
            try{
                const response = api.get(`/blogs/${blog_id}`)
                setBlog(response.data)
            }catch(err) {
                console.log(err)
                setError("Failed to fetch this blog.")
            }
        }

        getBlogById();
    }, [])

    return <h1>
        Single Blog page
    </h1>
}