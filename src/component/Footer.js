import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import twitterImg from "../assets/Twitter.svg";
import facebookImg from "../assets/Facebook.svg";
import instagramImg from "../assets/Instagram.svg";
import indeedImg from "../assets/LinkedIn.svg";
import youtubeImg from "../assets/Youtube.svg";
import msgimg from "../assets/msg.svg";
import phoneimg from "../assets/phone.svg";
import Logoimg from "../assets/footerLogo.svg";
import "../style/footer.css";
import FooterCard from "../component/footerCard";

function Footer() {
  return (
    <>
      <Container fluid className="bg-dark mt-5 pb-3 ">
        <Row className="footer-container">
          <Col md={4} sm={6} xs={12}>
            <img
              src={Logoimg}
              alt=""
              className="img-fluid pb-3"
              style={{ cursor: "pointer" }}
            ></img>
            <p className="footer-para">
              Lorem ipsum dolor sit amet consectetur. Scelerisque ultrices at
              pharetra dis mi urna. Eu est accumsan ut commodo.
            </p>
            <div className="social-icon">
              <img src={twitterImg} alt=" " className="img-fluid"></img>
              <img src={indeedImg} alt=" " className="img-fluid"></img>
              <img src={facebookImg} alt=" " className="img-fluid"></img>
              <img src={youtubeImg} alt=" " className="img-fluid"></img>
              <img src={instagramImg} alt=" " className="img-fluid"></img>
            </div>
          </Col>
          <Col className="d-flex pl-3 flex-wrap" md={8}>
            <FooterCard
              heading={"Quick Links"}
              list1={"Home"}
              list2={"About Us"}
              list3={"Contact Us"}
            />
            <FooterCard
              heading={"Support"}
              list1={"Help Center"}
              list2={"Terms and Conditions"}
              list3={"Privacy Policy"}
            />
            <FooterCard
              heading={"Contact Us"}
              Img={msgimg}
              list1={"info@yourdomain.com"}
              Img1={phoneimg}
              list2={"+ 9834535606"}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row style={{ backgroundColor: "rgb(36 19 30)" }}>
          <Col md={12}>
            <p className="copy-write">
              © 2023 Pulse Play. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
