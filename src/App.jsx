import { Routes, Route } from "react-router-dom"
import { Blogs } from "./pages/Blogs"
import { BlogForm } from "./pages/BlogForm"
import { Link } from "react-router-dom"
import { SingleBlog } from "./pages/SingleBlog"

function App() {
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
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/create-blog" element={<BlogForm />}/>
      <Route path="/:id" element={<SingleBlog />}/>
    </Routes>
  </>
  
}

export default App
