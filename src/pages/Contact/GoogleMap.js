// import GoogleMapReact from "google-map-react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style/componentStyle/contactPage/googleMapStyle.css";
function GoogleMap() {
  return (
    <Container className="mt-3 mb-3">
      <Row className="pt-5 pb-5 map-wrapper">
        <iframe
          title="Google Maps - Dos Mas Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Row>
    </Container>
  );
}

export default GoogleMap;
