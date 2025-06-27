import React from 'react';
import { motion } from 'framer-motion';
import './BusinessIntelligence.css';

function BusinessIntelligence() {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Monitor key performance indicators and business metrics in real-time dashboards",
      icon: "📊"
    },
    {
      title: "Predictive Insights",
      description: "Leverage AI and machine learning to forecast trends and identify opportunities",
      icon: "🔮"
    },
    {
      title: "Custom Reports",
      description: "Generate tailored reports for different departments and stakeholders",
      icon: "📋"
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, actionable visual insights",
      icon: "📈"
    }
  ];

  const useCases = [
    {
      title: "Sales Performance",
      description: "Track sales metrics, pipeline analysis, and revenue forecasting"
    },
    {
      title: "Operational Efficiency",
      description: "Monitor process performance, identify bottlenecks, and optimize workflows"
    },
    {
      title: "Customer Analytics",
      description: "Understand customer behavior, satisfaction, and retention patterns"
    },
    {
      title: "Financial Intelligence",
      description: "Budget tracking, expense analysis, and financial planning insights"
    }
  ];

  return (
    <div className="business-intelligence-page">
      {/* Hero Section */}
      <motion.section 
        className="bi-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          Business Intelligence Solutions
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="hero-subtitle"
        >
          Transform your data into actionable insights with our comprehensive business intelligence platform
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Watch Demo</button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="bi-features">
        <h2>Powerful BI Capabilities</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bi-use-cases">
        <h2>Business Intelligence Use Cases</h2>
        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="use-case-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bi-benefits">
        <h2>Why Choose Our BI Solutions?</h2>
        <div className="benefits-content">
          <motion.div
            className="benefit-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>🚀 Increased Efficiency</h3>
            <p>Automate reporting processes and reduce manual data analysis by up to 80%</p>
          </motion.div>
          <motion.div
            className="benefit-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>🎯 Better Decision Making</h3>
            <p>Access real-time insights to make data-driven decisions faster and more accurately</p>
          </motion.div>
          <motion.div
            className="benefit-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>💰 Cost Savings</h3>
            <p>Identify inefficiencies and optimize processes to reduce operational costs</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bi-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Business Intelligence?</h2>
          <p>Start your journey towards data-driven decision making today</p>
          <button className="cta-btn">Schedule a Consultation</button>
        </motion.div>
      </section>
    </div>
  );
}

export default BusinessIntelligence;