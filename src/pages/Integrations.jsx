import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';
import performanceMonitor, { trackButtonClick, trackCardInteraction } from '../utils/performance';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/Integrations.css';

// Integration Category Card Component
function IntegrationCategoryCard({ category, index, onCategoryClick }) {
  return (
    <motion.div
      key={index}
      className="category-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onCategoryClick(category)}
      tabIndex={0}
      role="button"
      aria-label={`Explore ${category.title} integrations`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onCategoryClick(category)}
      style={{ cursor: 'pointer', outline: 'none' }}
    >
      <div className="category-icon">{category.icon}</div>
      <h3>{category.title}</h3>
      <p className="category-description">{category.description}</p>
      <div className="platforms-list">
        {category.platforms.map((platform, platformIndex) => (
          <span 
            key={platformIndex} 
            className={`platform-tag ${platform.status || 'available'}`}
            title={platform.status === 'coming-soon' ? 'Coming Soon' : platform.status === 'custom' ? 'Custom Integration Available' : 'Available'}
          >
            {platform.name}
            {platform.status === 'coming-soon' && <span className="status-indicator">🔜</span>}
            {platform.status === 'custom' && <span className="status-indicator">⚙️</span>}
          </span>
        ))}
      </div>
      <div className="category-cta">
        <span className="explore-text">Click to explore →</span>
      </div>
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({ feature, index }) {
  return (
    <motion.div
      key={index}
      className="feature-card"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      tabIndex={0}
      aria-label={`Learn about ${feature.title}`}
      style={{ outline: 'none' }}
    >
      <div className="feature-icon">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </motion.div>
  );
}

// Setup Step Component
function SetupStep({ step, index }) {
  return (
    <motion.div
      className="setup-step"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      tabIndex={0}
      aria-label={`Setup step ${step.number}: ${step.title}`}
      style={{ outline: 'none' }}
    >
      <div className="step-number">{step.number}</div>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </motion.div>
  );
}

function Integrations() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [toast, setToast] = useState(null);

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "System Integrations | IntelliSync";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Connect all your business systems and applications for unified data flow and automated workflows. Seamless integrations with CRM, accounting, cloud storage, and communication tools.'
      );
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "System Integrations",
      "description": "Seamless integration solutions for business systems and applications",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync"
      },
      "offers": {
        "@type": "Offer",
        "description": "Integration services for CRM, accounting, cloud storage, and communication platforms"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      performanceMonitor.sendMetrics();
    };
  }, []);

  const integrationCategories = [
    {
      title: "CRM Systems",
      description: "Seamlessly connect with popular CRM platforms to sync customer data and automate workflows",
      icon: "👥",
      platforms: [
        { name: "Salesforce", status: "available" },
        { name: "HubSpot", status: "available" },
        { name: "Zoho", status: "available" },
        { name: "Pipedrive", status: "coming-soon" },
        { name: "Microsoft Dynamics", status: "custom" }
      ]
    },
    {
      title: "Accounting Software",
      description: "Integrate with accounting systems for automated financial data processing and reporting",
      icon: "💰",
      platforms: [
        { name: "QuickBooks", status: "available" },
        { name: "Xero", status: "available" },
        { name: "Sage", status: "available" },
        { name: "FreshBooks", status: "coming-soon" },
        { name: "Wave", status: "custom" }
      ]
    },
    {
      title: "Cloud Storage",
      description: "Connect with cloud storage platforms for secure document management and file sharing",
      icon: "☁️",
      platforms: [
        { name: "Google Drive", status: "available" },
        { name: "Dropbox", status: "available" },
        { name: "OneDrive", status: "available" },
        { name: "Box", status: "coming-soon" },
        { name: "iCloud", status: "custom" }
      ]
    },
    {
      title: "Communication Tools",
      description: "Integrate with communication platforms for enhanced collaboration and messaging",
      icon: "💬",
      platforms: [
        { name: "Slack", status: "available" },
        { name: "Microsoft Teams", status: "available" },
        { name: "Zoom", status: "available" },
        { name: "Google Meet", status: "coming-soon" },
        { name: "Discord", status: "custom" }
      ]
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

  const setupSteps = [
    {
      number: 1,
      title: "Choose Platform",
      description: "Select from our library of pre-built integrations or request a custom one"
    },
    {
      number: 2,
      title: "Configure",
      description: "Set up authentication and configure data mapping with our intuitive interface"
    },
    {
      number: 3,
      title: "Test & Deploy",
      description: "Test the integration in a sandbox environment before going live"
    },
    {
      number: 4,
      title: "Monitor",
      description: "Monitor integration health and performance with real-time dashboards"
    }
  ];

  // Button handlers
  const handleExploreIntegrations = () => {
    trackButtonClick('explore_integrations');
    navigate('/Solutions');
  };

  const handleViewAPIDocs = () => {
    trackButtonClick('view_api_docs');
    setToast({ message: 'API Documentation coming soon!', type: 'info' });
  };

  const handleStartIntegration = (category = null) => {
    trackButtonClick('start_integration');
    if (category) {
      navigate(`/Contact?subject=${category.title} Integration Inquiry`);
    } else {
      navigate('/Contact?subject=System Integration Inquiry');
    }
  };

  const handleCategoryClick = (category) => {
    trackCardInteraction(category.title, 'click');
    setSelectedCategory(category);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  const handleRequestIntegration = (platformName) => {
    trackButtonClick(`request_integration_${platformName}`);
    setToast({ message: `Request for ${platformName} integration sent!`, type: 'success' });
  };

  return (
    <ErrorBoundary>
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
            <button className="primary-btn" onClick={handleExploreIntegrations} aria-label="Explore Integrations">
              Explore Integrations
            </button>
            <button className="secondary-btn" onClick={handleViewAPIDocs} aria-label="View API Documentation">
              View API Docs
            </button>
          </motion.div>
        </motion.section>

        {/* Integration Categories Section */}
        <section className="int-categories">
          <h2>Popular Integration Categories</h2>
          <div className="categories-grid">
            {integrationCategories.map((category, index) => (
              <IntegrationCategoryCard 
                key={index} 
                category={category} 
                index={index} 
                onCategoryClick={handleCategoryClick}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="int-features">
          <h2>Integration Features</h2>
          <div className="features-grid">
            {integrationFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
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
            {setupSteps.map((step, index) => (
              <SetupStep key={index} step={step} index={index} />
            ))}
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
            <button className="cta-btn" onClick={handleStartIntegration} aria-label="Start Integration">
              Start Integration
            </button>
          </motion.div>
        </section>

        {/* Integration Details Modal */}
        {showModal && selectedCategory && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                ×
              </button>
              <div className="modal-header">
                <div className="category-icon">{selectedCategory.icon}</div>
                <h2>{selectedCategory.title} Integrations</h2>
              </div>
              <div className="modal-description">
                <p>{selectedCategory.description}</p>
              </div>
              <div className="platforms-details">
                <h3>Available Platforms</h3>
                <div className="platforms-grid">
                  {selectedCategory.platforms.map((platform, index) => (
                    <div key={index} className="platform-item">
                      <span className="platform-name">{platform.name}</span>
                      <span className={`platform-status ${platform.status || 'available'}`}>
                        {platform.status === 'available' && '✅ Available'}
                        {platform.status === 'coming-soon' && '🔜 Coming Soon'}
                        {platform.status === 'custom' && '⚙️ Custom'}
                      </span>
                      {platform.status === 'custom' && (
                        <button 
                          className="request-btn"
                          onClick={() => handleRequestIntegration(platform.name)}
                        >
                          Request Integration
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <button className="modal-cta" onClick={() => handleStartIntegration(selectedCategory)}>
                Get Started with {selectedCategory.title}
              </button>
            </div>
          </div>
        )}

        {/* Toast Notifications */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default Integrations;