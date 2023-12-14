import React from "react";
import callImg from "../../assets/call.svg";
import emailImg from "../../assets/email.svg";
import locationImg from "../../assets/locations.svg";
import { Col, Container, Row } from "react-bootstrap";
import "../../style/componentStyle/contactPage/contactAddressStyle.css";
function ContactAddress() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#ffe6ef",
        marginTop: "5rem",
        paddingBottom: "4rem",
      }}
    >
      <Row style={{ padding: "0 4rem" }}>
        <Col>
          <div className="address-wrapper">
            <img src={emailImg} alt="" className="address-img"></img>
            <div className="address-text">
              <p className="address-para">Email Address</p>
              <p className="address-para1"> info@097gmail.com</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="address-wrapper">
            <img src={callImg} alt="" className="address-img"></img>
            <div className="address-text">
              <p className="address-para">Phone Number</p>
              <p className="address-para1"> info@097gmail.com</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="address-wrapper">
            <img src={locationImg} alt="" className="address-img"></img>
            <div className="address-text">
              <p className="address-para">Location</p>
              <p className="address-para1"> info@097gmail.com</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactAddress;
