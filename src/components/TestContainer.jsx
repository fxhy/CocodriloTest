import Button from "react-bootstrap/Button";
import Instructions from "../components/Instruction";
import TalkToMe from "../components/TalkToMe/TalkToMe";
import Questions from "../components/Questions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Eyeglasses } from "react-bootstrap-icons";

import "../assets/scss/styles.scss";

function TestContainer() {
  const red = "#ff7373";
  const redCom = "#52b7b7";
  const turquoise = "#39a3b7";
  const turCom = "#b74d39";
  const khaki = "#e0cebe";
  const khakiCom = "#2a4f5b";

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <TalkToMe />
        {/* <Warning /> */}
        <div>
          <Instructions />
        </div>
        <div>
          <Questions />
        </div>
      </div>
    </section>
  );
  <div name="deleteMe">
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
            >
              <Eyeglasses />
            </MDBBtn>
          </div>
          {/* <div
                className="align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
              </div> */}
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
            data-bs-target="#portfolioModal3"
          >
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              className="img-fluid"
              src="src/assets/img/portfolio/circus.png"
              alt="..."
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal4"
          >
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              className="img-fluid"
              src="src/assets/img/portfolio/game.png"
              alt="..."
            />
          </div>
        </Col>
        <Col>
          <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal5"
          >
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              className="img-fluid"
              src="src/assets/img/portfolio/safe.png"
              alt="..."
            />
          </div>
        </Col>
        <Col>
          <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal6"
          >
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              className="img-fluid"
              src="src/assets/img/portfolio/submarine.png"
              alt="..."
            />
          </div>
        </Col>
      </Row>
    </Container>
  </div>;
}

export default TestContainer;
