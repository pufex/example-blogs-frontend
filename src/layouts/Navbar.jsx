import { Link, Outlet } from "react-router-dom"


export function Navbar() {
    return <>
        <nav>
        <ul>
            <li>
            <Link to="/">
                Home
            </Link>
            </li>
            <li>
            <Link to="/create-blog">
                New blog
            </Link>
            </li>
        </ul>
        </nav>
        <main>
            <Outlet/>
        </main>
    </>
}