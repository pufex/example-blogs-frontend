import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { LoaderCircle } from "lucide-react"
import api from "../api/axios-setup"

export function BlogForm() {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        defaultValues: {
            title: "I didn't not sleep with your mother",
            content: "Eghh em."
        }
    });

    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        
        try {
            setLoading(true)
            await api.post("/blogs", { ...data });

            navigate("/")
        } catch (err) {
            setError("root", {
                message: "There was an error submitting this form."
            })
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return <form className="w-full max-w-3xl mx-auto px-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl text-center w-full py-6">
            New blog form
        </h1>
        {
            errors.root && <p className="w-full text-red-600 text-center py-4 font-semibold text-lg">
                {errors.root.message}
            </p>
        }

        <div className="flex flex-col gap-2 w-full mb-4">
            <div className="w-full flex justify-between gap-2">
                <label
                    htmlFor="title"
                    className="text-lg font-medium text-black"
                >
                    Title
                </label>
                {
                    errors.title && <p className="text-red-600 text-right font-semibold text-lg text-nowrap">
                        {errors.title.message}
                    </p>
                }
            </div>
            <input
                type="text"
                id="title"
                className="w-full h-10 pl-2 border-2 border-black/30 focus:border-blue-600 rounded-md outline-0"
                placeholder="Your title goes here..."
                {...register("title", { required: "Title is required" })}
            />
        </div>

        <div className="flex flex-col gap-2 w-full mb-4">
            <div className="w-full flex justify-between gap-2">
                <label
                    htmlFor="content"
                    className="w-full text-lg font-medium text-black"
                >
                    Content
                </label>
                {
                    errors.content && <p className="text-red-600 text-right font-semibold text-lg text-nowrap">
                        {errors.content.message}
                    </p>
                }
            </div>
            <textarea
                id="content"
                className="w-full border-2 rounded-md border-black/30 focus:border-blue-600 outline-0 mb-4 min-h-30 p-2"
                placeholder="What's on your mind?"
                {...register("content", { required: "Content is required" })}
            />
        </div>

        <div className="w-full">
             <Button type="submit" disabled={loading}>
                Submit
                {
                    loading && <LoaderCircle className="w-6 h-6 animate-spin text-white" />  
                }
            </Button>
        </div>

    </form>
}