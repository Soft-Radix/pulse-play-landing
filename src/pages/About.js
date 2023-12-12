// Importing necessary React components and external libraries
import React from "react";
import Header from "../component/Header"; // Importing Header component
import Footer from "../component/Footer"; // Importing Footer component
import AboutHero from "./About/AboutComponent/AboutHero";
import Features from "./About/AboutComponent/Features";
import Empower from "./About/AboutComponent/Empower";
import Success from "./About/AboutComponent/Success";
import DailyReport from "./About/AboutComponent/DailyReport";
import Download from "./Home/component/Download";

// Functional component for the About page
function About() {
  return (
    <>
      <Header /> {/* Rendering the Header component */}
      <AboutHero />
      {/* Rendering the AboutHero component */}
      <Features /> {/* Rendering the Features component */}
      <Empower /> {/* Rendering the Empower component */}
      <Success />
      <DailyReport />
      <Download />
      <Footer /> {/* Rendering the Footer component */}
    </>
  );
}

export default About; // Exporting the About component as the default export
