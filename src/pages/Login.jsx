import Button from "../components/Button"

export default function Login() {
    return <form className="w-full max-w-lg mx-auto p-4">
        <h1 className="w-full text-center my-8 text-3xl font-bold">
            Login 
        </h1>
        <div className="w-full flex flex-col gap-2 mb-4">
            <div className="flex justify-between">
                <label 
                    htmlFor="username"
                    className="text-lg"
                >
                    Username
                </label>
                {
                    true && <p className="text-red-500 font-semibold text-lg">
                        You're wrong pal
                    </p>
                }
            </div>
            <input 
                type="text" 
                placeholder="Your username"
                className="w-full h-10 pl-2 border-2 border-black/30 focus:border-blue-600 rounded-md outline-0"
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
                    true && <p className="text-red-500 font-semibold text-lg">
                        Are you done?
                    </p>
                }
            </div>
            <input 
                type="password" 
                placeholder="Enter your password..."
                className="w-full h-10 pl-2 border-2 border-black/30 focus:border-blue-600 rounded-md outline-0"
            />
        </div>
        <Button type="submit" className="w-full justify-center">
            Login now
        </Button>
    </form>
}