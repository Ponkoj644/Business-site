import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./Team.css";

const Team = ({ item }) => {
  return (
    <>
      <Col lg={3} className="single-member mb-4">
        <div className="member-img">
          <img src={item.img} alt="" className="w-100" />
        </div>
        <div className="member-detail text-center">
          <h3>{item.name}</h3>
          <h4>{item.designation}</h4>
        </div>
      </Col>
    </>
  );
};

export default Team;
