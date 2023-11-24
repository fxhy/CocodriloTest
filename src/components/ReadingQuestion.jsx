import React, { useState, useRef, useEffect } from "react";
import Instructions from "../components/Instruction";
import TalkToMe from "../components/TalkToMe/TalkToMe";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Timer from "./Timer";

function Questions({ questionType, questionSubType, timerStart }) {
  var colNum = 0;
  const textToRead =
    "El ejercicio físico no solo sirve para sacar músculo, parecer saludables y guapos, y ponernos de buen humor. También nos ayuda a concentrarnos mejor y aumentar nuestra productividad. Así lo demuestra el estudio El efecto del ejercicio físico en la productividad laboral y el bienestar, que analiza la buena relación entre la actividad laboral y la práctica de un programa controlado de ejercicio físico. En el estudio participaron 92 empleados de una empresa de consultoría que cuenta con 230 empleados en plantilla. \n Fue una experiencia divertida en la que se mezclaban varias cosas: el compañerismo, competitividad y la extraña sensación de poder realizar esta actividad como parte del trabajo», recuerda Eduardo Loyola, directivo de la consultoría Interface. Loyola fue uno de los conejillos de Indias del programa diseñado por Óscar de las Mozas, coautor del estudio. <<Entrenábamos fuera del horario laboral. Al principio, a algunos compañeros les resultó complicado (sentían vergüenza al verse con indumentaria deportiva), pero pronto nos encontramos trotando por el monte o por pistas de atletismo sin ningún problema. Creo que tener una hora de entrenamiento con los compañeros favorece el trabajo en equipo», dice Loyola.\n Los resultados de la investigación no aclaran, sin embargo, si es mejor que el entrenamiento se realice antes o después de la jornada laboral. De las Mozas explica que antes del trabajo, debido a la secreción de compuestos químicos cerebrales que desencadena la actividad física, se potencia la sensación de bienestar, se llega a la oficina más relajado y con mayor disposición. No obstante, muchas personas prefieren entrenar al salir del trabajo, porque así el ejercicio les funciona como una válvula de escape. Lo que queda fuera de toda duda es que después de al menos tres meses siguiendo un programa de actividad física, los resultados productivos de un adulto sano mejoran y la gente se muestra más dispuesta a colaborar por una meta común.\n Los beneficios más concretos observados fueron la mejora de la salud del equipo humano y la mayor facilidad para asumir las tareas de la vida cotidiana, ya impliquen fuerza física o trabajo intelectual. Asimismo, se constató una mayor resistencia en los momentos de tensión y un incremento de la satisfacción en el trabajo.\n El estudio también arroja otros datos que tienen que ver con los beneficios sobre el absentismo en el trabajo, pues se observó una disminución de casi un 30% en las bajas laborales de los empleados que participaron en esta experiencia, lo que apunta a la necesidad de que las empresas incentiven este tipo de programas en todos los niveles de su organigrama, ya que además de potenciar el compañerismo o la competitividad, los profesionales tienen la sensación de realizar esta actividad no como una posibilidad de evasión, sino como parte específica del propio trabajo.";

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
              <div>
                <textarea>{textToRead}</textarea>
              </div>
            </Container>
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
