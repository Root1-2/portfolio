import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import NexusLanding from "../assets/img/Project/NexusLandingPage.png";
import ForumiumLanding from "../assets/img/Project/ForumiumLandingPage.png";
import DummyLanding from "../assets/img/Project/DummyLandingPage.jpg";
import "./ProjectsBody.css";

export default function Projects() {
  const projects = [
    {
      title: "NexusHealth",
      description: "Medical Health Application",
      tools: "HTML, CSS+Bootstap, JavaScript, PHP",
      imgUrl: NexusLanding,
      gitUrl: "",
    },
    {
      title: "Forumium",
      description: "Forum Web Application",
      tools: "HTML, CSS+Bootstap, JavaScript, PHP",
      imgUrl: ForumiumLanding,
      gitUrl: "",
    },
    {
      title: "NexusHealth",
      description: "",
      tools: "",
      imgUrl: DummyLanding,
      gitUrl: "",
    },
    {
      title: "NexusHealth",
      description: "",
      ttols: "",
      imgUrl: DummyLanding,
      gitUrl: "",
    },
    {
      title: "NexusHealth",
      description: "",
      ttols: "",
      imgUrl: DummyLanding,
      gitUrl: "",
    },
    {
      title: "NexusHealth",
      description: "",
      ttols: "",
      imgUrl: DummyLanding,
      gitUrl: "",
    },
  ];

  return (
    <div style={{ paddingTop: "20px" }}>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>Description of the Projects</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  defaultActiveKey="/home"
                  className="flex-column"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectItem key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                  <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
