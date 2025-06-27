import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Integrations.css';

function Integrations() {
  const integrationCategories = [
    {
      title: "CRM Systems",
      description: "Seamlessly connect with popular CRM platforms to sync customer data and automate workflows",
      icon: "👥",
      platforms: ["Salesforce", "HubSpot", "Zoho", "Pipedrive", "Microsoft Dynamics"]
    },
    {
      title: "Accounting Software",
      description: "Integrate with accounting systems for automated financial data processing and reporting",
      icon: "💰",
      platforms: ["QuickBooks", "Xero", "Sage", "FreshBooks", "Wave"]
    },
    {
      title: "Cloud Storage",
      description: "Connect with cloud storage platforms for secure document management and file sharing",
      icon: "☁️",
      platforms: ["Google Drive", "Dropbox", "OneDrive", "Box", "iCloud"]
    },
    {
      title: "Communication Tools",
      description: "Integrate with communication platforms for enhanced collaboration and messaging",
      icon: "💬",
      platforms: ["Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord"]
    }
  ];

  const integrationFeatures = [
    {
      title: "API-First Architecture",
      description: "Built with modern APIs for easy integration and customization",
      icon: "🔌"
    },
    {
      title: "Real-time Sync",
      description: "Data synchronization in real-time across all connected platforms",
      icon: "⚡"
    },
    {
      title: "Custom Workflows",
      description: "Create custom automation workflows between different systems",
      icon: "🔄"
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC 2 compliance and data encryption",
      icon: "🔒"
    }
  ];

  const benefits = [
    {
      title: "Unified Data",
      value: "100%",
      description: "Single source of truth across all your business systems"
    },
    {
      title: "Time Savings",
      value: "75%",
      description: "Reduce manual data entry and system switching time"
    },
    {
      title: "Error Reduction",
      value: "90%",
      description: "Minimize data inconsistencies and manual errors"
    },
    {
      title: "Productivity Boost",
      value: "3x",
      description: "Increase team productivity with streamlined workflows"
    }
  ];

  return (
    <div className="integrations-page">
      {/* Hero Section */}
      <motion.section 
        className="int-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          Seamless System Integrations
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="hero-subtitle"
        >
          Connect all your business systems and applications for unified data flow and automated workflows
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="primary-btn">Explore Integrations</button>
          <button className="secondary-btn">View API Docs</button>
        </motion.div>
      </motion.section>

      {/* Integration Categories Section */}
      <section className="int-categories">
        <h2>Popular Integration Categories</h2>
        <div className="categories-grid">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={index}
              className="category-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <div className="platforms-list">
                {category.platforms.map((platform, platformIndex) => (
                  <span key={platformIndex} className="platform-tag">{platform}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="int-features">
        <h2>Integration Features</h2>
        <div className="features-grid">
          {integrationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
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

      {/* Benefits Section */}
      <section className="int-benefits">
        <h2>Integration Benefits</h2>
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

      {/* Setup Process Section */}
      <section className="int-setup">
        <h2>Easy Integration Setup</h2>
        <div className="setup-steps">
          <motion.div
            className="setup-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="step-number">1</div>
            <h3>Choose Platform</h3>
            <p>Select from our library of pre-built integrations or request a custom one</p>
          </motion.div>
          <motion.div
            className="setup-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="step-number">2</div>
            <h3>Configure</h3>
            <p>Set up authentication and configure data mapping with our intuitive interface</p>
          </motion.div>
          <motion.div
            className="setup-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="step-number">3</div>
            <h3>Test & Deploy</h3>
            <p>Test the integration in a sandbox environment before going live</p>
          </motion.div>
          <motion.div
            className="setup-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="step-number">4</div>
            <h3>Monitor</h3>
            <p>Monitor integration health and performance with real-time dashboards</p>
          </motion.div>
        </div>
      </section>

      {/* API Section */}
      <section className="int-api">
        <h2>Developer-Friendly APIs</h2>
        <div className="api-content">
          <motion.div
            className="api-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>RESTful APIs</h3>
            <p>Modern REST APIs with comprehensive documentation and SDKs for popular programming languages</p>
            <ul>
              <li>JSON-based data exchange</li>
              <li>OAuth 2.0 authentication</li>
              <li>Rate limiting and throttling</li>
              <li>Webhook support</li>
            </ul>
          </motion.div>
          <motion.div
            className="api-code"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Sample API Call</h3>
            <pre>
              <code>
{`curl -X POST https://api.intellisync.io/v1/integrations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "platform": "salesforce",
    "config": {
      "instance_url": "https://your-instance.salesforce.com",
      "access_token": "YOUR_ACCESS_TOKEN"
    }
  }'`}
              </code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="int-cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Connect Your Systems?</h2>
          <p>Start integrating your business applications today and unlock the power of unified data</p>
          <button className="cta-btn">Start Integration</button>
        </motion.div>
      </section>
    </div>
  );
}

export default Integrations;