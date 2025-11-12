import { useEffect, useState } from "react"
import api from "../api/axios-setup"

export function Blogs (){

    const [blogs, setBlogs] = useState([])
    const [error, setError] = useState("");

    useEffect(() => {
        const getBlogs = async () => {
            try{
                const response = await api.get("/blogs");
                setBlogs(response.data);
            }catch(err){
                console.log(err)
                console.log(response)
                setError("We failed to fetch blogs from the database.")
            }
        }

        getBlogs();
    }, [])

    return <h1>
        All Blogs page
    </h1>
}