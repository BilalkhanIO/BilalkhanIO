import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import H2 from "./UI/SectionHeding";

export default function ContactForm() {
  return (
    <section id="contact" className="my-5">
      <Container>
        <H2>CONTACT ME</H2>
        <Form className="my-3 mx-5 fw-semibold">
          <Form.Group className="mb-3" controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required placeholder="name@example.com" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone-number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter your number" />
            <Form.Text className="text-muted">
              We'll never share your number with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="massage">
            <Form.Label>Massage</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your massage"
            />
          </Form.Group>
          <Container className="text-center">
            <Button
              type="submit"
              size="md"
              variant="outline-dark"
              className="fw-semibold my-3"
            >
              SUBMIT
            </Button>
          </Container>
        </Form>
      </Container>
    </section>
  );
}
