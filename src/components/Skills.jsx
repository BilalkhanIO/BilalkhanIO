import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandBootstrap,
  TbBrandFigma,
} from "react-icons/tb";
import H2 from "./UI/SectionHeding";
import "./Skills.css";

const usingSkillsData = [
  {
    id: "1",
    name: "HTML5",
    icon: TbBrandHtml5,
  },
  {
    id: "2",
    name: "CSS3",
    icon: TbBrandCss3,
  },
  {
    id: "3",
    name: "JAVASCRIPT",
    icon: TbBrandJavascript,
  },
  {
    id: "4",
    name: "REACT",
    icon: TbBrandReact,
  },
  {
    id: "5",
    name: "BOOTSTRAP",
    icon: TbBrandBootstrap,
  },
  {
    id: "6",
    name: "FIGMA",
    icon: TbBrandFigma,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="my-5">
      <Container>
        <H2>SKILLS</H2>
        <h3 className="m-3 text-secondary">USING </h3>
        <Row className="justify-content-center gap-4">
          {usingSkillsData.map((skill) => {
            return (
              <Col
                key={skill.id}
                lg="3"
                md="4"
                sm="4"
                xs="6"
                className="justify-content-center"
              >
                <div className="text-center">
                  <skill.icon className="skill-icon" />
                </div>
                <h5 className="fs-4 text-center">{skill.name}</h5>
              </Col>
            );
          })}
        </Row>
        <h3 className="m-3 text-secondary">LEARING</h3>
      </Container>
    </section>
  );
}
