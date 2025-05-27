import React from "react";
import "./Portfolio.css";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const projects = [
  { title: "Full-Stack Web Development", dark: true },
  { title: "Django API Development", dark: true },
  { title: "React Frontend Projects", dark: true },
  { title: "Flask Microservices", dark: false },
  { title: "Dockerized Deployments", dark: false },
  { title: "Odoo ERP Custom Modules", dark: false },
];

const Portfolio = () => (
  <section className="portfolio-section">
    <h2 className="portfolio-title">Portfolio</h2>
    <div className="portfolio-grid">
      {projects.map((proj, i) => (
        <PortfolioCard key={i} title={proj.title} dark={proj.dark} />
      ))}
    </div>
  </section>
);

export default Portfolio;
