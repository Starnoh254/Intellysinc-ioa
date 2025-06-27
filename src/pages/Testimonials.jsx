import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Operations Manager",
      company: "TechFlow Solutions",
      category: "automation",
      rating: 5,
      content: "IntelliSync has completely transformed our document processing workflow. What used to take hours now happens in minutes. The automation features are incredibly intuitive and the support team is always helpful.",
      avatar: "👩‍💼",
      industry: "Technology"
    },
    {
      name: "Michael Chen",
      position: "CFO",
      company: "GreenBuild Construction",
      category: "integration",
      rating: 5,
      content: "The integration with our accounting software has been seamless. We've reduced manual data entry by 90% and eliminated countless hours of reconciliation work. The ROI was immediate.",
      avatar: "👨‍💼",
      industry: "Construction"
    },
    {
      name: "Emily Rodriguez",
      position: "HR Director",
      company: "HealthFirst Medical",
      category: "documentation",
      rating: 5,
      content: "Managing employee documents and compliance has never been easier. The automated workflows ensure nothing falls through the cracks, and the secure storage gives us peace of mind.",
      avatar: "👩‍⚕️",
      industry: "Healthcare"
    },
    {
      name: "David Thompson",
      position: "Sales Manager",
      company: "RetailMax Stores",
      category: "analytics",
      rating: 4,
      content: "The business intelligence features have given us insights we never had before. We can now track performance in real-time and make data-driven decisions quickly.",
      avatar: "👨‍💻",
      industry: "Retail"
    },
    {
      name: "Lisa Wang",
      position: "CEO",
      company: "StartupInnovate",
      category: "automation",
      rating: 5,
      content: "As a startup, efficiency is everything. IntelliSync has helped us scale our operations without adding headcount. The automation tools are game-changing for small businesses.",
      avatar: "👩‍🚀",
      industry: "Startup"
    },
    {
      name: "Robert Martinez",
      position: "IT Director",
      company: "Global Manufacturing Co.",
      category: "integration",
      rating: 5,
      content: "The API integration capabilities are outstanding. We've connected all our systems seamlessly, and the real-time data sync has improved our decision-making process significantly.",
      avatar: "👨‍🔧",
      industry: "Manufacturing"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Testimonials', icon: '🌟' },
    { id: 'automation', name: 'Automation', icon: '⚡' },
    { id: 'integration', name: 'Integration', icon: '🔗' },
    { id: 'documentation', name: 'Documentation', icon: '📄' },
    { id: 'analytics', name: 'Analytics', icon: '📊' }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory);

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "10x", label: "Productivity Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <motion.section 
        className="testimonials-hero"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          What Our Customers Say
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="hero-subtitle"
        >
          Discover how businesses across industries are transforming their operations with our automation solutions
        </motion.p>
      </motion.section>

      {/* Stats Section */}
      <section className="testimonials-stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="testimonials-filter">
        <div className="filter-container">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid">
        <div className="testimonials-container">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p className="position">{testimonial.position}</p>
                  <p className="company">{testimonial.company}</p>
                  <span className="industry">{testimonial.industry}</span>
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <h2>Success Stories</h2>
        <div className="stories-grid">
          <motion.div
            className="story-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="story-icon">📈</div>
            <h3>300% Increase in Efficiency</h3>
            <p>A manufacturing company achieved a 300% increase in operational efficiency by automating their document processing workflows.</p>
          </motion.div>
          <motion.div
            className="story-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="story-icon">💰</div>
            <h3>$500K Annual Savings</h3>
            <p>A healthcare provider saved over $500,000 annually by automating their administrative processes and reducing manual errors.</p>
          </motion.div>
          <motion.div
            className="story-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="story-icon">⏰</div>
            <h3>90% Time Reduction</h3>
            <p>A retail chain reduced their reporting time from 8 hours to 45 minutes with automated data collection and analysis.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Join Our Success Stories</h2>
          <p>Ready to transform your business operations? Start your journey with IntelliSync today.</p>
          <div className="cta-buttons">
            <button className="primary-cta-btn">Start Free Trial</button>
            <button className="secondary-cta-btn">Schedule Demo</button>
          </div>
    </motion.div>
      </section>
    </div>
  );
}

export default Testimonials;