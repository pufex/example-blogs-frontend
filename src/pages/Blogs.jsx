import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthProvider.jsx"
import api from "../api/axios-setup"
import Button from "../components/Button.jsx"
import { LoaderCircle } from "lucide-react"
import DeleteBlogButton from "../components/DeleteBlogButton.jsx"
import AuthOnly from "../components/AuthOnly.jsx"

export function Blogs() {

    const { auth } = useAuth();

    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([])
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await api.get("/blogs");
                setBlogs(response.data);
                console.log(response.data)
            } catch (err) {
                console.log(err)
                setError("We failed to fetch blogs from the database.")
            } finally {
                setLoading(false)
            }
        }

        getBlogs();
    }, [])

    const removeBlogById = useCallback((blog_id) => {
        setBlogs(blogs => [...blogs.filter(({ _id }) => blog_id != _id)])
    }, [])

    return <div className="w-full p-4">
        <h1 className="w-full text-center text-3xl text-black font-bold py-4 mb-10">
            View all blogs.
        </h1>
        {
            loading
                ? <div className="p-4 flex items-center justify-center">
                    <LoaderCircle className="w-6 h-6 animate-spin text-blue-900" />
                </div>
                :
                error
                    ? <p className="w-full py-2 text-red-600 font-semibold text-center">
                        {error}
                    </p>
                    : blogs.size == 0
                        ? <p className="py-2 font-semibold w-full text-center text-sm">
                            No blogs to display
                        </p>
                        : <div className="w-full flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-4">

                            {
                                blogs
                                    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                                    .map((blog, index) => (
                                        <div className="w-full border-2 border-black/10 p-4 rounded-lg" key={index}>
                                            <div className="flex justify-between items-center">
                                                <h1 className="text-nowrap w-full overflow-hidden text-2xl font-semibold text-black pb-4">
                                                    {blog.title}
                                                </h1>
                                                <AuthOnly>
                                                    {
                                                        blog.user_id == auth?.user._id && <DeleteBlogButton
                                                            blog_id={blog._id}
                                                            removeBlogById={removeBlogById}
                                                        />
                                                    }
                                                </AuthOnly>
                                            </div>
                                            <p className="text-left text-xl mb-4">
                                                {blog.content}
                                            </p>
                                            <div className="w-full flex justify-end">
                                                <Button onClick={() => navigate(`/${blog._id}`)}>
                                                    View blog
                                                </Button>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>


        }

    </div>
}