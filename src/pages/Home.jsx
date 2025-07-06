import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // CSS import

// Image paths for public folder assets
const intelli0201 = import.meta.env.BASE_URL + 'images/intelli0201.jpg';
const intelli0202 = import.meta.env.BASE_URL + 'images/intelli0202.jpg';
const intelli0203 = import.meta.env.BASE_URL + 'images/intelli0203.jpg';
const intelli0301 = import.meta.env.BASE_URL + 'images/intelli0301.jpg';
const intelli0302 = import.meta.env.BASE_URL + 'images/intelli0302.jpg';
const whyChooseUs = import.meta.env.BASE_URL + 'images/why-choose-us.jpg';
const archive = import.meta.env.BASE_URL + 'images/archive.png';

const Home = () => {
  const navigate = useNavigate();

  // Reusable CTA Button Component
  const CTAButton = ({ text, primary = false, onClick }) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`cta-button ${primary ? 'primary' : 'secondary'}`}
        onClick={onClick}
      >
        {text}
      </motion.button>
    );
  };

  // Hero Component
  const Hero = () => {
    return (
      <motion.section 
        className="home-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h1
          animate={{ x: [-50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '56px' }}
        >
          Intellisync Office Automation
        </motion.h1>
        <motion.p
          animate={{ x: [50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Digitization and Document Workflow Strategy Consultants <br />
          Process and Cost Optimization
        </motion.p>
        <div className="home-hero-cta">
          <CTAButton text="Get Started" primary={true} />
          <CTAButton text="Learn More" onClick={() => navigate('/CompanyInfo')} />
        </div>
      </motion.section>
    );
  };

  // Why Choose Us Component
  const WhyChooseUs = () => {
    return (
      <section 
        className="why-choose-us"
        style={{
          backgroundImage: `url(${whyChooseUs})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <div className="why-choose-overlay">
          <h2>Why Choose Us?</h2>
          
          <motion.div 
            className="why-choose-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="main-description">
              <p className="lead-text">
                Intellisync Office Automation is the industry-leading solution for intelligent document processing.
              </p>
              <p className="sub-text">
                Leveraging a user-friendly point-and-click interface, Intellisync-OA learns to extract any field from any document after seeing just one example.
              </p>
              <p className="benefit-text">
                Enables you to automate archiving, task management, and Knowledge Graph creation to reveal valuable connections between documents and drive your organization's efficiency and insights.
              </p>
            </div>

            <motion.div 
              className="archive-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="archive-card"
                style={{
                  backgroundImage: `url(${archive})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="archive-card-overlay">
                  <h3 className="archive-title">Archive - Document Management</h3>
                  <p className="archive-description">
                    Optimize business efficiency: embrace the future with our Advanced Document Archive
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };

  // Features Component
  const Features = () => {
    const features = [
      {
        title: "Eco-friendly solutions",
        desc: "Redefine Office Document Intelligence.",
        image: intelli0201
      },
      {
        title: "24/7 Support",
        desc: "We are always here to help.",
        image: intelli0202
      },
      {
        title: "Quality Services",
        desc: "Excellence in Technology and Functionality.",
        image: intelli0203
      }
    ];

    return (
      <section className="features">
        <h2>Our Commitment</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              style={{
                backgroundImage: `url(${feature.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: '#fff'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-card-overlay">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  // Testimonials Component
  const Testimonials = () => {
    const testimonials = [
      {
        name: "John Doe",
        quote: "Amazing service!",
        image: intelli0301
      },
      {
        name: "Jane Smith",
        quote: "Highly recommended!",
        image: intelli0302
      }
    ];

    return (
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              style={{
                backgroundImage: `url(${testimonial.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-card-overlay">
                <p>"{testimonial.quote}"</p>
                <span>- {testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
