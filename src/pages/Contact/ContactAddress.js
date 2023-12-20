import React from "react";
import callImg from "../../assets/call.svg";
import emailImg from "../../assets/email.svg";
import locationImg from "../../assets/locations.svg";
import { Col, Container, Row } from "react-bootstrap";
import "../../style/componentStyle/contactPage/contactAddressStyle.css";
function ContactAddress() {
  return (
    <div className="add-container">
      <Container
        style={{
          marginTop: "5rem",
          paddingBottom: "4rem",
        }}
      >
        <Row>
          <Col md={4} xs={12}>
            <div className="address-wrapper">
              <img src={emailImg} alt="" className="address-img"></img>
              <div className="address-text">
                <p className="address-para">Email Address</p>
                <p className="address-para1"> info@097gmail.com</p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="address-wrapper">
              <img src={callImg} alt="" className="address-img"></img>
              <div className="address-text">
                <p className="address-para">Phone Number</p>
                <p className="address-para1"> info@097gmail.com</p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
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
    </div>
  );
}

export default ContactAddress;
