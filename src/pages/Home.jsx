import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css'; // CSS import

const Home = () => {
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
        >
          Intellisync Office Automation LTD.
        </motion.h1>
        <motion.p
          animate={{ x: [50, 0] }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Document Workflow Strategy Consultants <br />
          Process and Cost Optimization
        </motion.p>
        <div className="home-hero-cta">
          <CTAButton text="Get Started" primary={true} />
          <CTAButton text="Learn More" />
        </div>
      </motion.section>
    );
  };

  // Features Component
  const Features = () => {
    const features = [
      {
        title: "Eco-friendly solutions",
        desc: "Redefine Office Document Intelligence.",
        image: "/Intellysinc-ioa/images/intelli0201.jpg"
      },
      {
        title: "24/7 Support",
        desc: "We are always here to help.",
        image: "/Intellysinc-ioa/images/intelli0202.jpg"
      },
      {
        title: "Quality Services",
        desc: "Excellence in Technology and Functionality.",
        image: "/Intellysinc-ioa/images/intelli0203.jpg"
      }
    ];

    return (
      <section className="features">
        <h2>Why Choose Us?</h2>
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
        image: "/Intellysinc-ioa/images/intelli0301.jpg"
      },
      {
        name: "Jane Smith",
        quote: "Highly recommended!",
        image: "/Intellysinc-ioa/images/intelli0302.jpg"
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
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
