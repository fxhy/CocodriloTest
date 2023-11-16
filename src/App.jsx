import React, { useState, useRef, useEffect } from "react";
import Instructions from "./components/Instruction";
import TalkToMe from "./components/TalkToMe";
import Questions from "./components/Questions";
import Timer from "./components/Timer";

function App() {
  var single = 0;

  function Singleton() {
    if (single === 0) {
      single++;
      return (
        <div>
          <TalkToMe />
        </div>
      );
    }
  }

  return (
    <>
      <TalkToMe />

      <div>
        <h1>
          Countdown: <Timer />
        </h1>
        <Instructions />
      </div>
      <div>
        <h1>PREGUNTAS</h1>

        <ul className="questionList">
          {Questions.map((q) => {
            return (
              <li key={q.id}>
                <h4>
                  {q.id}. {q.text}
                </h4>
                {q.options.map((option) => {
                  return (
                    <div>
                      <input
                        type="radio"
                        value={option.isCorrect}
                        name={q.id}
                      />{" "}
                      {option.text}
                    </div>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
