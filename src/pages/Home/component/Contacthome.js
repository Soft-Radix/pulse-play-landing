import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import contImg from "../../../assets/contactImg.svg";
import btnImg from "../../../assets/contactBtn.svg";

import "../../../style/componentStyle/home/contactStyle.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Contact() {
  return (
    <Container fluid style={{ paddingLeft: "4rem" }}>
      <Row>
        <Col className="d-flex flex-column align-items-start justify-content-start contact-wrapper">
          <h1 className="contact-heading">
            Create <span>Short Profile</span> Videos
          </h1>
          <p className="contact-para">
            Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
            vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet
            ultrices ut hendrerit consequat est tincidunt pharetra egestas
            porttitor. Ut amet non nunc non vitae orci nunc.Lorem ipsum dolor
            sit amet consectetur. Elit egestas dui arcu nisi vel quam sit. Urna
            aliquet id convallis in semper{" "}
          </p>
          <img src={btnImg} alt="" className="contact-btn"></img>
        </Col>
        <Col>
          <LazyLoadImage
            src={contImg}
            alt=""
            className="img-fluid contact-img"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
