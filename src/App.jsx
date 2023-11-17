import React, { useState, useRef, useEffect } from "react";
import Instructions from "./components/Instruction";
import TalkToMe from "./components/TalkToMe";
import Questions from "./components/Questions";
import Timer from "./components/Timer";
import Warning from "./components/Warning";

function App() {
  return (
    <>
      <TalkToMe />
      {/* <Warning /> */}
      <div>
        <Instructions />
      </div>
      <div>
        <Questions />
      </div>
    </>
  );
}

export default App;
