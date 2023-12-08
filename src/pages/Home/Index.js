import React from "react";
import Header from "../../component/Header";
import WorkSection from "./component/WorkSection";
import Download from "./component/Download";
import Service from "./component/Service";
import Footer from "../../component/Footer";
import Contact from "./component/Contact";
import Offer from "./component/Offer";
import About from "./component/About";
import Dating from "./component/Dating";

function Index() {
  return (
    <div>
      <Header />
      <Dating />
      <About />
      <WorkSection />
      <Contact />
      <Offer />
      <Service />
      <Download />
      <Footer />
    </div>
  );
}

export default Index;
