import { Routes, Route } from "react-router-dom"
import { Blogs } from "./pages/Blogs"
import { BlogForm } from "./pages/BlogForm"

function App() {
  return <>
    
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/create-blog" element={<BlogForm />}/>
    </Routes>
  </>
  
}

export default App
