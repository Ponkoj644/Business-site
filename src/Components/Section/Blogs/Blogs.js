import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./Blogs.css"

const Blogs = ({ item }) => {
  return (
    <>
      <Col lg={4}>
        <div className="single-blog mb-5">
          <div className="blog-img">
            <img src={item.img} alt="" className="w-100" />
          </div>
          <div className="blog-text">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="blog-meta">
              <h4>By: {item.author}</h4>
              <h5>{item.date}</h5>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Blogs;
