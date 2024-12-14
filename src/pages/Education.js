import React from "react";
import "./../styles/Education.css";

const education = [
  {
    institution: "Pace University, New York, NY",
    degree: "Master of Science in Information Systems",
    specialization: "Specialization: Data Analytics",
    duration: "September 2021 – May 2023",
  },
  {
    institution: "University Of Mumbai, Maharashtra, India",
    degree: "Bachelor of Engineering in Information Technology",
    duration: "June 2017 – May 2021",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Education Title */}
      <div className="education-header">
        <h2 className="education-title">Education</h2>
      </div>

      {/* Education Content */}
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            {edu.specialization && (
              <p className="education-specialization">{edu.specialization}</p>
            )}
            <p className="education-duration">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
