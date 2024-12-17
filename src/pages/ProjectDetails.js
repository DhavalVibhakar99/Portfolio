import React from "react";
import { useParams } from "react-router-dom";
import "./../styles/ProjectDetails.css";

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-page">
      <div className="navigation-container">
        <nav className="navbar">
          <ul className="navbar-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Get in Touch</a></li>
          </ul>
        </nav>
        <img src="curve.png" alt="Curve" className="curve-image" />
      </div>

      <div className="project-details-content">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
