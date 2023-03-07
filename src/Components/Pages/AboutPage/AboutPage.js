import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import AboutImg from "../../../images/about-img.jpg";

import Team from "../../Section/Team/Team";

import "./AboutPage.css";
const AboutPage = () => {
  // Fetch Data //
  const [teams, setTeam] = useState([]);
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  return (
    <section className="about-page">
      <div className="page-header">
        <Container>
          <Row className="header-content ">
            <Col lg={{ span: 10, offset: 1 }}>
              <div className="header-content-inner">
                <h2>KNOW ABOUT OUR ULTIMATE TEAM</h2>
                <p>
                  We always try to provide the best Business Solutions for
                  Clients to grow up their Business very sharply and smoothly.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="aboutPage-text">
        <Container>
          <Row>
            <Col lg={7} md={6} order={1}>
              <div className="about-content mb-5">
                <h6>Our Team</h6>
                <h2>
                  Meet Our <br /> Expart Member
                </h2>
                <p>
                  <b>We</b> always try to provide the best Business Solutions
                  for Clinets to grow up their Business very sharply and
                  smoothly. We voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>
              </div>
            </Col>

            <Col lg={5} md={6}>
              <div className="about-image">
                <img src={AboutImg} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="team-member">
        <Container>
          <Row>
            {teams.map((item) => (
              <Team key={item.id} item={item} />
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default AboutPage;
