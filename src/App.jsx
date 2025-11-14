import { Routes, Route } from "react-router-dom"
import { Blogs } from "./pages/Blogs"
import { BlogForm } from "./pages/BlogForm"
import { SingleBlog } from "./pages/SingleBlog"
import { Navbar } from "./layouts/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import OnlyUnloggedRoute from "./components/OnlyUnloggedRoute"
import RestrictedRoute from "./components/RestrictedRoute"

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Blogs />} />
        <Route path=":id" element={<SingleBlog />}/>

        <Route element={<RestrictedRoute />}>
          <Route path="create-blog" element={<BlogForm />}/>
        </Route>

        <Route path="/auth" element={<OnlyUnloggedRoute />}>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>

      </Route>
    </Routes>
  </>
  
}

export default App
