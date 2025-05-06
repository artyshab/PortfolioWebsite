import { useState, useEffect, useRef } from "react";
import profileImg from "../assets/profile-image.jpg";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function PersonalDetails({ activeSection, scrollToSection }) {
  const handleClick = (section) => {
    scrollToSection[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

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
          <button
            type="button"
            className={`tag ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleClick("about")}
          >
            About
          </button>

          <button
            type="button"
            className={`tag ${activeSection === "experience" ? "active" : ""}`}
            onClick={() => handleClick("experience")}
          >
            Experience
          </button>
          <button
            type="button"
            className={`tag ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => handleClick("projects")}
          >
            Projects
          </button>
        </div>
        <div className="socials">
          <a
            href="https://github.com/artyshab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arti-shabani-80a359197"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
