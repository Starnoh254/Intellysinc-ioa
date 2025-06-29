import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/DataAutomation.css';
import performanceMonitor, { trackButtonClick, trackCardInteraction, trackModalInteraction } from '../utils/performance';
import Toast from '../components/Toast';

function DataAutomation() {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  // SEO and meta tags
  useEffect(() => {
    // Start performance monitoring
    performanceMonitor.trackPageLoad();
    
    document.title = "Data Automation Solutions | IntelliSync";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Transform manual processes into intelligent, automated workflows. Reduce processing time by 80% with our data automation solutions.'
      );
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Data Automation Solutions",
      "description": "Transform manual processes into intelligent, automated workflows that drive efficiency and accuracy",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync"
      },
      "offers": {
        "@type": "Offer",
        "description": "Comprehensive data automation solutions including document processing, workflow automation, data integration, and reporting automation"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    
    // Send performance metrics when component unmounts
    return () => {
      clearTimeout(timer);
      document.head.removeChild(script);
      performanceMonitor.sendMetrics();
    };
  }, []);

  const automationTypes = [
    {
      title: "Document Processing",
      description: "Automatically extract, classify, and process documents using AI and OCR technology",
      icon: "📄",
      features: ["OCR & Text Extraction", "Document Classification", "Data Validation", "Workflow Routing"],
      benefits: ["80% faster processing", "99% accuracy rate", "24/7 availability", "Scalable solution"],
      useCases: ["Invoice processing", "Contract analysis", "Form data extraction", "Report generation"]
    },
    {
      title: "Workflow Automation",
      description: "Streamline business processes with intelligent workflow automation and approval systems",
      icon: "⚡",
      features: ["Process Mapping", "Approval Workflows", "Task Assignment", "Status Tracking"],
      benefits: ["Reduced manual errors", "Faster approvals", "Better compliance", "Process visibility"],
      useCases: ["Employee onboarding", "Purchase approvals", "Customer service routing", "Quality control"]
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect and synchronize data across multiple systems and platforms",
      icon: "🔗",
      features: ["API Integration", "Real-time Sync", "Data Transformation", "Error Handling"],
      benefits: ["Unified data view", "Real-time updates", "Reduced data silos", "Improved decision making"],
      useCases: ["CRM integration", "ERP connectivity", "Marketing automation", "Analytics dashboards"]
    },
    {
      title: "Reporting Automation",
      description: "Generate and distribute reports automatically with scheduled delivery and custom dashboards",
      icon: "📊",
      features: ["Scheduled Reports", "Custom Dashboards", "Email Distribution", "Mobile Access"],
      benefits: ["Timely insights", "Reduced manual work", "Consistent reporting", "Better accessibility"],
      useCases: ["Financial reporting", "Sales analytics", "Performance metrics", "Compliance reports"]
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

  const processSteps = [
    {
      step: 1,
      title: "Assessment",
      description: "Analyze your current processes and identify automation opportunities",
      details: "Our experts conduct a comprehensive analysis of your existing workflows, identify bottlenecks, and map out automation opportunities. We assess data sources, integration points, and compliance requirements to create a tailored automation strategy."
    },
    {
      step: 2,
      title: "Design",
      description: "Create custom automation workflows tailored to your business needs",
      details: "We design custom automation workflows that align with your business objectives. This includes process mapping, user interface design, integration planning, and security considerations to ensure seamless implementation."
    },
    {
      step: 3,
      title: "Implementation",
      description: "Deploy and configure automation solutions with minimal disruption",
      details: "Our team implements the automation solutions with careful attention to detail. We ensure minimal disruption to your operations while providing comprehensive training and support during the transition period."
    },
    {
      step: 4,
      title: "Optimization",
      description: "Monitor performance and continuously improve automation efficiency",
      details: "We continuously monitor the performance of your automation solutions, gather feedback, and implement improvements. Our ongoing support ensures your automation processes remain efficient and aligned with your evolving business needs."
    }
  ];

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const handleCardClick = (item) => {
    trackCardInteraction(item.title, 'click');
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleProcessStepClick = (step) => {
    trackCardInteraction(`step_${step.step}`, 'click');
    setSelectedItem(step);
    setShowModal(true);
  };

  const closeModal = () => {
    trackModalInteraction('close', selectedItem?.title || 'process_step');
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleDemoClick = () => {
    trackButtonClick('demo_button');
    // Navigate to Case Studies page for demo examples
    navigate('/CaseStudies');
  };

  const handleAssessmentClick = () => {
    trackButtonClick('assessment_button');
    // Navigate to Contact page for assessment request
    navigate('/Contact?subject=Data Automation Assessment Request');
  };

  const handleLearnMoreClick = (itemType) => {
    trackButtonClick(`learn_more_${itemType}`);
    // Show a toast message
    showToast(`Learn more about ${itemType.replace('_', ' ')} - This feature is coming soon!`, 'info');
  };

  const handleExploreClick = (useCase) => {
    trackButtonClick(`explore_${useCase}`);
    // Navigate to Solutions page for more details
    navigate('/Solutions');
  };

  const handleViewDetailsClick = (stepNumber) => {
    trackButtonClick(`view_details_step_${stepNumber}`);
    // Show a toast message
    showToast(`Detailed information for step ${stepNumber} - This feature is coming soon!`, 'info');
  };

  const handleGetStartedClick = () => {
    trackButtonClick('get_started_modal');
    // Navigate to Contact page
    navigate('/Contact?subject=Data Automation Solution Inquiry');
  };

  if (isLoading) {
    return (
      <div className="loading-skeleton">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading Data Automation Solutions...
        </motion.div>
      </div>
    );
  }

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
          <button className="primary-btn" onClick={handleAssessmentClick}>
            Start Automation
          </button>
          <button className="secondary-btn" onClick={handleDemoClick}>
            View Demo
          </button>
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
              onClick={() => handleCardClick(type)}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${type.title}`}
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
              <button 
                className="learn-more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLearnMoreClick(type.title.toLowerCase().replace(' ', '_'));
                }}
              >
                Learn More
              </button>
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
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => handleProcessStepClick(step)}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about step ${step.step}: ${step.title}`}
            >
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <button 
                className="step-details-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewDetailsClick(step.step);
                }}
              >
                View Details
              </button>
            </motion.div>
          ))}
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
            <button 
              className="explore-btn"
              onClick={() => handleExploreClick('email_processing')}
            >
              Explore Solution
            </button>
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
            <button 
              className="explore-btn"
              onClick={() => handleExploreClick('form_processing')}
            >
              Explore Solution
            </button>
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
            <button 
              className="explore-btn"
              onClick={() => handleExploreClick('invoice_processing')}
            >
              Explore Solution
            </button>
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
            <button 
              className="explore-btn"
              onClick={() => handleExploreClick('report_generation')}
            >
              Explore Solution
            </button>
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
          <div className="cta-buttons">
            <button className="cta-btn" onClick={handleAssessmentClick}>
              Get Free Assessment
            </button>
            <button className="secondary-cta-btn" onClick={handleDemoClick}>
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              ×
            </button>
            <div className="modal-header">
              {selectedItem.icon && (
                <div className="card-icon">{selectedItem.icon}</div>
              )}
              {selectedItem.step && (
                <div className="step-number-large">{selectedItem.step}</div>
              )}
              <h2>{selectedItem.title}</h2>
            </div>
            <div className="modal-description">
              {selectedItem.details || selectedItem.description}
            </div>
            {selectedItem.benefits && (
              <div className="modal-benefits">
                <h3>Key Benefits</h3>
                <ul>
                  {selectedItem.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            {selectedItem.useCases && (
              <div className="modal-features">
                <h3>Use Cases</h3>
                <ul>
                  {selectedItem.useCases.map((useCase, index) => (
                    <li key={index}>{useCase}</li>
                  ))}
                </ul>
              </div>
            )}
            <button className="modal-cta" onClick={handleGetStartedClick}>
              Get Started Today
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
  );
}

export default DataAutomation;