import { Routes, Route, useLocation } from "react-router-dom";
import "./firebase";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Impromptu from "./pages/Impromptu";
import Gallery from "./pages/Gallery";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/impromptu" element={<Impromptu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname === "/" && <Footer />}
    </div>
  );
}

export default App;
