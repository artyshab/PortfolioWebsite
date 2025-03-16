import { useState, useEffect, useRef } from "react";
import profileImg from "../assets/profile-image.jpg";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function PersonalDetails({ activeSection }) {
  return (
    <div className="details-container">
      <div className="personal-details">
        <img src={profileImg} alt="Profile Pic" />
        <p id="name">Arti Shabani</p>
        <p id="job-title">Front End Engineer</p>
        <p id="description">
          Passionate about building intuitive and responsive web applications.
        </p>
        <div className="tags">
          <p id="about" className={activeSection === "about" ? "active" : ""}>
            About
          </p>
          <p
            id="experience"
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </p>
          <p
            id="projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </p>
        </div>
        <div className="socials">
        <a href="https://github.com/artyshab" target="_blank" rel="noopener noreferrer">
        <IoLogoGithub />
        </a>
        <a href="https://www.linkedin.com/in/arti-shabani-80a359197" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
        </div>
      </div>
    </div>
  );
}
