import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import About1 from "../../../images/about1.jpg";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link, NavLink } from "react-router-dom";
import "./AboutContent.css";
const AboutContent = () => {
  return (
    <section className="about-area">
      <Container>
        <Row>
          <SectionHeading heading="About Us" />
        </Row>
        <Row className="align-items-center mt-4">
          <Col lg={6}>
            <div className="about-img">
              <img src={About1} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-text text-white">
              <h3>ABOUT US</h3>
              <h2>Provide best Business Solutions</h2>
              <p>
                We always try to provide the best Business Solutions for Clinets
                to grow up their Business very sharply and smoothly. We
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>

              <NavLink as={Link} to="/about" className="btn-about">
                More details <i className="fa-solid fa-angles-right"></i>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutContent;
