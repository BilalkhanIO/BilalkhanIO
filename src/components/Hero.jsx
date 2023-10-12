import React from "react";
import "./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Image from "./images/BilalAhmad.png";

export default function Hero() {
  return (
    <section id="home">
      <div className="main-section">
        <section className="m-auto">
          <Container className="m-auto">
            <p className="fw-semibold fs-3 ">HI, I am</p>
            <h1 className="fs-1 fw-bold mb-0">BIlAL AHMAD</h1>
            <p className="fw-medium">Front-end Developer</p>
            <Container className="mt-4">
              <a
                href="https://facebook.com/bilalkhanio"
                className="  mx-2 text-black"
              >
                <FiGithub className="icon-size"/>
              </a>
              <a
                href="https://instagram.com/bilalkhanio"
                className=" mx-2 text-black"
              >
                <FiLinkedin className="icon-size" />
              </a>
              <a
                href="https://twitter.com/bilalkhanio"
                className=" mx-2 text-black"
              >
                <FiMail className="icon-size"/>
              </a>
            </Container>
          </Container>
        </section>

        <section className="black-background">
          <div className="image">
            <img src={Image} alt="Bilal Ahmad" />
          </div>
        </section>
      </div>
    </section>
  );
}
