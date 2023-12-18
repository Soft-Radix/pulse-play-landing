import React from "react";
import { Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
function ServiceCard(props) {
  const { title, imgSrc, description } = props;
  return (
    <Col
      lg={3}
      sm={6}
      xs={12}
      xxl={4}
      className="pt-3 pb-3 service-container position-relative d-flex flex-column align-items-center justify-content-center"
    >
      <div className="detail-box"></div>
      <div className="detail-parent">
        <LazyLoadImage src={imgSrc} alt=" " className="img-fluid icon-img" />
        <h4 className="detail-heading">{title}</h4>
        <p className="detail-para">{description}</p>
      </div>
    </Col>
  );
}

export default ServiceCard;
