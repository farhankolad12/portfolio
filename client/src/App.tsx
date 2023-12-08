import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

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
