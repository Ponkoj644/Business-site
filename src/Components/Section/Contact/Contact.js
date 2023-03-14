import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import SocialLink from "../SocialLink/SocialLink";

const Contact = () => {
  return (
    <section className="contact-area text-white">
      <Container>
        <Row>
          <SectionHeading heading="Contact Us" />
        </Row>
        <Row className="mt-3">
          <Col lg={8} className="p-5 contact-form">
            <h3>Send us a Message</h3>
            <Form>
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Full Name" required />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  rows={5}
                  required
                />
              </Form.Group>
              <Button type="submit" className="ms-start">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={4} className="bg ">
            <div className="contact-info px-5">
              <h3>Contact Info</h3>
              <address>
                Mohakhali, Dhaka-1212, <br /> Bangladesh.
                <br />
                (+880) 1833-044436
              </address>
              <SocialLink LinkHeading="We are also In" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
