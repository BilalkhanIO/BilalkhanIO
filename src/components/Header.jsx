import React from "react";

import { Navbar, Nav} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

export default function Header() {
  return (
    <Navbar
      expand="md"
      collapseOnSelect
      fixed="top"
      bg="dark"
      data-bs-theme="dark"
    >
      <Navbar.Toggle
        variant="dark"
        aria-controls="responsive-navbar"
        className="m-2  justify-content-end"
      />
      <Navbar.Collapse placement="end" className="justify-content-end">
        
          <Nav
        
            variant="underline"
            defaultActiveKey="home"
            className="fw-semibold mx-5"
          >
            <Nav.Item>
              <Nav.Link className="link-light" href="#home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link-light" href="#about">
                About me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link-light" href="#skills">
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link-light" href="#contact">
                Contact me
              </Nav.Link>
            </Nav.Item>
          </Nav>
  
      </Navbar.Collapse>
    </Navbar>
  );
}
