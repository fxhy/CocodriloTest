import Button from "react-bootstrap/Button";
import AudioQuestion from "./AudioQuestion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useRef, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Eyeglasses } from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Subjects() {
  return (
    <>
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Subjects
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <Container>
          <Row>
            <Col
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: `${red}`,
                borderRadius: "8px",
              }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <MDBBtn
                  floating
                  className="rounded-circle w-auto h-50"
                  style={{ backgroundColor: `${redCom}`, border: "none" }}
                  onClick={() => setShowQuestion(!showQuestion)}
                >
                  {showQuestion ? "Hide message" : "Show message"}
                  <Eyeglasses />
                </MDBBtn>
                {showQuestion ? <AudioQuestion /> : null}
              </div>
            </Col>
            <Col>
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="src/assets/img/portfolio/cake.png"
                  alt="..."
                />
              </div>
            </Col>
            <Col>
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="src/assets/img/portfolio/cake.png"
                  alt="..."
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Subjects;
