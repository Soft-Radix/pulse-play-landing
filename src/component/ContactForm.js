import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import messageImg from "../assets/message.svg";
import profileImg from "../assets/Profile 2.svg";
import phoneImg from "../assets/phone-call.svg";
function ContactForm() {
  return (
    <>
      <Form className="form-wrapper">
        <Col className="form-container" md={6}>
          <div className="form-input">
            <Form.Control
              type="text"
              placeholder="First Name "
              className="form-inputText"
            />
            <img src={profileImg} alt="" className="form-icon"></img>
          </div>
          <div className="form-input">
            <Form.Control
              type="text"
              placeholder="Last Name "
              className="form-inputText"
            />
            <img src={profileImg} alt="" className="form-icon"></img>
          </div>
        </Col>
        <Col className="form-container" md={6}>
          <div className="form-input">
            <Form.Control
              type="text"
              placeholder="Email Address "
              className="form-inputText"
            />
            <img src={messageImg} alt="" className="form-icons"></img>
          </div>
          <div className="form-input">
            <Form.Control
              type="text"
              placeholder="Phone Number "
              className="form-inputText"
            />
            <img src={phoneImg} alt="" className="form-icons"></img>
          </div>
        </Col>

        <Form.Control
          as="textarea"
          rows={5}
          name="comments"
          placeholder="Enter your comments"
          className="message"
          resize="none"
        />

        <Button className="btn-submit">Submit</Button>
      </Form>
    </>
  );
}

export default ContactForm;
