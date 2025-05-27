import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = ({ title, dark }) => {
  return (
    <div className={`portfolio-card ${dark ? "dark" : ""}`}>
      <span>{title}</span>
    </div>
  );
};

export default PortfolioCard;
