import React from "react";
import PrivacyHero from "./component/PrivacyHero";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Policy from "./component/Policy";

function PrivacyIndex() {
  return (
    <>
      <Header newClass={true} />
      <PrivacyHero />
      <Policy />
      <Footer />
    </>
  );
}

export default PrivacyIndex;
