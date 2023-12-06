import "./App.css";
// import Footer from "./component/Footer";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./pages/HeroSection";
import About from "./pages/AboutSection/About";
import WorkSection from "./pages/WorkSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <WorkSection />
      {/* <Footer /> */}
    </>
  );
}

export default App;
