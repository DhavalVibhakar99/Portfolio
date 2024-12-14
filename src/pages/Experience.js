import React from "react";
import "./../styles/Experience.css";

const experiences = [
  {
    role: "Software Analyst",
    company: "Dual Fuel Corp, Bronx, NY",
    duration: "July 2023 – Present",
    description: [
      "Designed automated energy dashboards in SkySpark using Axxon, integrating ConEd data via API to track usage, billing, and savings, improving cost tracking accuracy by 35%.",
      "Streamlined temperature sensor tracking by migrating data from MS Excel to SkySpark using SQL and custom views, enhancing team collaboration.",
      "Integrated a SkySpark dashboard with Green Button Connect (GBC) data from Con Edison, improving billing accuracy and increasing transparency on energy savings by 56%.",
      "Led a team of UX/UI designers and developers, redesigning a user-centered interface that increased engagement.",
      "Implemented a Web Application Firewall, reducing vulnerabilities by 45% and enhancing customer data security.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "NYS Offices of General Services, Albany, NY",
    duration: "June 2022 – September 2022",
    description: [
      "Optimized ETL processes, eliminating bottlenecks to save 15 hours per week on reporting and boost system efficiency.",
      "Designed a Customer Service (CSM) dashboard in Tableau to monitor service metrics, enhancing reporting efficiency by 10%.",
      "Optimized data flow in SQL Server Integration Server (SSIS) by implementing stored procedures and user-defined queries.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Insight Business Machine Pvt. Ltd, Mumbai, India",
    duration: "March 2020 – April 2021",
    description: [
      "Enhanced ETL framework using Python, boosting efficiency by 25%.",
      "Developed Qlik Sense dashboard, improving sales performance analysis and boosting productivity by 20%.",
      "Conducted analysis in EnjayIT CRM to identify attrition factors, supporting strategies that reduced churn by 20%.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <h2 className="experience-title">Experience</h2>
      </div>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3 className="experience-role">{exp.role}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <p className="experience-duration">{exp.duration}</p>
            <ul className="experience-description">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
