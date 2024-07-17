import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImg from "../assets/img/bannerImg.svg";
import styles from "./HomeBanner.module.css";

export default function HomeBanner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Programmer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className={styles.banner}>
      <Container>
        <Row className={styles.textCenter}>
          <Col xs={12} md={6} xl={7}>
            <span className={styles.tagline}>Welcome To My Portfolio</span>
            <h1>
              {`Hi. I'm Abdullah Al Masrur`} <br></br>
              <span className={styles.wrap}>{text}</span>
            </h1>
            <p>
              Highly motivated individual seeking for a challenging position in
              the computer science field. My strong command in Python, C, C++,
              PHP and with other languages has been proven by successfully
              designing, developing and implementing various state of the art
              projects. Eager to apply these gained knowledge and experience
              towards critical problem solving in an innovative way for the
              success of the organization.
            </p>
            <button>
              {`Let's Connect`} <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bannerImg} alt="Banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
