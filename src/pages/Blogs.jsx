import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/axios-setup"
import Button from "../components/Button.jsx"
import { LoaderCircle, Trash, Trash2 } from "lucide-react"
import DeleteBlogButton from "../components/DeleteBlogButton.jsx"

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
                setError("We failed to fetch blogs from the database.")
            } finally {
                setLoading(false)
            }
        }

        getBlogs();
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
                                blogs.map((blog, index) => (
                                    <div className="w-full border-2 border-black/10 p-4 rounded-lg" key={index}>
                                        <div className="flex justify-between items-center">
                                            <h1 className="text-nowrap w-full overflow-hidden text-2xl font-semibold text-black pb-4">
                                                {blog.title}
                                            </h1>
                                            <DeleteBlogButton />
                                        </div>
                                        <p className="text-left text-xl mb-4">
                                            {blog.content}
                                        </p>
                                        <div className="w-full flex justify-end">
                                            <Button onClick={() => navigate(`/${blog.id}`)}>
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