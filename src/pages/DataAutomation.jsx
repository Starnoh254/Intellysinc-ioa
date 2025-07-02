import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaRobot, FaCogs, FaDatabase, FaChartLine, FaPlay, FaPause, FaStop,
  FaEye, FaEdit, FaDownload, FaUpload, FaCheckCircle, FaArrowRight,
  FaLightbulb, FaCode, FaSitemap, FaNetworkWired, FaCloud, FaMobile
} from 'react-icons/fa';
import '../styles/DataAutomation.css';
import performanceMonitor, { trackButtonClick, trackCardInteraction, trackModalInteraction } from '../utils/performance';
import Toast from '../components/Toast';

function DataAutomation() {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [toast, setToast] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isAutomationRunning, setIsAutomationRunning] = useState(false);
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

  // Interactive automation process
  const automationProcess = [
    {
      step: 1,
      title: "Data Input",
      icon: <FaUpload />,
      description: "Capture data from multiple sources",
      status: "completed",
      details: "Automatically capture data from emails, documents, forms, and databases",
      metrics: { speed: "10x faster", accuracy: "99.2%" }
    },
    {
      step: 2,
      title: "Processing",
      icon: <FaCogs />,
      description: "AI-powered data processing",
      status: "active",
      details: "Intelligent processing with OCR, validation, and classification",
      metrics: { speed: "5x faster", accuracy: "98.7%" }
    },
    {
      step: 3,
      title: "Validation",
      icon: <FaCheckCircle />,
      description: "Quality assurance checks",
      status: "pending",
      details: "Automated validation rules and error detection",
      metrics: { speed: "3x faster", accuracy: "99.8%" }
    },
    {
      step: 4,
      title: "Output",
      icon: <FaDownload />,
      description: "Deliver processed data",
      status: "pending",
      details: "Export to systems, generate reports, or trigger workflows",
      metrics: { speed: "8x faster", accuracy: "99.5%" }
    }
  ];

  // Automation types with interactive previews
  const automationTypes = [
    {
      title: "Document Processing",
      description: "Automatically extract, classify, and process documents using AI and OCR technology",
      icon: <FaUpload />,
      features: ["OCR & Text Extraction", "Document Classification", "Data Validation", "Workflow Routing"],
      benefits: ["80% faster processing", "99% accuracy rate", "24/7 availability", "Scalable solution"],
      useCases: ["Invoice processing", "Contract analysis", "Form data extraction", "Report generation"],
      preview: {
        input: "📄 Invoice.pdf",
        process: "🔍 OCR Processing → 📊 Data Extraction → ✅ Validation",
        output: "📋 Structured Data"
      }
    },
    {
      title: "Workflow Automation",
      description: "Streamline business processes with intelligent workflow automation and approval systems",
      icon: <FaSitemap />,
      features: ["Process Mapping", "Approval Workflows", "Task Assignment", "Status Tracking"],
      benefits: ["Reduced manual errors", "Faster approvals", "Better compliance", "Process visibility"],
      useCases: ["Employee onboarding", "Purchase approvals", "Customer service routing", "Quality control"],
      preview: {
        input: "👤 New Employee",
        process: "📝 Document Collection → 🔍 Background Check → ✅ Approval",
        output: "🎉 Onboarded Employee"
      }
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect and synchronize data across multiple systems and platforms",
      icon: <FaNetworkWired />,
      features: ["API Integration", "Real-time Sync", "Data Transformation", "Error Handling"],
      benefits: ["Unified data view", "Real-time updates", "Reduced data silos", "Improved decision making"],
      useCases: ["CRM integration", "ERP connectivity", "Marketing automation", "Analytics dashboards"],
      preview: {
        input: "🔄 Multiple Systems",
        process: "🔗 API Connection → 🔄 Data Sync → 📊 Unified View",
        output: "📈 Integrated Data"
      }
    },
    {
      title: "Reporting Automation",
      description: "Generate and distribute reports automatically with scheduled delivery and custom dashboards",
      icon: <FaChartLine />,
      features: ["Scheduled Reports", "Custom Dashboards", "Email Distribution", "Mobile Access"],
      benefits: ["Timely insights", "Reduced manual work", "Consistent reporting", "Better accessibility"],
      useCases: ["Financial reporting", "Sales analytics", "Performance metrics", "Compliance reports"],
      preview: {
        input: "📊 Raw Data",
        process: "📈 Analysis → 📋 Report Generation → 📧 Distribution",
        output: "📄 Automated Reports"
      }
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      title: "Time Savings",
      value: "80%",
      description: "Reduce manual data entry and processing time",
      icon: <FaPlay />,
      trend: "up"
    },
    {
      title: "Error Reduction",
      value: "95%",
      description: "Minimize human errors in data processing",
      icon: <FaCheckCircle />,
      trend: "up"
    },
    {
      title: "Cost Efficiency",
      value: "60%",
      description: "Lower operational costs through automation",
      icon: <FaChartLine />,
      trend: "up"
    },
    {
      title: "Scalability",
      value: "10x",
      description: "Handle increased workloads without additional staff",
      icon: <FaRobot />,
      trend: "up"
    }
  ];

  // Industry applications
  const industryApplications = [
    {
      industry: "Healthcare",
      icon: "🏥",
      automations: ["Patient Records", "Claims Processing", "Appointment Scheduling", "Billing Automation"],
      benefits: ["HIPAA Compliance", "Reduced Errors", "Faster Processing", "Better Patient Care"]
    },
    {
      industry: "Finance",
      icon: "💰",
      automations: ["Loan Processing", "Risk Assessment", "Compliance Monitoring", "Customer Onboarding"],
      benefits: ["Regulatory Compliance", "Risk Mitigation", "Faster Processing", "Improved Accuracy"]
    },
    {
      industry: "Manufacturing",
      icon: "🏭",
      automations: ["Quality Control", "Inventory Management", "Production Planning", "Maintenance Scheduling"],
      benefits: ["Reduced Downtime", "Improved Quality", "Cost Optimization", "Better Planning"]
    },
    {
      industry: "Retail",
      icon: "🛍️",
      automations: ["Order Fulfillment", "Inventory Replenishment", "Customer Service", "Returns Processing"],
      benefits: ["Improved CX", "Inventory Optimization", "Operational Efficiency", "Faster Processing"]
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

  const handleStepClick = (step) => {
    setActiveStep(step.step - 1);
  };

  const toggleAutomation = () => {
    setIsAutomationRunning(!isAutomationRunning);
  };

  const closeModal = () => {
    trackModalInteraction('close', selectedItem?.title || 'process_step');
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleDemoClick = () => {
    trackButtonClick('demo_button');
    navigate('/CaseStudies');
  };

  const handleAssessmentClick = () => {
    trackButtonClick('assessment_button');
    navigate('/Contact?subject=Data Automation Assessment Request');
  };

  const handleGetStartedClick = () => {
    trackButtonClick('get_started_modal');
    navigate('/Contact?subject=Data Automation Inquiry');
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
      {/* Hero Section with Automation Preview */}
      <section className="da-hero">
        <div className="hero-background">
          <div className="automation-preview">
            <div className="preview-header">
              <div className="preview-controls">
                <button 
                  className={`control-btn ${isAutomationRunning ? 'running' : ''}`}
                  onClick={toggleAutomation}
                >
                  {isAutomationRunning ? <FaPause /> : <FaPlay />}
                </button>
                <button className="control-btn">
                  <FaStop />
                </button>
                <button className="control-btn">
                  <FaEye />
                </button>
              </div>
              <div className="preview-title">Live Automation Preview</div>
              <div className="preview-status">
                <span className={`status-indicator ${isAutomationRunning ? 'active' : 'idle'}`}></span>
                {isAutomationRunning ? 'Running' : 'Idle'}
              </div>
            </div>
            <div className="preview-content">
              <div className="automation-flow">
                <div className="flow-step">📄 Input</div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">⚙️ Process</div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">✅ Output</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge"
          >
            <FaRobot />
            <span>Data Automation</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Transform Manual Processes into <span className="gradient-text">Intelligent Automation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Reduce processing time by 80% with AI-powered data automation that learns and adapts to your business needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-actions"
          >
            <button className="cta-button primary" onClick={handleAssessmentClick}>
              <span>Start Assessment</span>
              <FaArrowRight />
            </button>
            <button className="cta-button secondary" onClick={handleDemoClick}>
              <FaPlay />
              <span>Watch Demo</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Process Visualization */}
      <section className="process-visualization">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>See Automation in Action</h2>
            <p>Watch how data flows through our intelligent automation process</p>
          </motion.div>

          <div className="process-timeline">
            {automationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                className={`process-step ${step.status} ${activeStep === index ? 'active' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => handleStepClick(step)}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-details">
                    <p>{step.details}</p>
                    <div className="step-metrics">
                      <span className="metric">
                        <strong>{step.metrics.speed}</strong> faster
                      </span>
                      <span className="metric">
                        <strong>{step.metrics.accuracy}</strong> accuracy
                      </span>
                    </div>
                  </div>
                </div>
                <div className="step-status">
                  <span className={`status-badge ${step.status}`}>
                    {step.status === 'completed' ? '✓' : step.status === 'active' ? '⟳' : '○'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types with Interactive Previews */}
      <section className="automation-types">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Comprehensive Automation Solutions</h2>
            <p>Choose the right automation type for your specific needs</p>
          </motion.div>

          <div className="automation-grid">
            {automationTypes.map((type, index) => (
              <motion.div
                key={index}
                className="automation-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleCardClick(type)}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="card-header">
                  <div className="card-icon">{type.icon}</div>
                  <h3>{type.title}</h3>
                </div>
                <p className="card-description">{type.description}</p>
                
                <div className="automation-preview">
                  <div className="preview-step">
                    <span className="step-label">Input:</span>
                    <span className="step-content">{type.preview.input}</span>
                  </div>
                  <div className="preview-step">
                    <span className="step-label">Process:</span>
                    <span className="step-content">{type.preview.process}</span>
                  </div>
                  <div className="preview-step">
                    <span className="step-label">Output:</span>
                    <span className="step-content">{type.preview.output}</span>
                  </div>
                </div>

                <div className="card-features">
                  <h4>Key Features:</h4>
                  <div className="features-list">
                    {type.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>

                <div className="card-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="performance-metrics">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Proven Performance Results</h2>
            <p>Real metrics from organizations using our automation solutions</p>
          </motion.div>

          <div className="metrics-grid">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="metric-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="metric-icon">{metric.icon}</div>
                <div className="metric-value">{metric.value}</div>
                <h3>{metric.title}</h3>
                <p>{metric.description}</p>
                <div className="metric-trend">
                  <span className={`trend-indicator ${metric.trend}`}>
                    {metric.trend === 'up' ? '↗' : '↘'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="industry-applications">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Industry-Specific Solutions</h2>
            <p>Tailored automation solutions for your industry's unique challenges</p>
          </motion.div>

          <div className="applications-grid">
            {industryApplications.map((app, index) => (
              <motion.div
                key={index}
                className="application-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="app-icon">{app.icon}</div>
                <h3>{app.industry}</h3>
                <div className="automations-list">
                  <h4>Key Automations:</h4>
                  <ul>
                    {app.automations.map((automation, idx) => (
                      <li key={idx}>{automation}</li>
                    ))}
                  </ul>
                </div>
                <div className="benefits-list">
                  {app.benefits.map((benefit, idx) => (
                    <span key={idx} className="benefit-tag">{benefit}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="da-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Automate Your Data Processes?</h2>
            <p>Join thousands of organizations that have transformed their operations with intelligent automation</p>
            <div className="cta-actions">
              <button className="cta-button primary" onClick={handleGetStartedClick}>
                <span>Get Started Today</span>
                <FaArrowRight />
              </button>
              <button className="cta-button secondary" onClick={handleAssessmentClick}>
                <FaEye />
                <span>Free Assessment</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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