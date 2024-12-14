import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./../styles/GetInTouch.css";

const GetInTouch = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_igw7nqh", // Replace with your EmailJS Service ID
        "template_k9db33j", // Replace with your EmailJS Template ID
        formData,
        "NpjRYc9fH4OUZfntO" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setShowPopup(true); // Show popup on successful submission
          setFormData({ name: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="get-in-touch-section">
      <h2 className="get-in-touch-title">Get in Touch</h2>
      <form className="get-in-touch-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="send-message-button">
          Send Message
        </button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-icon">✅</div>
            <p>Your message has been sent successfully!</p>
            <button
              className="close-popup-button"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GetInTouch;
