import { Routes, Route } from "react-router-dom"
import { Blogs } from "./pages/Blogs"
import { BlogForm } from "./pages/BlogForm"
import { SingleBlog } from "./pages/SingleBlog"
import { Navbar } from "./layouts/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Blogs />} />
        <Route path="create-blog" element={<BlogForm />}/>
        <Route path=":id" element={<SingleBlog />}/>
        <Route path="/auth">
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>
      </Route>
    </Routes>
  </>
  
}

export default App
