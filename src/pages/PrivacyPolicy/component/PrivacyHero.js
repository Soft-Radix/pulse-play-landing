import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import bgImg from "../../../assets/newPrivacy.svg";

import "../../../style/componentStyle/privacyPage/privacyHero.css";
function PrivacyHero() {
  const privacyHeroBg = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    position: "relative",
    top: "-101px",
    zIndex: -1,
  };

  return (
    <Container fluid style={privacyHeroBg} className="pt-3 pb-3">
      <Row className="privacy-row">
        <Col className="privacy-col">
          <h1 className="privacy-heading">
            Privacy <span>Policy</span>
          </h1>
          <p className="privacy-para">
            Please review our privacy policies below
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyHero;
