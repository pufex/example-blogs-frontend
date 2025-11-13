import Button from "../components/Button";
import { useForm } from "react-hook-form"


export default function Register() {

    const {
        register,
        formState: { errors },
        handleSubmit,
        setError,
        getValues
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return <form 
        className="w-full max-w-lg mx-auto p-4"
        onSubmit={handleSubmit(onSubmit)}
    >
        <h1 className="w-full text-center my-8 text-3xl font-bold">
            Register now!
        </h1>
        {
            errors.root && <p className="text-red-500 font-semibold text-lg text-center my-3">
                {errors.root.message}
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
                placeholder="Your username"
                name="username"
                className="w-full h-10 pl-2 border-2 border-black/30 focus:border-blue-600 rounded-md outline-0"
                {...register("username", {
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
                name="password"
                placeholder="Enter your password..."
                className="w-full h-10 pl-2 border-2 border-black/30 focus:border-blue-600 rounded-md outline-0"
                {...register("password", {
                    required: "Required"
                })}
            />
        </div>
        <div className="w-full flex flex-col gap-2 mb-4">
            <div className="flex justify-between">
                <label
                    htmlFor="confirmPassword"
                    className="text-lg"
                >
                    Confirm password
                </label>
                {
                    errors.confirmPassword && <p className="text-red-500 font-semibold text-lg">
                        {errors.confirmPassword.message}
                    </p>
                }
            </div>
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className="w-full h-10 pl-2 border-2 border-black/30 focus:border-blue-600 rounded-md outline-0"
                {...register("confirmPassword", {
                    required: "Required",
                    validate: (val) => {
                        return val == getValues("password")
                            ? true
                            : "Must match password"
                    }
                })}
            />
        </div>
        <Button type="submit" className="w-full justify-center">
            Create account
        </Button>
    </form>
}