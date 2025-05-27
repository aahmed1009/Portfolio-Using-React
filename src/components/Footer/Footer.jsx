import React from "react";
import "./Footer.css";
import ContactButton from "../Button/ContactButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h5>GET IN TOUCH</h5>
        <p>
          <i className="fas fa-envelope"></i> alaa.ahmedgamal10@gmail.com
        </p>
        <p>
          <i className="fas fa-phone-alt"></i> +20 10 22096102
        </p>
      </div>

      <div className="footer-center">
        <ContactButton label="CONTACT ME" />
      </div>

      <div className="footer-right">
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/alaa-ahmed-6a36bb199/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/aahmed1009"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="copyright">© 2025 Alaa Ahmed Gamal</p>
      </div>
    </footer>
  );
};

export default Footer;
