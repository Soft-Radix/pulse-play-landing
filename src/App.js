import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Index";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
