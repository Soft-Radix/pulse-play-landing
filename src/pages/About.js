// Importing necessary React components and external libraries
import React from "react";
import Header from "../component/Header"; // Importing Header component
import Footer from "../component/Footer"; // Importing Footer component
import AboutHero from "./About/AboutComponent/AboutHero";
import Features from "./About/AboutComponent/Features";
import Empower from "./About/AboutComponent/Empower";

// Functional component for the About page
function About() {
  return (
    <>
      <Header /> {/* Rendering the Header component */}
      <AboutHero />
      {/* Rendering the AboutHero component */}
      <Features /> {/* Rendering the Features component */}
      <Empower /> {/* Rendering the Empower component */}
      <Footer /> {/* Rendering the Footer component */}
    </>
  );
}

export default About; // Exporting the About component as the default export
