import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import ContactHero from "./ContactHero";
import ContactDetails from "./ContactDetails";
import ContactDescription from "./ContactDescription";
import ContactAddress from "./ContactAddress";
import GoogleMap from "./GoogleMap";

function Contact() {
  return (
    <>
      <Header newClass={true} />
      <ContactHero />
      <ContactDetails />
      <ContactDescription />
      <ContactAddress />
      <GoogleMap />
      <Footer />
    </>
  );
}

export default Contact;
