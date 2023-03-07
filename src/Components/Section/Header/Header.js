import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import LogoImage from "../../../images/logo1.png";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  // Sign Out //
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className="header">
      <Navbar bg="dark" expand="lg" className="py-3" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Logo image={LogoImage} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link active">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>

              {user ? (
                <Button className="nav-link" onClick={handleSignOut}>
                  Log Out
                </Button>
              ) : (
                <NavLink to="/signin" className="nav-link btn">
                  Sign In
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
