import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../style/componentStyle/privacyPage/PolicyStyle.css";
import Data from "./privacy.json";
function Policy() {
  console.log(Data.information, "Dasd");
  return (
    <Container className="pt-2 pb-3">
      <Row>
        <Col className="pl-2 pr-3">
          <h1 className="policy-heading">Introduction</h1>
          <p className="policy-para">
            Welcome to Pulse Play ("we," "our," or "us"). Your privacy is
            important to us, and we are committed to protecting the personal and
            technical information you provide to us. This Privacy Policy
            outlines the types of information we collect, how we use it, and the
            choices you have regarding your information.
          </p>
          {Data.map((item, index) => {
            return (
              <div key={index + 1}>
                <h1 className="policy-heading1">
                  {index + 1}.{item.title}
                </h1>
                {item.information.map((info, infoIndex) => {
                  if (item.addSpanTag) {
                    info.description = (
                      <p>
                        For any privacy concerns or inquiries, please contact us
                        at{" "}
                        <span className="span-email"> info@softradix.com.</span>
                      </p>
                    );
                  }
                  return (
                    <div>
                      {info.heading && (
                        <>
                          <h4 className="policy-heading2">
                            {index + 1}.{infoIndex + 1} {info.heading}
                          </h4>
                        </>
                      )}
                      <p className="policy-newpara"> {info.description}</p>
                      <p className="policy-newpara">{info.description1}</p>
                      <p className="policy-newpara">{info.description2}</p>
                      <p className="policy-newpara">{info.description3}</p>
                      <p className="policy-newpara">{info.description4}</p>
                      <p className="policy-newpara">{info.description5}</p>
                      <p className="policy-newpara">{info.description6}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Policy;
