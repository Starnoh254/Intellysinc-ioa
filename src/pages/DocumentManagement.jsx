import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaFileAlt, FaShieldAlt, FaSearch, FaUsers, FaCogs, FaChartLine,
  FaCloud, FaMobile, FaLock, FaCheckCircle, FaArrowRight, FaPlay,
  FaDownload, FaUpload, FaEye, FaEdit, FaTrash, FaShare
} from 'react-icons/fa';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/DocumentManagement.css';

function DocumentManagement() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    document.title = "Document Management System | IntelliSync OA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Transform document workflows with our enterprise-grade document management system. Secure, scalable, and intelligent document control.'
      );
    }
  }, []);

  const documentLifecycle = [
    {
      step: 1,
      title: "Capture",
      icon: <FaUpload />,
      description: "Import documents from multiple sources",
      details: "Capture documents from scanners, email, mobile devices, and cloud storage with intelligent OCR and classification.",
      color: "#3B82F6"
    },
    {
      step: 2,
      title: "Process",
      icon: <FaCogs />,
      description: "Automated processing and classification",
      details: "AI-powered document processing with automatic classification, data extraction, and workflow routing.",
      color: "#8B5CF6"
    },
    {
      step: 3,
      title: "Store",
      icon: <FaCloud />,
      description: "Secure cloud and on-premise storage",
      details: "Enterprise-grade storage with version control, backup, and disaster recovery capabilities.",
      color: "#10B981"
    },
    {
      step: 4,
      title: "Access",
      icon: <FaSearch />,
      description: "Quick search and retrieval",
      details: "Advanced search capabilities with full-text search, metadata filtering, and mobile access.",
      color: "#F59E0B"
    },
    {
      step: 5,
      title: "Collaborate",
      icon: <FaUsers />,
      description: "Team collaboration and sharing",
      details: "Real-time collaboration with commenting, version control, and secure sharing capabilities.",
      color: "#EC4899"
    },
    {
      step: 6,
      title: "Archive",
      icon: <FaTrash />,
      description: "Compliance and retention management",
      details: "Automated archiving with retention policies, compliance monitoring, and audit trails.",
      color: "#6B7280"
    }
  ];

  const keyFeatures = [
    {
      icon: <FaShieldAlt />,
      title: "Enterprise Security",
      description: "Bank-level encryption, access controls, and audit trails",
      stats: "99.9% uptime"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Access",
      description: "Access documents anywhere with our mobile apps",
      stats: "24/7 availability"
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Insights",
      description: "Document usage analytics and performance metrics",
      stats: "Real-time reporting"
    },
    {
      icon: <FaLock />,
      title: "Compliance Ready",
      description: "GDPR, HIPAA, SOX, and industry-specific compliance",
      stats: "100% compliant"
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      icon: "🏥",
      title: "Patient Records Management",
      description: "Secure patient document management with HIPAA compliance",
      benefits: ["HIPAA Compliant", "Secure Access", "Audit Trails"]
    },
    {
      industry: "Legal",
      icon: "⚖️",
      title: "Case File Management",
      description: "Organize case files with version control and collaboration",
      benefits: ["Version Control", "Collaboration", "Search"]
    },
    {
      industry: "Finance",
      icon: "💰",
      title: "Financial Document Control",
      description: "Secure financial document processing and storage",
      benefits: ["SOX Compliant", "Secure Storage", "Automated Processing"]
    },
    {
      industry: "Manufacturing",
      icon: "🏭",
      title: "Quality Documentation",
      description: "Manage quality documents and compliance records",
      benefits: ["ISO Compliant", "Quality Control", "Process Automation"]
    }
  ];

  const handleGetStarted = () => {
    navigate('/Contact?subject=Document Management Inquiry');
  };

  const handleWatchDemo = () => {
    navigate('/CaseStudies');
  };

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const handleStepClick = (step) => {
    setActiveStep(step.step - 1);
  };

  return (
    <ErrorBoundary>
      <div className="document-management-page">
        {/* Hero Section with Video Background */}
        <section className="dm-hero">
          <div className="hero-video-bg">
            <div className="video-overlay"></div>
            <div className="floating-elements">
              <div className="floating-doc doc-1">📄</div>
              <div className="floating-doc doc-2">📋</div>
              <div className="floating-doc doc-3">📁</div>
              <div className="floating-doc doc-4">📊</div>
            </div>
          </div>
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-badge"
            >
              <FaFileAlt />
              <span>Document Management</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Transform Your <span className="gradient-text">Document Workflows</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Enterprise-grade document management system that streamlines capture, processing, storage, and collaboration
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-actions"
            >
              <button className="cta-button primary" onClick={handleGetStarted}>
                <span>Start Free Trial</span>
                <FaArrowRight />
              </button>
              <button className="cta-button secondary" onClick={handleWatchDemo}>
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Document Lifecycle Timeline */}
        <section className="document-lifecycle">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>The Complete Document Lifecycle</h2>
              <p>From capture to archive, we handle every aspect of document management</p>
            </motion.div>
            
            <div className="timeline-container">
              {documentLifecycle.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`timeline-step ${activeStep === index ? 'active' : ''}`}
                  onClick={() => handleStepClick(step)}
                >
                  <div className="step-number" style={{ backgroundColor: step.color }}>
                    {step.step}
                  </div>
                  <div className="step-content">
                    <div className="step-icon" style={{ color: step.color }}>
                      {step.icon}
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="step-details">
                      <p>{step.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Features Grid */}
        <section className="features-showcase">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Powerful Features</h2>
              <p>Everything you need for enterprise document management</p>
            </motion.div>

            <div className="features-grid">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="feature-card"
                  onClick={() => handleFeatureClick(feature)}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="feature-stats">
                    <span>{feature.stats}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="industry-use-cases">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Industry Solutions</h2>
              <p>Tailored document management for your industry</p>
            </motion.div>

            <div className="use-cases-grid">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="use-case-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="industry-icon">{useCase.icon}</div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                  <div className="benefits-list">
                    {useCase.benefits.map((benefit, idx) => (
                      <span key={idx} className="benefit-tag">{benefit}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="dm-cta">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Ready to Transform Your Document Management?</h2>
              <p>Join thousands of organizations that trust IntelliSync for their document workflows</p>
              <div className="cta-actions">
                <button className="cta-button primary" onClick={handleGetStarted}>
                  <span>Get Started Today</span>
                  <FaArrowRight />
                </button>
                <button className="cta-button secondary" onClick={handleWatchDemo}>
                  <FaDownload />
                  <span>Download Brochure</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default DocumentManagement;