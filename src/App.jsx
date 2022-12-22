import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { PostsNew } from "./PostsNew";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/new" element={<PostsNew />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
