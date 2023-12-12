import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactbg from "../../assets/contactBg.svg";
import "../../style/componentStyle/contactPage/ContactHeroPageStyle.css";
import starImg from "../../assets/Soft Star.svg";
import pinkImg from "../../assets/circlePink.svg";
import pink1Img from "../../assets/circlePink1.svg";
import purpleImg from "../../assets/circle.svg";

import xImg from "../../assets/x.svg";
function ContactHero() {
  const contactBg = {
    backgroundImage: `url(${contactbg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    position: "relative",
    bottom: "100px",
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
          <img src={purpleImg} alt=""></img>
          <img src={xImg} alt=""></img>
          <img src={pinkImg} alt=""></img>
          <img src={pink1Img} alt=""></img>
          <img src={starImg} alt=""></img>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactHero;
