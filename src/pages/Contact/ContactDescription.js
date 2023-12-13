import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style/componentStyle/contactPage/contactDescStyle.css";
function ContactDescription() {
  return (
    <Container className="mt-5 mb-3">
      <Row className="pt-5">
        <Col>
          <h1 className="desc-heading">Get in Touch</h1>
          <p className="desc-para">
            Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
            vel quam sit. Urna aliquet id convallis in semper egestas leo.{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactDescription;
