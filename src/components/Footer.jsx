// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Team">Team</Link></li>
            <li><Link to="/Awards">Awards</Link></li>
            <li><Link to="/CompanyInfo">Company Info</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Solutions">Solutions</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="/BusinessIntelligence">Business Intelligence</Link></li>
            <li><Link to="/DataAutomation">Data Automation</Link></li>
            <li><Link to="/DataProcessing">Data Processing</Link></li>
            <li><Link to="/DocumentManagement">Document Management</Link></li>
            <li><Link to="/Integrations">Integrations</Link></li>
            <li><Link to="/WorkflowAutomation">Workflow Automation</Link></li>
            <li><Link to="/QualityManagement">Quality Management</Link></li>
            <li><Link to="/SalesMarketing">Sales & Marketing</Link></li>
            <li><Link to="/MobileSolutions">Mobile Solutions</Link></li>
            <li><Link to="/SecurityServices">Security Services</Link></li>
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
        <p>&copy; {new Date().getFullYear()} intellisync-ioa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
