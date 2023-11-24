import React, { useState, useRef, useEffect } from "react";
import Instructions from "../components/Instruction";
import TalkToMe from "../components/TalkToMe/TalkToMe";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Timer from "./Timer";

function Questions({ questionType, questionSubType, timerStart }) {
  var colNum = 0;
  const dynamicQuestions = [
    {
      id: 25,
      text: "En la audición, la empresaria Pilar Almagro cuenta que...",
      options: [
        {
          id: "a",
          text: "a) empezó a escalar hace 18 años.",
          isCorrect: true,
        },
        {
          id: "b",
          text: "b) conoció a su marido trabajando.",
          isCorrect: false,
        },
        {
          id: "c",
          text: "c) montó su empresa con su pareja.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 26,
      text: "Pilar Almagro dice que la empresa Vertisub...",
      options: [
        {
          id: "a",
          text: "a) realiza trabajos en lugares de difícil acceso.",
          isCorrect: true,
        },
        {
          id: "b",
          text: "b) produce y vende material de rescate.",
          isCorrect: false,
        },
        {
          id: "c",
          text: "c) se dedica a la prevención de riesgos laborales.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 27,
      text: "Pilar Almagro dice que Vertisub en sus comienzos operaba...",
      options: [
        { id: "a", text: "a) en un entorno urbano.", isCorrect: false },
        { id: "b", text: "b) fuera de España.", isCorrect: false },
        {
          id: "c",
          text: "c) en las obras de la Sagrada Familia.",
          isCorrect: true,
        },
      ],
    },
    {
      id: 28,
      text: "Según la audición, la empresa Vertisub también se dedica a...",
      options: [
        {
          id: "a",
          text: "a) fabricar material de escalada y espeleología.",
          isCorrect: false,
        },
        {
          id: "b",
          text: "b) desarrollar sistemas de seguridad.",
          isCorrect: true,
        },
        {
          id: "c",
          text: "c) vender material especializado.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 29,
      text: "La empresaria Pilar Almagro dice que los empleados de Vertisub...",
      options: [
        { id: "a", text: "a) no llegan a 200.", isCorrect: false },
        { id: "b", text: "b) han hecho cursos de escalada.", isCorrect: false },
        { id: "c", text: "c) son personas prudentes.", isCorrect: true },
      ],
    },
    {
      id: 30,
      text: "Pilar Almagro dice que el éxito de su empresa se debe a...",
      options: [
        { id: "a", text: "a) la formación de su plantilla.", isCorrect: false },
        { id: "b", text: "b) saber cómo crecer.", isCorrect: true },
        {
          id: "c",
          text: "c) una estrategia de diversificación comercial.",
          isCorrect: true,
        },
      ],
    },
  ];

  const [isTimerFinished, setTimerFinished] = useState(false);

  const buttonRef = useRef(null);
  const programmaticClick = () => {
    if (buttonRef.current) {
      // Check if the ref is defined before attempting to click
      buttonRef.current.click();
    }
  };
  const initialFormData = {};
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
      quest.options.forEach((opt) => {
        if (opt.id === gues) {
          if (opt.isCorrect) {
            score++;
          }
        }
      });
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
              <Instructions />
            </Col>
          </Row>
          <Row className="py-3">
            <Col sm lg="2" className="py-3">
              <TalkToMe />
              {/* <Warning /> */}
            </Col>
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
                PREGUNTAS
              </h3>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
              </div>
              <Row>
                {dynamicQuestions.map((question) => {
                  return (
                    <Col lg={6} key={question.id} className="py-3">
                      <li key={question.id} className="list-group">
                        <h4>
                          {question.id}. {question.text}
                        </h4>
                        {question.options.map((option) => {
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
                                {option.text}
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
