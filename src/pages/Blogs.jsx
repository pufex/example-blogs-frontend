import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/axios-setup"
import Button from "../components/Button.jsx"
import {LoaderCircle} from "lucide-react"

export function Blogs() {

    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([])
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await api.get("/blogs");
                setBlogs(response.data);
            } catch (err) {
                console.log(err)
                console.log(response)
                setError("We failed to fetch blogs from the database.")
            } finally {
                setLoading(false)
            }
        }

        getBlogs();
    }, [])

    return <div className="w-full">
        <h1 className="w-full text-center text-3xl text-black font-bold py-4">
            View all blogs.
        </h1>
        {
            loading
                ? <div className="p-4 flex items-center justify-center">
                    <LoaderCircle className="w-6 h-6 animate-spin text-blue-900"/>
                </div>
                : <div className="w-full flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-4">
                    {
                        error
                            ? <p className="py-2 text-red-600 font-semibold">
                                {error}
                            </p>
                            : blogs.size == 0
                                ? <p className="py-2 font-semibold w-full text-center text-sm">
                                    No blogs to display
                                </p>
                                : blogs.map((blog, index) => (
                                    <div className="w-full border-2 border-black/10 p-4 rounded-lg" key={index}>
                                        <h1 className="text-nowrap w-full overflow-hidden text-2xl font-semibold text-black pb-4">
                                            {blog.title}
                                        </h1>
                                        <p className="text-[1.25rem] font-medium text-left">
                                            {blog.content}
                                        </p>
                                        <Button onClick={() => navigate(`/${blog.id}`)}>
                                            View blog
                                        </Button>
                                    </div>
                                ))
                    }
                </div>
        }

    </div>
}