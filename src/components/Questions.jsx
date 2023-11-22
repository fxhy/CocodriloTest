import React, { useState, useRef, useEffect } from "react";

import Timer from "./Timer";

function Questions() {
  const dynamicQuestions = [
    {
      id: 25,
      text: "En la audición, la empresaria Pilar Almagro cuenta que...",
      options: [
        {
          id: "a",
          text: "a) empezó a escalar hace 18 años.",
          isCorrect: false,
        },
        {
          id: "b",
          text: "b) conoció a su marido trabajando.",
          isCorrect: false,
        },
        {
          id: "c",
          text: "c) montó su empresa con su pareja.",
          isCorrect: true,
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
          isCorrect: false,
        },
        {
          id: "b",
          text: "b) produce y vende material de rescate.",
          isCorrect: false,
        },
        {
          id: "c",
          text: "c) se dedica a la prevención de riesgos laborales.",
          isCorrect: true,
        },
      ],
    },
    {
      id: 27,
      text: "Pilar Almagro dice que Vertisub en sus comienzos operaba...",
      options: [
        { id: "a", text: "a) en un entorno urbano.", isCorrect: true },
        { id: "b", text: "b) fuera de España.", isCorrect: false },
        {
          id: "c",
          text: "c) en las obras de la Sagrada Familia.",
          isCorrect: false,
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
          isCorrect: true,
        },
        {
          id: "b",
          text: "b) desarrollar sistemas de seguridad.",
          isCorrect: false,
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
        { id: "b", text: "b) han hecho cursos de escalada.", isCorrect: true },
        { id: "c", text: "c) son personas prudentes.", isCorrect: false },
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
        <h1>
          <Timer onTimerFinish={programmaticClick} />
        </h1>
      </div>
      <div>
        <h1>PREGUNTAS</h1>
        <main>
          <form onSubmit={handleSubmit}>
            <ul className="questionList">
              {dynamicQuestions.map((question) => (
                <li key={question.id}>
                  <h4>
                    {question.id}. {question.text}
                  </h4>
                  {question.options.map((option) => (
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
                  ))}
                </li>
              ))}
            </ul>
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