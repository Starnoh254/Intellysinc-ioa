import React from 'react';
import { motion } from 'framer-motion';
import '../styles/DataAutomation.css';

function DataAutomation() {
  const automationTypes = [
    {
      title: "Document Processing",
      description: "Automatically extract, classify, and process documents using AI and OCR technology",
      icon: "📄",
      features: ["OCR & Text Extraction", "Document Classification", "Data Validation", "Workflow Routing"]
    },
    {
      title: "Workflow Automation",
      description: "Streamline business processes with intelligent workflow automation and approval systems",
      icon: "⚡",
      features: ["Process Mapping", "Approval Workflows", "Task Assignment", "Status Tracking"]
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect and synchronize data across multiple systems and platforms",
      icon: "🔗",
      features: ["API Integration", "Real-time Sync", "Data Transformation", "Error Handling"]
    },
    {
      title: "Reporting Automation",
      description: "Generate and distribute reports automatically with scheduled delivery and custom dashboards",
      icon: "📊",
      features: ["Scheduled Reports", "Custom Dashboards", "Email Distribution", "Mobile Access"]
    }
  ];

  const benefits = [
    {
      title: "Time Savings",
      value: "80%",
      description: "Reduce manual data entry and processing time"
    },
    {
      title: "Error Reduction",
      value: "95%",
      description: "Minimize human errors in data processing"
    },
    {
      title: "Cost Efficiency",
      value: "60%",
      description: "Lower operational costs through automation"
    },
    {
      title: "Scalability",
      value: "10x",
      description: "Handle increased workloads without additional staff"
    }
  ];

  return (
    <div className="data-automation-page">
      {/* Hero Section */}
      <motion.section 
        className="da-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          Data Automation Solutions
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="hero-subtitle"
        >
          Transform manual processes into intelligent, automated workflows that drive efficiency and accuracy
        </motion.p>
    <motion.div
          className="hero-cta"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="primary-btn">Start Automation</button>
          <button className="secondary-btn">View Demo</button>
        </motion.div>
      </motion.section>

      {/* Automation Types Section */}
      <section className="da-automation-types">
        <h2>Comprehensive Automation Solutions</h2>
        <div className="automation-grid">
          {automationTypes.map((type, index) => (
            <motion.div
              key={index}
              className="automation-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card-header">
                <div className="card-icon">{type.icon}</div>
                <h3>{type.title}</h3>
              </div>
              <p className="card-description">{type.description}</p>
              <ul className="feature-list">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="da-benefits">
        <h2>Measurable Results</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="benefit-value">{benefit.value}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="da-process">
        <h2>Our Automation Process</h2>
        <div className="process-steps">
          <motion.div
            className="process-step"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="step-number">1</div>
            <h3>Assessment</h3>
            <p>Analyze your current processes and identify automation opportunities</p>
          </motion.div>
          <motion.div
            className="process-step"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="step-number">2</div>
            <h3>Design</h3>
            <p>Create custom automation workflows tailored to your business needs</p>
          </motion.div>
          <motion.div
            className="process-step"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="step-number">3</div>
            <h3>Implementation</h3>
            <p>Deploy and configure automation solutions with minimal disruption</p>
          </motion.div>
          <motion.div
            className="process-step"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="step-number">4</div>
            <h3>Optimization</h3>
            <p>Monitor performance and continuously improve automation efficiency</p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="da-use-cases">
        <h2>Automation Use Cases</h2>
        <div className="use-cases-content">
          <motion.div
            className="use-case"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>📧 Email Processing</h3>
            <p>Automatically categorize emails, extract attachments, and route to appropriate departments</p>
          </motion.div>
          <motion.div
            className="use-case"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>📋 Form Processing</h3>
            <p>Extract data from forms, validate information, and populate databases automatically</p>
          </motion.div>
          <motion.div
            className="use-case"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>💰 Invoice Processing</h3>
            <p>Automate invoice data extraction, approval workflows, and payment processing</p>
          </motion.div>
          <motion.div
            className="use-case"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>📊 Report Generation</h3>
            <p>Create and distribute reports automatically with real-time data integration</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="da-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Automate Your Business?</h2>
          <p>Discover how data automation can transform your operations and boost productivity</p>
          <button className="cta-btn">Get Free Assessment</button>
    </motion.div>
      </section>
    </div>
  );
}

export default DataAutomation;