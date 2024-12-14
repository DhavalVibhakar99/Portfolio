import React from "react";
import "./../styles/Project.css";

const Projects = () => {
  const projects = [
    {
      title: "SpaceX Launch Prediction and Simulation",
      description: "Simulating Falcon 9 Rocket Trajectories with Environmental and Mission-Based Insights",
      image: "/Starlink.webp",
      link: "https://github.com/DhavalVibhakar99/SpaceX_CapeStone_Project",
    },
    {
      title: "PWC Virtual Case Study Dashboard",
      description: "Interactive Power BI Dashboard for Call Center and Customer Insights",
      image: "/PWX_Virtual_Case.webp",
      link: "https://github.com/DhavalVibhakar99/PWC_Virtual_Case",
    },
    {
      title: "Aspect-Based Sentiment Analysis on CNN Stock Data",
      description: "Predicting Market Trends with CNN: A Deep Learning Approach to Stock Analysis",
      image: "/StockMarket.webp",
      link: "https://github.com/DhavalVibhakar99/Stock-Analysis-using-Sentimental-Analysis-and-Web-Scraping",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => window.open(project.link, "_blank")}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
