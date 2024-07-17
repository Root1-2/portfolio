import styles from "./Skill.module.css";
import PropTypes from "prop-types";

export default function Skill({ path, title }) {
  return (
    <div className={styles.skill}>
      <img src={path} alt="skill" />
      <h5>{title}</h5>
    </div>
  );
}

// Define prop types
Skill.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
