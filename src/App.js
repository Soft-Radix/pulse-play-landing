import "./App.css";
// import Footer from "./component/Footer";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./pages/HeroSection";
import About from "./pages/AboutSection/About";
import WorkSection from "./pages/WorkSection";
import Contact from "./pages/Contact";
import Offer from "./pages/Offer";
import Service from "./pages/Service";
import Download from "./pages/Download";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <WorkSection />
      <Contact />
      <Offer />
      <Service />
      <Download />

      {/* <Footer /> */}
    </>
  );
}

export default App;
