// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Team">Our Team</Link></li>
            <li><Link to="/Awards">Awards</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="/BusinessIntelligence">Business Intelligence</Link></li>
            <li><Link to="/DataAutomation">Data Automation</Link></li>
            <li><Link to="/DocumentManagement">Document Management</Link></li>
            <li><Link to="/Integrations">Integrations</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/CaseStudies">Case Studies</Link></li>
            <li><Link to="/Resources">Resources</Link></li>
            <li><Link to="/Support">Support</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://linkedin.com/company/intellisync-ioa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/intellisync_ioa" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://facebook.com/intellisync.ioa" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/intellisync_ioa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} IntelliSync Office Automation LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
