import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css'; // Ensure this filename matches exactly (case-sensitive)

const About = () => {
  const navigate = useNavigate();

  // CTA Button with updated class names and navigation functionality
  const CTAButton = ({ text, primary = false, onClick }) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`about-cta-button ${primary ? 'about-primary' : 'about-secondary'}`}
        onClick={onClick}
      >
        {text}
      </motion.button>
    );
  };

  const handleLearnMore = () => {
    navigate('/CompanyInfo');
  };

  const handleContactUs = () => {
    navigate('/Contact');
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h1
          animate={{ x: [-50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          About Us
        </motion.h1>
        <motion.p
          animate={{ x: [50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Founded in 2025,<br />
          Leading Office Technology Integration Experts<br />
          Headquartered in Nairobi, Kenya
        </motion.p>
        <div className="about-hero-cta">
          <CTAButton text="Learn More" primary={true} onClick={handleLearnMore} />
          <CTAButton text="Contact Us" onClick={handleContactUs} />
        </div>
      </motion.section>
    </div>
  );
};

export default About;
