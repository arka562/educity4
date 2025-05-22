import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="footer-link">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/community" className="footer-link">
                Community
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="footer-link">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <ul className="footer-social">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">Email: arka792003@gmail.com</p>
          <p className="footer-text">Phone: +91 9523108343</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Educity. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
