import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Blogs from "../../Section/Blogs/Blogs";
import "./BlogPage.css";

const BlogPage = () => {
  // Fetch Data //
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <section className="blog-page">
      <div className="page-header">
        <Container>
          <Row className="header-content ">
            <Col lg={{ span: 10, offset: 1 }}>
              <div className="header-content-inner">
                <h2>FROM OUR BLOG LATEST</h2>
                <p>
                  We always try to provide the best Business Solutions for
                  Clients to grow up their Business very sharply and smoothly.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="blog-area">
        <Container>
          <Row>
            {blogs.map((item) => (
              <Blogs key={item.id} item={item} />
            ))}

          </Row>
        </Container>
      </div>
    </section>
  );
};

export default BlogPage;
