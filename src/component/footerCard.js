import React from "react";
import { Col } from "react-bootstrap";

function footerCard(props) {
  const { heading, list1, list2, list3, Img, Img1 } = props;
  return (
    <>
      <Col
        className="d-flex flex-column gap-2 "
        style={{ cursor: "pointer" }}
        xs={12}
        md={4}
      >
        <h3 className="footer-heading">{heading}</h3>
        <div className="contact-icon">
          {Img && <img src={Img} className="img-fluid img-wrap" alt=""></img>}

          <span className="footer-nav-list">{list1}</span>
        </div>
        <div className="contact-icon">
          {Img1 && <img src={Img1} className="img-fluid img-wrap" alt=""></img>}

          <span className="footer-nav-list">{list2}</span>
        </div>
        <div>
          <span className="footer-nav-list">{list3}</span>
        </div>
      </Col>
    </>
  );
}

export default footerCard;
