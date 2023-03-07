import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import LogoImage from "../../../images/logo.png";
import Logo from "../Logo/Logo";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer-area">
      <Container>
        <Row className="mt-3 footer-logo">
          {/* 1 col */}
          <Col lg={4} className="logo-area">
            <Link to="/">
              <Logo image={LogoImage} />
            </Link>
            <div className="footer-text">
              <div>
                <p>
                  We always try to provide the best Business Solutions for
                  Clients to grow up their Business sharply and smoothly.
                </p>
              </div>
              <div className="copyright">
                <p>
                  © 2023{" "}
                  <a
                    href="https://ponkoj644.github.io/my-portfolio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ponkoj Mondol
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
          </Col>

          {/* 2nd col */}
          <Col lg={2} className="ml-auto">
            <div className="footer-item ">
              <h3>information</h3>
              <div className="footer-item-list">
                <ul>
                  <li>
                    <a href="/">Our company</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                  <li>
                    <a href="/">Our services</a>
                  </li>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          {/* 3rd col */}
          <Col lg={2} className="ml-auto">
            <div className="footer-item ">
              <h3>social links</h3>
              <div className="footer-item-list">
                <ul>
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <a href="/">Dribbble</a>
                  </li>
                  <li>
                    <a href="/">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          {/* 4th col */}
          <Col lg={3} className="ml-auto">
            <div className="footer-item ">
              <h3>Contact Us</h3>
              <div className="footer-item-list">
                <address>
                  Mohakhali, Dhaka-1212, Bangladesh.
                  <br />
                  https://example.com
                  <br />
                  (+880) 1833 044436
                </address>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
