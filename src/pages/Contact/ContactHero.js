import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactbg from "../../assets/contactBg.svg";
import "../../style/componentStyle/contactPage/ContactHeroPageStyle.css";

function ContactHero() {
  const contactBg = {
    backgroundImage: `url(${contactbg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat",
    height: "30em",
    position: "absolute",
    top: "0",
    zIndex: "-1",
  };
  return (
    <Container
      fluid
      style={contactBg}
      className="pt-3 pb-3 contactPage-container"
    >
      <Row>
        <Col className="contactPage-text">
          <h1 className="contactHero-heading">
            Contact <span>Us</span>
          </h1>
          <p className="contactHero-para">
            Lorem ipsum dolor sit amet consectetur. Magna velit at tincidunt
            ipsum montes praesent sagittis. Eget proin sapien volutpat a hac
            vulputate. Eleifend nec{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactHero;
