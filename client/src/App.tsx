import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazyLoad } from "./utils/lazyLoad";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazyLoad("../pages/Home.tsx");
const Blogs = lazyLoad("../pages/Blogs.tsx");

function App() {
  return (
    <Suspense fallback="page loading...">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
