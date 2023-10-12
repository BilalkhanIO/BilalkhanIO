import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import H2 from "./UI/SectionHeding";
import "./About.css";

export default function About() {
  const [show, setShow] = useState(false);
  return (
    <section id="about" >
      <Container className=" my-5">
        <H2>ABOUT</H2>

        <p className="mx-3 ">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est
        </p>
        {show && (
          <p className="mx-3 ">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
            <br></br>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est
          </p>
        )}

        <div class="d-flex justify-content-end">
          {!show && (
            <Button
              onClick={() => {
                setShow(true);
              }}
              size="sm"
              variant="outline-dark"
            >
              LEARN MORE
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
