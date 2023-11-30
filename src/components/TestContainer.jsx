import Button from "react-bootstrap/Button";
import AudioQuestion from "./QuestionTypes/AudioQuestion";
import ReadingQuestion from "./QuestionTypes/ReadingQuestion";
import WritingQuestion from "./QuestionTypes/WritingQuestion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useRef, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import p1 from "../assets/img/portfolio/1.png";
import p2 from "../assets/img/portfolio/2.png";
import p3 from "../assets/img/portfolio/3.png";

import "../assets/scss/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function TestContainer() {
  // states
  const [questionType, setQuestionType] = useState(0);
  const [questionSubType, setQuestionSubType] = useState(0);
  const [showAudioQuestion, setShowAudioQuestion] = useState(false);
  const [showReadingQuestion, setShowReadingQuestion] = useState(false);
  const [showWritingQuestion, setShowWritingQuestion] = useState(false);

  // reference
  const timerStart = useRef();

  const red = "#ff7373";
  const redCom = "#52b7b7";
  const turquoise = "#39a3b7";
  const turCom = "#b74d39";
  const khaki = "#e0cebe";
  const khakiCom = "#2a4f5b";

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Subjects
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <Container>
          <Row>
            <Col md={4} className="p-3">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
                onClick={() => {
                  setShowAudioQuestion(!showAudioQuestion);
                  setShowReadingQuestion(false);
                  setShowWritingQuestion(false);
                }}
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="3x"
                      onClick={() => {
                        setShowAudioQuestion(!showAudioQuestion);
                        setShowReadingQuestion(false);
                        setShowWritingQuestion(false);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faHeadphones}
                    size="4x"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => {
                      setShowAudioQuestion(!showAudioQuestion);
                      setShowReadingQuestion(false);
                      setShowWritingQuestion(false);
                    }}
                  />

                  <img
                    className="img-fluid"
                    src={p2}
                    alt="..."
                    onClick={() => {
                      setShowAudioQuestion(!showAudioQuestion);
                      setShowReadingQuestion(false);
                      setShowWritingQuestion(false);
                    }}
                  />
                </div>
              </div>
              <div style={{ textalign: "center" }}>
                <h3>Comprensión auditiva</h3>
              </div>
            </Col>
            <Col md={4} className="p-3">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
                onClick={() => {
                  setShowReadingQuestion(!showReadingQuestion);
                  setShowAudioQuestion(false);
                  setShowWritingQuestion(false);
                }}
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon icon={faPlus} size="3x" />
                  </div>
                </div>

                <FontAwesomeIcon
                  icon={faGlasses}
                  size="4x"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                <img className="img-fluid" src={p1} alt="..." />
              </div>
              <h3>Comprensión de lectura</h3>
            </Col>
            <Col md={4} className="p-3">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
                onClick={() => {
                  setShowWritingQuestion(!showWritingQuestion);
                  setShowReadingQuestion(false);
                  setShowAudioQuestion(false);
                }}
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon icon={faPlus} size="3x" />
                  </div>
                </div>

                <FontAwesomeIcon
                  icon={faFeather}
                  size="4x"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                <img className="img-fluid" src={p3} alt="..." />
              </div>
              <h3>expresión e interacción escritas</h3>
            </Col>
          </Row>
        </Container>
        {showAudioQuestion ? <AudioQuestion /> : null}
        {showReadingQuestion ? <ReadingQuestion /> : null}
        {showWritingQuestion ? <WritingQuestion /> : null}
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
