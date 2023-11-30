import React, { useState, useRef, useEffect } from "react";
import Instructions from "../Instruction";
import JsonData from "../../assets/questions/lectura/Tarea4/1.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Timer from "../Timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Questions({ questionType, questionSubType, timerStart }) {
  var colNum = 0;

  const [isTimerFinished, setTimerFinished] = useState(false);

  const buttonRef = useRef(null);
  const programmaticClick = () => {
    if (buttonRef.current) {
      // Check if the ref is defined before attempting to click
      buttonRef.current.click();
    }
  };
  const initialFormData = {};
  var dynamicQuestions = JsonData.level.section.question;
  var textToRead = JsonData.level.section.passage;
  dynamicQuestions.forEach((question) => {
    initialFormData[question.id] = ""; // Initialize with empty values
  });
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    // Handle form input changes
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var score = 0;
    // Add your form submission logic here
    var test = dynamicQuestions[0].id;
    const que = Object.keys(formData);
    const ans = Object.values(formData);
    dynamicQuestions.forEach((quest) => {
      const findQuestion = (element) => element === quest.id.toString();
      var gues = ans[que.findIndex(findQuestion)];

      if (quest.correct === gues) {
        score++;
      }
    });
    alert(
      "Time is up! Your test score is: " + score + "/" + dynamicQuestions.length
    );
  };

  const handleSubmitForm = () => {
    // Trigger the form submission when the timer finishes
    handleSubmit();
  };

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                Instrucciones
              </h2>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="divider-custom-line"></div>
              </div>
              <div className="text-center ">
                {JsonData.level.section.prompt}
              </div>
            </Col>
          </Row>
          <Row className="py-3">
            <Col className="py-3">
              <h2 className="text-end ">
                <Timer onTimerFinish={programmaticClick} />
              </h2>
            </Col>
          </Row>
        </Container>

        <main>
          <form onSubmit={handleSubmit}>
            <Container fluid>
              <h3 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                {JsonData.level.section.headline}
              </h3>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <FontAwesomeIcon icon={faStar} />{" "}
                </div>
                <div className="divider-custom-line"></div>
              </div>
              <div className="text ">
                <p>{textToRead}</p>
              </div>
            </Container>
            <Container fluid>
              <h3 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                OPCIÓNES
              </h3>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <FontAwesomeIcon icon={faStar} />{" "}
                </div>
                <div className="divider-custom-line"></div>
              </div>
              <Row>
                {dynamicQuestions.map((question) => {
                  return (
                    <Col lg={2} key={question.id} className="py-3">
                      <li key={question.id} className="list-group">
                        <h4>
                          {question.id}. {question.text}
                        </h4>
                        {question.choices.map((option) => {
                          return (
                            <div>
                              <label key={option.id}>
                                <input
                                  type="radio"
                                  name={question.id}
                                  value={option.id}
                                  checked={formData[question.id] === option.id}
                                  onChange={handleChange}
                                />
                                {" " + option.id + "): " + option.text}
                              </label>
                            </div>
                          );
                        })}
                      </li>
                    </Col>
                  );
                })}
              </Row>
            </Container>
            {/* <ul className="questionList">{getQuestionTable()}</ul> */}
            <button type="submit" ref={buttonRef}>
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Questions;
