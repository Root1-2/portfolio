import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./NavigationBar.module.css";

// import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export default function NavigationBar() {
  // const [activeLink, setActiveLink] = useState("home");
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <NavLink to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/skills" className="nav-link navbar-link">
              <span className={styles.span}>Skills</span>
            </NavLink>
            <NavLink to="/projects" className="nav-link navbar-link">
              <span className={styles.span}>Project</span>
            </NavLink>
            <NavLink to="/projects/project" className="nav-link navbar-link">
              <span className={styles.span}>Individuals</span>
            </NavLink>
          </Nav>
          <span className="navbar-test">
            <div className={styles.socialIcon}>
              <a
                className={styles.a}
                href="https://www.linkedin.com/in/abdullah-al-masrur-839000222/"
                target="_blank"
              >
                <img src={navIcon1} alt="Facebook"></img>
              </a>
              <a
                className={styles.a}
                href="https://github.com/Root1-2"
                target="_blank"
              >
                <img src={navIcon2} alt=""></img>
              </a>
              {/* <a href="#" target="_blank">
                <img src={navIcon3} alt=""></img>
              </a> */}
            </div>
          </span>
          <button className={styles.vvd} onClick={() => {}}>
            <span>Lets Connect</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
