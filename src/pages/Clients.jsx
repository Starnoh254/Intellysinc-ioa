import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Clients.css';

function Clients() {
  const navigate = useNavigate();

  const handleBecomeClient = () => {
    navigate('/Contact?subject=Client Onboarding Inquiry');
  };

  const clients = [
    {
      name: "TechCorp Solutions",
      industry: "Technology",
      logo: "🏢",
      description: "Leading software development company",
      testimonial: "IntelliSync transformed our document workflow completely."
    },
    {
      name: "Global Finance Ltd",
      industry: "Financial Services",
      logo: "💼",
      description: "International banking and investment firm",
      testimonial: "The automation solutions saved us 40% in processing time."
    },
    {
      name: "HealthCare Plus",
      industry: "Healthcare",
      logo: "🏥",
      description: "Healthcare management and patient care",
      testimonial: "Streamlined our patient data management significantly."
    },
    {
      name: "EduTech Innovations",
      industry: "Education",
      logo: "🎓",
      description: "Educational technology and e-learning platform",
      testimonial: "Enhanced our administrative efficiency by 60%."
    },
    {
      name: "Manufacturing Pro",
      industry: "Manufacturing",
      logo: "🏭",
      description: "Industrial manufacturing and production",
      testimonial: "Revolutionized our supply chain management."
    },
    {
      name: "Retail Solutions",
      industry: "Retail",
      logo: "🛒",
      description: "Multi-chain retail and e-commerce",
      testimonial: "Improved customer service and inventory management."
    }
  ];

  const industries = [
    "Technology", "Financial Services", "Healthcare", 
    "Education", "Manufacturing", "Retail", "Government", "Non-Profit"
  ];

  return (
    <div className="clients-page">
      {/* Hero Section */}
      <motion.section 
        className="clients-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          Our Valued Clients
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="hero-subtitle"
        >
          Trusted by leading organizations across diverse industries to transform their business operations
        </motion.p>
      </motion.section>

      {/* Client Statistics */}
      <section className="client-stats">
        <div className="stats-container">
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>500+</h3>
            <p>Happy Clients</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>50+</h3>
            <p>Industries Served</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>24/7</h3>
            <p>Support Available</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="featured-clients">
        <h2>Featured Clients</h2>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="client-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="client-logo">{client.logo}</div>
              <h3>{client.name}</h3>
              <p className="client-industry">{client.industry}</p>
              <p className="client-description">{client.description}</p>
              <blockquote className="client-testimonial">
                "{client.testimonial}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="industries-served">
        <h2>Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span>{industry}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="clients-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Join Our Success Stories</h2>
          <p>Ready to transform your business operations with our intelligent solutions?</p>
          <button className="cta-button" onClick={handleBecomeClient}>
            Become a Client
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default Clients;