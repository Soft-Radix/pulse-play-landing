import React from "react";
import PrivacyHero from "./component/PrivacyHero";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

function PrivacyIndex() {
  return (
    <>
      <Header newClass={true} />
      <PrivacyHero />
      {/* <Footer /> */}
    </>
  );
}

export default PrivacyIndex;
