import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Awards.css'; // Fixed case sensitivity to match actual filename

const Awards = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAward, setSelectedAward] = useState(null);

  // Award data
  const awards = [
    {
      id: 1,
      title: "Bold Solutions Provider Award",
      category: "innovation",
      organization: "Tech Excellence Forum",
      description: "Recognized for outstanding innovative solutions in contract management systems",
      details: "This award celebrates companies that demonstrate exceptional creativity and technical excellence in developing solutions that transform business processes. Our contract management system was praised for its intuitive design and powerful automation capabilities.",
      icon: `${import.meta.env.BASE_URL}images/bold_solutions_award.jpg`
    },
    {
      id: 2,
      title: "Best Innovative Solutions Design Architecture",
      category: "design",
      organization: "Design & Architecture Awards",
      description: "Excellence in architectural design for enterprise solutions",
      details: "Our architectural approach was recognized for its scalability, maintainability, and user-centric design principles. The system architecture supports seamless integration with existing enterprise infrastructure.",
      icon: `${import.meta.env.BASE_URL}images/innovative_solutions_award.jpg`
    },
    {
      id: 3,
      title: "Digital Transformation Excellence",
      category: "transformation",
      organization: "Digital Innovation Council",
      description: "Leading digital transformation initiatives in East Africa",
      details: "Awarded for our comprehensive approach to digital transformation, helping organizations modernize their operations and improve efficiency through technology integration.",
      icon: `${import.meta.env.BASE_URL}images/digital_transformation_award.jpg`
    },
    {
      id: 4,
      title: "Customer Service Excellence",
      category: "service",
      organization: "Customer Experience Awards",
      description: "Outstanding customer support and service delivery",
      details: "Recognized for our commitment to customer success, providing exceptional support and ensuring smooth implementation of our solutions across diverse client environments.",
      icon: `${import.meta.env.BASE_URL}images/customer_service_award.jpg`
    },
    {
      id: 5,
      title: "Technology Innovation Award",
      category: "innovation",
      organization: "African Tech Summit",
      description: "Pioneering technology solutions for African markets",
      details: "Celebrated for developing technology solutions specifically tailored to address unique challenges and opportunities in the African business landscape.",
      icon: `${import.meta.env.BASE_URL}images/technology_innovation_award.jpg`
    }
  ];

  const categories = [
    { id: 'all', name: 'All Awards' },
    { id: 'innovation', name: 'Innovation' },
    { id: 'design', name: 'Design' },
    { id: 'transformation', name: 'Digital Transformation' },
    { id: 'service', name: 'Customer Service' }
  ];

  const filteredAwards = selectedCategory === 'all' 
    ? awards 
    : awards.filter(award => award.category === selectedCategory);

  // CTA Button with navigation functionality
  const CTAButton = ({ text, primary = false, onClick }) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`awards-cta-button ${primary ? 'awards-primary' : 'awards-secondary'}`}
        onClick={onClick}
      >
        {text}
      </motion.button>
    );
  };

  const handleViewCaseStudies = () => {
    navigate('/CaseStudies');
  };

  const handleContactUs = () => {
    navigate('/Contact?subject=General Inquiry');
  };

  const handleAwardClick = (award) => {
    setSelectedAward(award);
  };

  const closeAwardDetails = () => {
    setSelectedAward(null);
  };

  return (
    <div className="awards-container">
      {/* Hero Section */}
      <motion.section 
        className="awards-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h1
          animate={{ x: [-50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Awards & Recognition
        </motion.h1>
        <motion.p
          animate={{ x: [50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Celebrating Excellence in Technology Solutions<br />
          Recognized for Innovation, Design, and Service Excellence
        </motion.p>
        
        <div className="awards-hero-cta">
          <CTAButton text="View Case Studies" primary={true} onClick={handleViewCaseStudies} />
          <CTAButton text="Contact Us" onClick={handleContactUs} />
        </div>
      </motion.section>

      {/* Filter Section */}
      <motion.section 
        className="awards-filter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3>Filter by Category</h3>
        <div className="filter-buttons">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Awards Grid */}
      <motion.section 
        className="awards-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          {filteredAwards.map((award, index) => (
            <motion.div
              key={award.id}
              className="award-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
              }}
              onClick={() => handleAwardClick(award)}
            >
              <div className="award-icon">
                <img src={award.icon} alt={award.title} />
              </div>
              <div className="award-content">
                <h3>{award.title}</h3>
                <p className="award-organization">{award.organization}</p>
                <div className="award-hover-content">
                  <p className="award-description">{award.description}</p>
                  <div className="award-details">
                    <h4>About This Award</h4>
                    <p>{award.details}</p>
                  </div>
                  <motion.button 
                    className="award-details-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {/* Award Details Modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            className="award-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAwardDetails}
          >
            <motion.div
              className="award-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeAwardDetails}>×</button>
              <div className="modal-content">
                <div className="modal-icon">
                  <img src={selectedAward.icon} alt={selectedAward.title} />
                </div>
                <h2>{selectedAward.title}</h2>
                <p className="modal-organization">{selectedAward.organization}</p>
                <p className="modal-description">{selectedAward.description}</p>
                <div className="modal-details">
                  <h4>About This Award</h4>
                  <p>{selectedAward.details}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Awards;
