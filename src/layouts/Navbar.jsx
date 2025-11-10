import { Link, Outlet } from "react-router-dom"


export function Navbar() {
    return <>
        <nav className="w-full h-20 bg-blue-600 border-b-2 border-blue-800 fixed top-0 left-0">
            <ul className="w-full mx-auto max-w-7xl px-4 py-2 h-full flex items-center space-x-6">
                <li>
                    <Link to="/" className="block text-xl text-white font-semibold transform hover:bg-blue-500 px-2 py-1 rounded-lg active:bg-blue-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/create-blog" className="block text-xl text-white font-semibold transform hover:bg-blue-500 px-2 py-1 rounded-lg active:bg-blue-400">
                        New blog
                    </Link>
                </li>
            </ul>
        </nav>
        <main>
            <Outlet />
        </main>
    </>
}