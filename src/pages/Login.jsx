import Button from "../components/Button"
import { useForm } from "react-hook-form"

export default function Login() {

    const { 
        register, 
        formState: {errors}, 
        handleSubmit, 
        setError
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return <form 
        className="w-full max-w-lg mx-auto p-4"
        onSubmit={handleSubmit(onSubmit)}
    >
        <h1 className="w-full text-center my-8 text-3xl font-bold">
            Login 
        </h1>
        {
            errors.root && <p className="text-red-500 font-semibold text-lg text-center my-3">
                Failed to login
            </p>
        }
        <div className="w-full flex flex-col gap-2 mb-4">
            <div className="flex justify-between">
                <label 
                    htmlFor="username"
                    className="text-lg"
                >
                    Username
                </label>
                {
                    errors.username && <p className="text-red-500 font-semibold text-lg">
                       {errors.username.message}
                    </p>
                }
            </div>
            <input 
                type="text"
                name="username"
                placeholder="Your username"
                className="w-full h-10 pl-2 border-2 border-black/30 focus:border-blue-600 rounded-md outline-0"
                {...register("username", {
                    minLength: {
                        value: 6, 
                        message: "Min. 6 char."
                    },
                    maxLength: {
                        value: 25,
                        message: "Max. 25 char."
                    }, 
                    required: "Required"
                })}
            />
        </div>
        <div className="w-full flex flex-col gap-2 mb-4">
            <div className="flex justify-between">
                <label 
                    htmlFor="password"
                    className="text-lg"
                >
                    Password
                </label>
                {
                    errors.password && <p className="text-red-500 font-semibold text-lg">
                        {errors.password.message}
                    </p>
                }
            </div>
            <input 
                type="password" 
                placeholder="Enter your password..."
                name="password"
                className="w-full h-10 pl-2 border-2 border-black/30 focus:border-blue-600 rounded-md outline-0"
                {...register("password", {
                    minLength: {
                        value: 8, 
                        message: "Min. 8 char."
                    },
                    maxLength: {
                        value: 30,
                        message: "Max. 30 char."
                    },
                    required: "Required"
                })}
            />
        </div>
        <Button type="submit" className="w-full justify-center">
            Login now
        </Button>
    </form>
}