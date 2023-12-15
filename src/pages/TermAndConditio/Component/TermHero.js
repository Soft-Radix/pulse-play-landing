import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import bgTerm from "../../../assets/termBg.svg";

function TermHero() {
  const termHeroBg = {
    backgroundImage: `url(${bgTerm})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    position: "relative",
    top: "-101px",
    zIndex: -1,
  };
  return (
    <Container fluid style={termHeroBg} className="pt-3 pb-3">
      <Row className="privacy-row">
        <Col className="privacy-col">
          <h1 className="privacy-heading">
            Terms and <span>Conditions</span>
          </h1>
          <p className="privacy-para">
            Welcome to Pulse Play. Please carefully read the following terms and
            conditions <br></br>("Terms") before using our services.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default TermHero;
