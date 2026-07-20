import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bottom from "./components/Bottom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Bottom />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;