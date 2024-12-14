import React from "react";
import "./../styles/Skills.css";

const skills = [
  { name: "Data Pipeline Development", proficiency: 95 },
  { name: "Database Management (MariaDB, SQL)", proficiency: 92 },
  { name: "Cloud Platforms (AWS, GCP)", proficiency: 88 },
  { name: "Python & R for Data Science", proficiency: 96 },
  { name: "Visualization Tools (Power BI, Tableau)", proficiency: 94 },
  { name: "Predictive Modeling & Machine Learning", proficiency: 89 },
  { name: "Regulatory Compliance Reporting", proficiency: 87 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      {/* Skills Title Outside the Card */}
      <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
      </div>

      {/* Skills Container */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="progress-container">
              <div
                className="progress"
                style={{ width: `${skill.proficiency}%` }}
              >
                <span className="progress-percentage">
                  {skill.proficiency}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
