import React from "react";
import Value from "./terms.json";
import { Col, Container, Row } from "react-bootstrap";
import "../../../style/componentStyle/privacyPage/PolicyStyle.css";
function Terms() {
  return (
    <Container className="pt-2 pb-3 ">
      <Row>
        <Col className="pl-2 pr-3">
          {Value.map((item, index) => {
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
          <h2 className="term-para">
            By using Pulse Play, you agree to abide by these Terms and
            Conditions.
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Terms;
