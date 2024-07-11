import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Post from "./Pages/Blogs/Post.jsx";
import BlogsList from "./Pages/Blogs/BlogsList.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<BlogsList />} />
          <Route path="post/:id" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
