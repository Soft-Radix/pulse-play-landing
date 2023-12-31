import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Index";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivacyIndex from "./pages/PrivacyPolicy/PrivacyIndex";
import TermIndex from "./pages/TermAndConditio/TermIndex";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyIndex />} />
          <Route path="/terms" element={<TermIndex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
