import { Routes, Route } from "react-router-dom"
import { Blogs } from "./pages/Blogs"
import { BlogForm } from "./pages/BlogForm"
import { SingleBlog } from "./pages/SingleBlog"
import { Navbar } from "./layouts/Navbar"

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Blogs />} />
        <Route path="create-blog" element={<BlogForm />}/>
        <Route path=":id" element={<SingleBlog />}/>
      </Route>
    </Routes>
  </>
  
}

export default App
