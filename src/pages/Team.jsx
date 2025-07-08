import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Team.css'; // Ensure filename and import match

const Team = () => {
  const CTAButton = ({ text, primary = false }) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`team-cta-button ${primary ? 'team-primary' : 'team-secondary'}`}
      >
        {text}
      </motion.button>
    );
  };

  // Team members data
  const teamMembers = [
    {
      name: "Stanley Okeyo Mbori",
      expertise: "App developer, Software developer, Web developer, Data scientist",
      image: "https://via.placeholder.com/80x80?text=Photo",
      contact: {
        email: "stanley@intellisync-ioa.com",
        linkedin: "https://linkedin.com/in/stanley"
      }
    },
    {
      name: "Doane Wellingtone",
      expertise: "Web & App developer, full stack developer",
      image: "https://via.placeholder.com/80x80?text=Photo",
      contact: {
        email: "doane@intellisync-ioa.com",
        linkedin: "https://linkedin.com/in/DoaneWellingtone"
      }
    }
  ];

  return (
    <div className="team-container">
      {/* Hero Section */}
      <motion.section 
        className="team-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h1
          animate={{ x: [-50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Meet Our Team
        </motion.h1>
        <motion.p
          animate={{ x: [50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          50+ expert solution architects, engineers, and designers<br />
          <br />
          All dedicated in Office Automation<br />
          <br />
          Driving Innovation and Excellence Together<br />
          <br />
          Lead by CEO and Founder, Ezekiel Mbori
          <br />
        </motion.p>
        <div className="hero-cta-buttons">
          <CTAButton text="Join Us" primary />
          <CTAButton text="Contact Team" />
        </div>
      </motion.section>

      {/* Team Member Profiles Section */}
      {/* Removed: <section className="team-members-section"> ... </section> */}

      {/* Who We Serve Section */}
      <section className="who-we-serve-section">
        <h2 className="who-we-serve-title">Who We Serve</h2>
        <div className="who-we-serve-columns">
          <div className="who-we-serve-col">
            <h3>By Use Case</h3>
            <ul>
              <li>Automated Invoice Processing</li>
              <li>Purchase-to-Pay Automation</li>
              <li>Document Management & Archiving</li>
              <li>Contract Management & E-signature</li>
              <li>Quality Management & Compliance</li>
              <li>Sales Order Processing</li>
              <li>Employee Onboarding & File Management</li>
              <li>Customer Support Automation</li>
            </ul>
          </div>
          <div className="who-we-serve-col">
            <h3>By Industry</h3>
            <ul>
              <li>Financial Services & Banking</li>
              <li>Healthcare & Medical Records</li>
              <li>Education & Research</li>
              <li>Manufacturing & Supply Chain</li>
              <li>Public Sector & Government</li>
              <li>Professional Services (Legal, HR, Consulting)</li>
              <li>Retail & Distribution</li>
            </ul>
          </div>
          <div className="who-we-serve-col">
            <h3>By Department</h3>
            <ul>
              <li>Finance & Accounting</li>
              <li>Sales & Marketing</li>
              <li>Human Resources</li>
              <li>Operations & Administration</li>
              <li>IT & Compliance</li>
            </ul>
          </div>
          <div className="who-we-serve-col">
            <h3>By Company Size</h3>
            <ul>
              <li>Small and Mid-sized Businesses</li>
              <li>Large Enterprises</li>
              <li>Distributed & Mobile Workforces</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
