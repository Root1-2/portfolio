import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./ProjectItem.css";

export default function ProjectItem({ title, description, imgUrl, gitUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project" />
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  gitUrl: PropTypes.string,
};

ProjectItem.defaultProps = {
  description: "No description provided",
  gitUrl: "",
};
