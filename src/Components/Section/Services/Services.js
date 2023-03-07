import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Services.css";
import Service from "../Service/Service";

const Services = () => {
  // Fetch the json file using "useState" & "useEffect"//

  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section className="services-area text-white">
      <Container>
        <Row className=" justify-content-center ">
          <SectionHeading heading="Our Services" />
        </Row>

        <Row className="mt-4">
          {services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
