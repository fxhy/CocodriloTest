import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              1234 Hop Av.
              <br />
              The Island, BOO 12345
            </p>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>

          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About Cocodrilo</h4>
            <p className="lead mb-0">
              Cocodrilo is a welcome excuse to avoid doing work that gets paid.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
