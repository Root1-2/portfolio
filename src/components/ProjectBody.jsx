import { useParams } from "react-router-dom";
import styles from "./ProjectBody.module.css";

function ProjectBody() {
  const { projectID } = useParams();
  console.log({ projectID });

  return (
    <div
      className={styles.app}
      style={{ padding: "160px 0 150px 0", textAlign: "center" }}
    >
      <h4>
        Project ID: <span>{projectID}</span>
      </h4>
    </div>
  );
}

export default ProjectBody;
