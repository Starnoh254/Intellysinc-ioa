import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';
import performanceMonitor, { trackButtonClick } from '../utils/performance';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/DocumentManagement.css';

// FeatureCard component
function FeatureCard({ feature, index, onLearnMore }) {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${feature.title}`}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onLearnMore(feature.title)}
      onClick={() => onLearnMore(feature.title)}
      style={{ outline: 'none' }}
    >
      <div className="feature-icon">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
      <ul className="benefits-list">
        {feature.benefits.map((benefit, benefitIndex) => (
          <li key={benefitIndex}>{benefit}</li>
        ))}
      </ul>
    </motion.div>
  );
}

// DocumentTypeCard component
function DocumentTypeCard({ docType, index }) {
  return (
    <motion.div
      className="document-type-card"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      tabIndex={0}
      aria-label={docType.type}
      style={{ outline: 'none' }}
    >
      <div className="doc-icon">{docType.icon}</div>
      <h3>{docType.type}</h3>
      <p>{docType.description}</p>
    </motion.div>
  );
}

function DocumentManagement() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  const features = [
    {
      title: "Document Capture",
      description: "Scan, upload, and digitize documents with advanced OCR technology",
      icon: "📷",
      benefits: ["Multi-format support", "Batch processing", "Auto-classification", "Quality enhancement"]
    },
    {
      title: "Secure Storage",
      description: "Cloud-based document storage with enterprise-grade security and compliance",
      icon: "🔒",
      benefits: ["Encrypted storage", "Access controls", "Audit trails", "Backup & recovery"]
    },
    {
      title: "Workflow Automation",
      description: "Streamline document approval processes with intelligent routing and notifications",
      icon: "⚡",
      benefits: ["Approval workflows", "Task assignment", "Status tracking", "Deadline management"]
    },
    {
      title: "Search & Retrieval",
      description: "Find documents instantly with powerful search and indexing capabilities",
      icon: "🔍",
      benefits: ["Full-text search", "Metadata filtering", "Version control", "Quick access"]
    }
  ];

  const documentTypes = [
    {
      type: "Invoices & Receipts",
      icon: "💰",
      description: "Automated processing and approval workflows"
    },
    {
      type: "Contracts & Agreements",
      icon: "📋",
      description: "Secure storage with digital signatures and version control"
    },
    {
      type: "Reports & Analytics",
      icon: "📊",
      description: "Automated generation and distribution of business reports"
    },
    {
      type: "Forms & Applications",
      icon: "📝",
      description: "Digital form processing with data extraction and validation"
    }
  ];

  // Button handlers
  const handleGetStarted = () => {
    trackButtonClick('get_started');
    navigate('/Contact?subject=Document Management Solution Inquiry');
  };
  const handleRequestDemo = () => {
    trackButtonClick('request_demo');
    setToast({ message: 'Demo feature coming soon!', type: 'info' });
  };
  const handleScheduleConsultation = () => {
    trackButtonClick('schedule_consultation');
    navigate('/Contact?subject=Document Management Consultation Request');
  };
  const handleLearnMore = (featureTitle) => {
    trackButtonClick(`learn_more_${featureTitle}`);
    setToast({ message: `Learn more about ${featureTitle} - This feature is coming soon!`, type: 'info' });
  };

  return (
    <ErrorBoundary>
      <div className="document-management-page">
        {/* Hero Section */}
        <motion.section 
          className="dm-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            Document Management System
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="hero-subtitle"
          >
            Streamline document workflows, enhance security, and boost productivity with our comprehensive document management solution
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="primary-btn" onClick={handleGetStarted} aria-label="Get Started">Get Started</button>
            <button className="secondary-btn" onClick={handleRequestDemo} aria-label="Request Demo">Request Demo</button>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <section className="dm-features">
          <h2>Comprehensive Document Management</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} onLearnMore={handleLearnMore} />
            ))}
          </div>
        </section>

        {/* Document Types Section */}
        <section className="dm-document-types">
          <h2>Support for All Document Types</h2>
          <div className="document-types-grid">
            {documentTypes.map((docType, index) => (
              <DocumentTypeCard key={index} docType={docType} index={index} />
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="dm-benefits">
          <h2>Why Choose Our Document Management?</h2>
          <div className="benefits-content">
            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>🚀 Increased Efficiency</h3>
              <p>Reduce document processing time by up to 90% with automated workflows</p>
            </motion.div>
            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>🔒 Enhanced Security</h3>
              <p>Protect sensitive documents with enterprise-grade encryption and access controls</p>
            </motion.div>
            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>💰 Cost Savings</h3>
              <p>Eliminate paper costs and reduce storage expenses by up to 70%</p>
            </motion.div>
            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>📱 Remote Access</h3>
              <p>Access documents from anywhere, anytime with secure cloud-based storage</p>
            </motion.div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="dm-workflow">
          <h2>Document Workflow Process</h2>
          <div className="workflow-steps">
            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              tabIndex={0}
              aria-label="Capture step"
            >
              <div className="step-number">1</div>
              <h3>Capture</h3>
              <p>Scan or upload documents with automatic OCR processing</p>
            </motion.div>
            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              tabIndex={0}
              aria-label="Process step"
            >
              <div className="step-number">2</div>
              <h3>Process</h3>
              <p>Extract data, classify documents, and apply business rules</p>
            </motion.div>
            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              tabIndex={0}
              aria-label="Store step"
            >
              <div className="step-number">3</div>
              <h3>Store</h3>
              <p>Securely store documents with proper indexing and metadata</p>
            </motion.div>
            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              tabIndex={0}
              aria-label="Retrieve step"
            >
              <div className="step-number">4</div>
              <h3>Retrieve</h3>
              <p>Quickly find and access documents with powerful search capabilities</p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="dm-cta">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Document Management?</h2>
            <p>Start your journey towards paperless, efficient document workflows today</p>
            <button className="cta-btn" onClick={handleScheduleConsultation} aria-label="Schedule Consultation">Schedule Consultation</button>
          </motion.div>
        </section>
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

export default DocumentManagement;