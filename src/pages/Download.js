import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import downImg from "../assets/download.svg";
import dotImg from "../assets/dot.svg";
import googleImg from "../assets/google.svg";
import appImg from "../assets/app.png";
import vectorImg from "../assets/workBackground.png";
import "../style/downloadStyle.css";
function Download() {
  const BackGround = {
    backgroundImage: `url(${vectorImg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
    /* Other background properties if needed */
  };

  return (
    <Container style={BackGround} className="pt-3 pb-3">
      <Row className="pt-3 pb-3">
        <Col>
          <h1 className="down-heading">Download Now</h1>
          <p className="down-para">
            Lorem ipsum dolor sit amet consectetur. Morbi fames noLorem ipsum
            dolor sit amet consectetur. Morbi fames non mi duis crasn mi duis
            cras
          </p>
          <div>
            <img src={dotImg} alt="" className="img-fluid"></img>
            <h4 className="dot-heading">Available On</h4>
          </div>
          <img src={googleImg} alt="" className="img-fluid"></img>
          <img src={appImg} alt="" className="img-fluid"></img>
        </Col>
        <Col>
          <img src={downImg} alt="" className="img-fluid"></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Download;
