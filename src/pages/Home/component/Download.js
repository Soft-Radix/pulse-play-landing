import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import downImg from "../../../assets/download.png";
import dotImg from "../../../assets/dot.svg";
import googleImg from "../../../assets/newGoogle.svg";
import appImg from "../../../assets/newApple.svg";

import "../../../style/componentStyle/home/downloadStyle.css";
import bgImg from "../../../assets/downloadBg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Download() {
  const BackGround = {
    borderRadius: "20px",
    marginTop: "2.5rem",
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "auto", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    /* Other background properties if needed */
  };
  const padding = {
    paddingLeft: "2.5rem",
    paddingTop: "1rem",
  };

  return (
    <Container style={BackGround} className="pt-3 mb-3 pb-3">
      <Row className="pt-3  row-download">
        <Col md={6} style={padding} className="download-column">
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
          <div className="download-Img">
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
          </div>
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
