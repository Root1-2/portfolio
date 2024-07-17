import { Col, Container, Row } from "react-bootstrap";
import styles from "./SkillBar.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skill from "./Skill";
import reactImg from "../assets/img/react.svg";
import js from "../assets/img/js.svg";
import php from "../assets/img/PHP.svg";
import html from "../assets/img/HTML5.svg";
import css from "../assets/img/css.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import mysql from "../assets/img/mysql.svg";
import flutter from "../assets/img/flutter.svg";
import dart from "../assets/img/dart.svg";
import cplus from "../assets/img/c++.svg";
import python from "../assets/img/python.svg";

function SkillBar() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.body}>
      <h1>Languages</h1>
      <div className={styles.skillbar}>
        <Container>
          <Row>
            <Col>
              <div className={styles.skillBox}>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className={styles.skillSlider}
                >
                  <Skill path={reactImg} title="React" />
                  <Skill path={js} title="JavaScript" />
                  <Skill path={php} title="PHP" />
                  <Skill path={mysql} title="MYSQL" />
                  <Skill path={html} title="HTML" />
                  <Skill path={css} title="CSS" />
                  <Skill path={bootstrap} title="Bootstrap" />
                  <Skill path={flutter} title="Flutter" />
                  <Skill path={dart} title="Dart" />
                  <Skill path={cplus} title="C++" />
                  <Skill path={python} title="Python" />
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SkillBar;
