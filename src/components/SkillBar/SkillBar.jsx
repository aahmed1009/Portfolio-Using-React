import React from "react";
import "./SkillBar.css";

const SkillBar = ({ skill, percent }) => {
  return (
    <div className="skill-bar">
      <span className="skill-name">{skill}</span>
      <div className="bar-container">
        <div className="bar-fill" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
