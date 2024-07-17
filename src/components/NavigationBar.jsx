import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={
                activeLink === "home" ? "active navbar-Link" : "navbar-Link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className={
                activeLink === "skills" ? "active navbar-Link" : "navbar-Link"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={
                activeLink === "project" ? "active navbar-Link" : "navbar-Link"
              }
            >
              Projects
            </NavLink>
          </Nav>
          <span className="navbar-test">
            <div className="social-icon">
              <a href="#">
                <img src={""} alt=""></img>
              </a>
              <a href="#">
                <img src={""} alt=""></img>
              </a>
              <a href="#">
                <img src={""} alt=""></img>
              </a>
            </div>
          </span>
          <button className="vvd" onClick={() => {}}>
            <span>Lets Connect</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
