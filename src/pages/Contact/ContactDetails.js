import React from "react";
import detailIMg from "../../assets/detailImg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../component/ContactForm";
import "../../style/componentStyle/contactPage/contactDetailForm.css";
import twitterImg from "../../assets/Twitter.svg";
import fbImg from "../../assets/Facebook.svg";
import ytImg from "../../assets/Youtube.svg";
import linkImg from "../../assets/LinkedIn.svg";
import instaImg from "../../assets/Instagram.svg";
function ContactDetails() {
  return (
    <Container className="detail-container">
      <Row className="detail-row">
        <Col>
          <LazyLoadImage
            src={detailIMg}
            effect="blur"
            alt=""
            className="img-fluid detail-Img"
          />
        </Col>
        <Col style={{ padding: "3rem 1rem" }}>
          <h2 className="contactDetail-heading">Add Contact Details </h2>

          <Col >
            <ContactForm />
          </Col>
        </Col>
      </Row>
      <Row>
        <Col
          md={12}
          xs={12}
          className="d-flex
           gap-5"
        >
          <div className="social-icon">
            <img src={twitterImg} alt=""></img>

            <img src={linkImg} alt=""></img>
            <img src={fbImg} alt=""></img>
            <img src={ytImg} alt=""></img>
            <img src={instaImg} alt=""></img>
          </div>
          <h3 className="info-heading">For More Info</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactDetails;
