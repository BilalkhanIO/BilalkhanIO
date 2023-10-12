import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiArrowToTop } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-black">
      <Container className="p-2">
        <Row>
          <Col className="text-center">
            <a
              href="#header"
              variant="underline"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-semibold text"
            >
              BACK TO TOP{" "}
              <span>
                <BiArrowToTop />
              </span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center p-2">
            {" "}
            <a
              href="https://facebook.com/bilalkhanio"
              className=" mx-2 text-light"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/bilalkhanio"
              className=" mx-2 text-light"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/bilalkhanio"
              className=" mx-2 text-light"
            >
              <FaTwitter />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className=" text-center text-secondary p-2"><p >Copyright | 2023</p></Col>
        </Row>
      </Container>
    </section>
  );
}
