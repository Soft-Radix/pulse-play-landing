import React from "react";
import detailIMg from "../../../assets/detailImg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Container, Row } from "react-bootstrap";

function ContactDetails() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <LazyLoadImage
            src={detailIMg}
            effect="blur"
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col>
          <h2>Add Contact Details </h2>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default ContactDetails;
