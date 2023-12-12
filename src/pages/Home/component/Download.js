import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import downImg from "../../../assets/download.svg";
import dotImg from "../../../assets/dot.svg";
import googleImg from "../../../assets/google.svg";
import appImg from "../../../assets/app.png";

import "../../../style/componentStyle/home/downloadStyle.css";
import bgImg from "../../../assets/downloadBg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Download() {
  const BackGround = {
    borderRadius: "20px",

    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    /* Other background properties if needed */
  };
  const padding = {
    paddingLeft: "2.5rem",
    paddingTop: "1rem",
  };

  return (
    <Container style={BackGround} className="pt-3">
      <Row className="pt-3 ">
        <Col md={6} style={padding}>
          <h1 className="down-heading">Download Now</h1>
          <p className="down-para">
            Lorem ipsum dolor sit amet consectetur. Morbi fames noLorem ipsum
            dolor sit amet consectetur. Morbi fames non mi duis crasn mi duis
            cras
          </p>
          <div className="dot-container">
            <img src={dotImg} alt="" className="img-fluid"></img>
            <h4 className="dot-heading">Available On</h4>
          </div>
          <Col className="download-Img">
            <LazyLoadImage
              src={appImg}
              alt=""
              className="img-fluid apple-img"
            />
            <LazyLoadImage
              src={googleImg}
              alt=""
              className="img-fluid google-img"
            />
          </Col>
        </Col>
        <Col md={6}>
          <LazyLoadImage
            src={downImg}
            alt=""
            className="img-fluid dating-img"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Download;
