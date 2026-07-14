import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}