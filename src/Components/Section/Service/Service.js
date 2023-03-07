import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";

import "./Service.css";

const Service = ({ item }) => {
  return (
    <Col lg={4}>
      <div className="single-service text-center mb-4">
        <div className="service-img">
          <img src={item.img} alt="" className="w-100" />
        </div>
        <div className="service-text">
          <h3>{item.name}</h3>
        </div>

        <div className="service-detail">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Button variant="secondary" className="btn-about">
            Book now
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default Service;
