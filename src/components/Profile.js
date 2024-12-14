import React from "react";
import "./../styles/Profile.css";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile">
      <img
        src="/Dhaval_Vibhakar_Headshot.jpg"
        alt="Profile"
        className="profile-image"
      />
      <h2>
        Dhaval <br />
        <span className="last-name">Vibhakar</span>
      </h2>
      <h4>Data Scientist</h4>
      <div className="social-links">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="GitHub Profile"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <FaMapMarkerAlt size={16} className="contact-icon" /> Jersey City
        </div>
        <div className="contact-item">
          <FaEnvelope size={16} className="contact-icon" /> 
          <a href="mailto:vibhakar_dhaval@yahoo.com" className="email-link">
            vibhakar_dhaval@yahoo.com
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt size={16} className="contact-icon" /> 551-312-6290
        </div>
      </div>
    </div>
  );
};

export default Profile;
