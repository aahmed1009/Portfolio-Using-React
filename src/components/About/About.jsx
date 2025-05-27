import React from "react";
import "./About.css";

const About = () => (
  <section className="about-section">
    <div className="about-container">
      <h2 className="about-title">About me</h2>
      <p className="about-text">
        Motivated and detail-oriented software engineer with expertise in
        full-stack development and front-end technologies. Passionate about
        building dynamic web applications, optimizing database interactions, and
        ensuring seamless user experiences,seeking opportunities to leverage my
        skills and contribute to innovative projects.
      </p>
      <a href="/resume.pdf" download className="download-button">
        Download Resume
      </a>
    </div>
  </section>
);

export default About;
