import React from "react";
import "./SectionHeading.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function H2(props) {
  return <h2 className="fw-bold H2">{props.children}</h2>;
}
