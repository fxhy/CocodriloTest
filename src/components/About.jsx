import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/styles.css";

function About() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              Welcome to Cocodilo, your dedicated companion on the journey to
              mastering the Diplomas de Español como Lengua Extranjera (DELE)
              exams! Our mission is to empower language learners like you with
              the tools and resources needed to excel in these internationally
              recognized Spanish proficiency tests.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              While Cocodilo is a valuable tool for exam preparation, it is not
              a replacement for a comprehensive language course. We recommend
              supplementing your preparation with formal language instruction to
              ensure a well-rounded learning experience. Prepare with
              confidence, knowing that you have a reliable ally in Cocodilo.
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="lead">Start your journey towards DELE success today!</p>
        </div>
      </div>
    </section>
  );
}

export default About;
