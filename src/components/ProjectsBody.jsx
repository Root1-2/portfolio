import { Link } from "react-router-dom";

function Projects() {
  const id = 5;
  return (
    <div style={{ padding: "160px 0 150px 0", textAlign: "center" }}>
      <h1>Projects</h1>
      <Link to={`/project/${id}`}>Project 1</Link>
    </div>
  );
}

export default Projects;
