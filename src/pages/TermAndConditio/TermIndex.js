import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import TermHero from "./Component/TermHero";
import Terms from "./Component/Terms";

function TermIndex() {
  return (
    <>
      <Header newClass={true} />
      <TermHero />
      <Terms />
      <Footer />
    </>
  );
}

export default TermIndex;
