import { Container, Navbar, Nav } from "react-bootstrap";
// import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export default function NavigationBar() {
  // const [activeLink, setActiveLink] = useState("home");
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </Nav>
          <span className="navbar-test">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abdullah-al-masrur-839000222/"
                target="_blank"
              >
                <img src={navIcon1} alt="Facebook"></img>
              </a>
              <a
                href="https://www.facebook.com/abdullahal.masrur.52/"
                target="_blank"
              >
                <img src={navIcon2} alt=""></img>
              </a>
              {/* <a href="#" target="_blank">
                <img src={navIcon3} alt=""></img>
              </a> */}
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
