import React from "react";
import "./ContactButton.css";

const ContactButton = ({ label, onClick, className = "", ...rest }) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default ContactButton;
