import "./assets/scss/styles.scss";
import React, { useState, useRef, useEffect } from "react";
import smile from "./assets/img/avataaars.svg";
import TestContainer from "./components/TestContainer";
import About from "./components/About";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import Warning from "./components/Warning";
import FakeNavbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactInfo from "./components/ContactInfo";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <FakeNavbar />
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img className="masthead-avatar mb-5" src={smile} alt="..." />

          <h1 className="masthead-heading text-uppercase mb-0">
            COCODRILO TEST
          </h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon={faStar} />{" "}
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-light mb-0">
            Comprensión de lectura - Comprensión auditiva - Expresión e
            interacción escritas
          </p>
        </div>
      </header>
      <TestContainer />
      <About />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default App;
