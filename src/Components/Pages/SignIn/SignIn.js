import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SignImg from "../../../images/SignIn-img.jpg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignIn.css";
import { useState } from "react";
import auth from "../../../firebase.init";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const messageDiv = document.getElementById("message-div");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    messageDiv.innerHTML = error.message;
    messageDiv.style.color = "#ed4f4f";
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
    messageDiv.style.color = "#979fe7";
  }
  if (user) {
    messageDiv.innerHTML = "Sign In Successful";
    messageDiv.style.color = "#0b7c1c";
  }
  return (
    <section className="reg-area">
      <Container>
        <h2>SignIn with your account </h2>
        <Row className="py-3  align-items-center ">
          <Col lg={6}>
            <div className="img-div">
              <img src={SignImg} alt="" />
            </div>
          </Col>
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
              New User?
              <NavLink to={"/reg"} className="nav-link reg-link">
                Registration Here
              </NavLink>
            </p>

            <Button
              variant="primary"
              type="submit"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              Sign In
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
