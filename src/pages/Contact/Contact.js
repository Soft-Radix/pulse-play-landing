import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import ContactHero from "./ContactHero";

function Contact() {
  return (
    <>
      <Header newClass={true} />
      <ContactHero />
      <Footer />
    </>
  );
}

export default Contact;
