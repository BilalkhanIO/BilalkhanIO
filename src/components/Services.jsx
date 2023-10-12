import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdDesignServices, MdOutlineDeveloperMode } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import H2 from "./UI/SectionHeding";
import "./About.css";

const servicesData = [
  {
    id: "1",
    icon: MdDesignServices,
    heading: "DESIGN",
    Description:
      " can design the site based on your needs and suggestions.I canalso design the site from scratch and consult you during the job.",
  },
  {
    id: "2",
    icon: MdOutlineDeveloperMode,
    heading: "DEVELOPMENT",
    Description:
      " I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job. design the site based on your needs and suggestions.I canalso design the site from scratch and consult you during the job.",
  },
  {
    id: "3",
    icon: GrVmMaintenance,
    heading: "MAINTENANCE",
    Description:
      " I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job. design the site based on your needs and suggestions.I canalso design the site from scratch and consult you during the job.",
  },
];

export default function Services() {
  return (
    <section>
      <Container>
        <H2>SERVICES</H2>
        <Row className="justify-content-md-center gap-4 ">
          {servicesData.map((services) => {
            return (
              <Col
                key={services.id}
                md="5"
                lg="5"
                className=" p-2 bg-secondary-subtle"
              >
                <i>
                  <services.icon className="icon" />
                </i>
                <div className="body">
                  <h3 className="fs-4">{services.heading}</h3>
                  <p>{services.Description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
