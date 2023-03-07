import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import RegImg from "../../../images/reg-img.jpg";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

import "./Reg.css";
import GoogleSignUp from "../../Section/GoogleSignUp/GoogleSignUp";

const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const messageDiv = document.getElementById("message-div");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    messageDiv.innerHTML = error.message;
    messageDiv.style.color = "#ed4f4f";
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
    messageDiv.style.color = "#979fe7";
  }
  if (user) {
    messageDiv.innerHTML = "Congratulations! Registration Completed";
    messageDiv.style.color = "#0b7c1c";
  }

  return (
    <section className="reg-area">
      <Container>
        <h2 className="text-center">New User Registration</h2>
        <Row className="py-3">
          <Col lg={6} className=" text-start reg-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div id="message-div"></div>

            <p>
              Already Have an Account?
              <NavLink to={"/signin"} className="nav-link reg-link">
                Sign In Here
              </NavLink>
            </p>
            <Button
              variant="primary"
              type="submit"
              onClick={() => createUserWithEmailAndPassword(email, password)}
            >
              Submit
            </Button>
            <span className="or-style">OR</span>
            <GoogleSignUp />
            {/* <FacebookSignUp /> */}
            {/* <GithubSignUp /> */}
          </Col>

          <Col lg={6}>
            <div className="img-div">
              <img src={RegImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reg;
