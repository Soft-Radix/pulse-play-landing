import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import ContactHero from "./ContactHero";
import ContactDetails from "../../style/componentStyle/contactPage/ContactDetails";

function Contact() {
  return (
    <>
      <Header newClass={true} />
      <ContactHero />
      <ContactDetails />
      <Footer />
    </>
  );
}

export default Contact;
