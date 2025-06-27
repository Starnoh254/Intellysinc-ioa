// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="/automation">Automation</a></li>
            <li><a href="/analytics">Analytics</a></li>
            <li><a href="/integrations">Integrations</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/docs">Documentation</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/terms">Terms</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} IntelliSyncKe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
