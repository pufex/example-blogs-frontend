import { Link, Outlet } from "react-router-dom"
import AuthOnly from "../components/AuthOnly"
import LoggedOutOnly from "../components/LoggedOutOnly"


export function Navbar() {
    return <>
        <div className="w-full h-20"/>
        <nav className="w-full h-20 bg-blue-600 border-b-2 border-blue-800 fixed top-0 left-0 flex justify-between">
            <ul className="mx-auto max-w-7xl px-4 py-2 h-full flex items-center space-x-6">
                <li>
                    <Link to="/" className="block text-xl text-white font-semibold transform hover:bg-blue-500 px-2 py-1 rounded-lg active:bg-blue-400">
                        Home
                    </Link>
                </li>
                <AuthOnly>
                    <li>
                        <Link to="/create-blog" className="block text-xl text-white font-semibold transform hover:bg-blue-500 px-2 py-1 rounded-lg active:bg-blue-400">
                            New blog
                        </Link>
                    </li>
                </AuthOnly>
            </ul>
            <LoggedOutOnly>
                <ul className="mx-auto max-w-7xl px-4 py-2 h-full flex items-center space-x-6">
                    <li>
                        <Link to="/auth/login" className="block text-xl text-white font-semibold transform hover:bg-blue-500 px-2 py-1 rounded-lg active:bg-blue-400">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/auth/register" className="block text-xl text-white font-semibold transform hover:bg-blue-500 px-2 py-1 rounded-lg active:bg-blue-400">
                            Register
                        </Link>
                    </li>
                </ul>
            </LoggedOutOnly>
        </nav>
        <main className="w-full max-w-7xl mx-auto">
            <Outlet />
        </main>
    </>
}