import React from "react";
import "./Hero.css";
import ContactButton from "../Button/ContactButton";

const Hero = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>Alaa Ahmed Gamal ElDin</h1>
      <p>Software Engineer</p>
      <ContactButton label="CONTACT ME" />
    </div>
  </section>
);

export default Hero;
