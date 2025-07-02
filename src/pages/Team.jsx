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
        email: "stanley@intellisync-oa.com",
        linkedin: "https://linkedin.com/in/stanley"
      }
    },
    {
      name: "Doane Wellingtone",
      expertise: "Web & App developer, full stack developer",
      image: "https://via.placeholder.com/80x80?text=Photo",
      contact: {
        email: "doane@intellisync-oa.com",
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
      <section className="team-members-section">
        <h2 className="team-section-title">Our Team</h2>
        <div className="team-members-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-member-card" key={idx}>
              <div className="team-member-avatar">
                {/* Image placeholder: replace src with real image if available */}
                <img
                  src={member.image || 'https://via.placeholder.com/80x80?text=Photo'}
                  alt={member.name + ' profile'}
                  className="team-avatar-img"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                  style={{ borderRadius: '50%', width: 80, height: 80, objectFit: 'cover', background: '#eee', display: 'block' }}
                />
                {/* Fallback initials if image fails to load */}
                <span className="team-avatar-initials" style={{ position: 'absolute', left: 0, top: 0, width: 80, height: 80, display: 'none', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 600, color: '#555', background: '#ddd', borderRadius: '50%' }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p className="team-member-expertise">{member.expertise}</p>
                <div className="team-member-contact">
                  <a href={`mailto:${member.contact.email}`} className="team-contact-link">{member.contact.email}</a>
                  <a href={member.contact.linkedin} className="team-contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
