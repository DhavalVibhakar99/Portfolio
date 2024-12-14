import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Profile from "./components/Profile";
import About from "./pages/About"; // Import About section
import Services from "./pages/Services"; // Import Services section
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Testimonials from "./pages/Testimonials";
import GetInTouch from "./pages/GetInTouch";



const App = () => {
  return (
    <div className="app">
      {/* Navigation Section */}
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
        <img src="wave2.png" alt="Wave" className="wave-image" />
      </div>

      {/* White Page */}
      <div className="white-page">
        {/* Sidebar */}
        <aside className="sidebar">
        <div className="sidebar-content">
    <Profile /> {/* Your sticky content */}
  </div>
        </aside>

        {/* Main Content */}
        <div className="main-content">
        <About /> {/* Render About section */}
        <Services /> {/* Render Services section */}
        <Projects /> {/* Render Projects section */}
        <Skills /> {/* Render Skills section */}
        <Experience /> {/* Render Experience section */}
       <Education />
       <Testimonials />
      <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default App;
