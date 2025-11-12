import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { LoaderCircle } from "lucide-react";
import api from "../api/axios-setup"


export function SingleBlog() {

    const navigate = useNavigate();

    const { id: blog_id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getBlogById = async () => {
            try {
                const response = api.get(`/blogs/${blog_id}`)
                setBlog(response.data)
            } catch (err) {
                console.log(err)
                setError("Failed to fetch this blog.")
            } finally {
                setLoading(false)
            }
        }

        getBlogById();
    }, [])

    return loading
        ? <div className="p-4 flex items-center justify-center">
            <LoaderCircle className="w-6 h-6 animate-spin text-blue-900" />
        </div>
        : <div className="w-full p-4">
            {
                error
                    ? <p className="text-lg text-red-600 font-semibold text-center w-full">
                        {error}
                    </p>
                    : !blog
                        ? <p className="text-lg text-center font-semibold">
                            This blog doesn't exist. <Link className="text-blue-800 underline" to="/">Go home.</Link>
                        </p>
                        : <>
                            <div className="w-full pt-2 pb-4">
                                <Button onClick={() => navigate(-1)}>
                                    Go back
                                </Button>
                            </div>
                            <h1 className="text-2xl font-bold text-left py-4">
                                {blog.title}
                            </h1>
                            <p className="text-xl text-left py-2">
                                {blog.content}
                            </p>
                        </>
            }
        </div>
}