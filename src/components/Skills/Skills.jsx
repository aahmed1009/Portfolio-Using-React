import React from "react";
import "./Skills.css";
import SkillBar from "../SkillBar/SkillBar";

const Skills = () => {
  const skillList = [
    { skill: "Python", percent: 95 },
    { skill: "Django", percent: 90 },
    { skill: "Flask", percent: 85 },
    { skill: "JavaScript", percent: 90 },
    { skill: "React", percent: 98 },
    { skill: "HTML/CSS", percent: 92 },
    { skill: "PostgreSQL", percent: 85 },
    { skill: "Odoo (ERP)", percent: 60 },
    { skill: "Docker", percent: 75 },
    { skill: "Git & GitHub", percent: 95 },
    { skill: "Linux Server Management", percent: 80 },
    { skill: "API Integration (REST/JWT)", percent: 90 },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-desc">Full Stack Development</p>
      <div className="skills-grid">
        <div className="focus">
          <h4>MY FOCUS</h4>
          <hr />
          <ul>
            <li>Full-Stack Web Development</li>
            <li>REST API Design & Integration</li>
            <li>Database Modeling & Optimization</li>
            <li>ERP/CRM Customization (Odoo)</li>
            <li>Responsive Frontend Development (React)</li>
            <li>Backend Development with Django & Flask</li>
            <li>DevOps & Deployment (Docker, Nginx, Linux)</li>
          </ul>
        </div>
        <div className="bars">
          {skillList.map(({ skill, percent }) => (
            <SkillBar key={skill} skill={skill} percent={percent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
