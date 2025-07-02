import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaCogs, FaFileInvoice, FaShoppingCart, FaUsers, FaChartLine,
  FaCheckCircle, FaArrowRight, FaRocket, FaShieldAlt, FaClock,
  FaMobile, FaCloud, FaDatabase, FaNetworkWired, FaLightbulb,
  FaPlay, FaPause, FaStop, FaEdit, FaEye, FaCode, FaSitemap
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick, trackCardInteraction } from "../utils/performance";
import "../styles/WorkflowAutomation.css";

function WorkflowAutomation() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [activeWorkflow, setActiveWorkflow] = useState('invoice');
  const [isPlaying, setIsPlaying] = useState(false);

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "Workflow Automation Services | IntelliSync OA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Streamline your business processes with our comprehensive workflow automation solutions. From invoice processing to employee onboarding, we automate it all.'
      );
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Workflow Automation Services",
      "description": "Comprehensive workflow automation solutions for business processes",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync Office Automation Limited"
      },
      "offers": {
        "@type": "Offer",
        "description": "Invoice Processing, Purchase-to-Pay, Employee Onboarding, and Business Process Automation"
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

  // Interactive workflow processes
  const workflowProcesses = {
    invoice: {
      name: "Invoice Processing",
      icon: <FaFileInvoice />,
      steps: [
        { id: 1, name: "Document Capture", status: "completed", time: "0.5s" },
        { id: 2, name: "OCR Processing", status: "completed", time: "2.1s" },
        { id: 3, name: "Data Validation", status: "completed", time: "1.8s" },
        { id: 4, name: "Approval Routing", status: "active", time: "5.2s" },
        { id: 5, name: "Payment Processing", status: "pending", time: "0s" }
      ],
      metrics: { timeSaved: "80%", accuracy: "99.2%", costReduction: "65%" }
    },
    purchase: {
      name: "Purchase-to-Pay",
      icon: <FaShoppingCart />,
      steps: [
        { id: 1, name: "PO Creation", status: "completed", time: "1.2s" },
        { id: 2, name: "Vendor Approval", status: "completed", time: "3.5s" },
        { id: 3, name: "Order Processing", status: "active", time: "8.1s" },
        { id: 4, name: "Receiving", status: "pending", time: "0s" },
        { id: 5, name: "Invoice Matching", status: "pending", time: "0s" },
        { id: 6, name: "Payment", status: "pending", time: "0s" }
      ],
      metrics: { timeSaved: "75%", accuracy: "98.7%", costReduction: "70%" }
    },
    onboarding: {
      name: "Employee Onboarding",
      icon: <FaUsers />,
      steps: [
        { id: 1, name: "Application Review", status: "completed", time: "2.0s" },
        { id: 2, name: "Document Collection", status: "completed", time: "4.5s" },
        { id: 3, name: "Background Check", status: "active", time: "12.3s" },
        { id: 4, name: "System Access Setup", status: "pending", time: "0s" },
        { id: 5, name: "Training Assignment", status: "pending", time: "0s" }
      ],
      metrics: { timeSaved: "70%", accuracy: "99.5%", costReduction: "55%" }
    }
  };

  // Automation capabilities
  const automationCapabilities = [
    {
      icon: <FaCode />,
      title: "Visual Workflow Designer",
      description: "Drag-and-drop interface for creating complex workflows without coding",
      features: ["Intuitive Interface", "Pre-built Templates", "Custom Logic", "Version Control"]
    },
    {
      icon: <FaSitemap />,
      title: "Process Orchestration",
      description: "Coordinate multiple systems and applications in a single workflow",
      features: ["Multi-system Integration", "Error Handling", "Retry Logic", "Monitoring"]
    },
    {
      icon: <FaLightbulb />,
      title: "AI-Powered Decisions",
      description: "Intelligent decision engines that learn and adapt to your business rules",
      features: ["Machine Learning", "Pattern Recognition", "Predictive Analytics", "Auto-optimization"]
    },
    {
      icon: <FaChartLine />,
      title: "Real-time Analytics",
      description: "Monitor workflow performance and identify optimization opportunities",
      features: ["Live Dashboards", "Performance Metrics", "Bottleneck Detection", "ROI Tracking"]
    }
  ];

  // Industry applications
  const industryApplications = [
    {
      industry: "Manufacturing",
      icon: "🏭",
      workflows: ["Quality Control", "Inventory Management", "Production Planning", "Maintenance Scheduling"],
      benefits: ["Reduced Downtime", "Improved Quality", "Cost Optimization"]
    },
    {
      industry: "Healthcare",
      icon: "🏥",
      workflows: ["Patient Intake", "Claims Processing", "Medication Management", "Appointment Scheduling"],
      benefits: ["Better Patient Care", "Compliance", "Reduced Errors"]
    },
    {
      industry: "Finance",
      icon: "💰",
      workflows: ["Loan Processing", "Risk Assessment", "Compliance Monitoring", "Customer Onboarding"],
      benefits: ["Faster Processing", "Risk Mitigation", "Regulatory Compliance"]
    },
    {
      industry: "Retail",
      icon: "🛍️",
      workflows: ["Order Fulfillment", "Inventory Replenishment", "Customer Service", "Returns Processing"],
      benefits: ["Improved CX", "Inventory Optimization", "Operational Efficiency"]
    }
  ];

  // Button handlers
  const handleGetStarted = () => {
    trackButtonClick('get_started_workflow');
    navigate('/Contact?subject=Workflow Automation Inquiry');
  };

  const handleWatchDemo = () => {
    trackButtonClick('watch_demo_workflow');
    setToast({ message: 'Demo video coming soon!', type: 'info' });
  };

  const handleWorkflowChange = (workflow) => {
    setActiveWorkflow(workflow);
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStartFreeTrial = () => {
    trackButtonClick('start_free_trial_workflow');
    navigate('/Contact?subject=Workflow Automation Free Trial');
  };

  const handleScheduleDemo = () => {
    trackButtonClick('schedule_demo_workflow');
    navigate('/Contact?subject=Workflow Automation Demo');
  };

  return (
    <ErrorBoundary>
      <div className="workflow-automation-page">
        {/* Hero Section with Animated Background */}
        <section className="workflow-hero">
          <div className="hero-background">
            <div className="animated-grid">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="grid-cell" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
            <div className="hero-gradient-overlay"></div>
          </div>
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hero-badge"
            >
              <FaCogs />
              <span>Workflow Automation</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Automate Your <span className="gradient-text">Business Processes</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Transform manual workflows into intelligent, automated processes that save time, reduce errors, and boost productivity
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-actions"
            >
              <button 
                className="cta-button primary" 
                onClick={handleGetStarted}
                aria-label="Get Started with Workflow Automation"
              >
                <span>Start Automating</span>
                <FaArrowRight className="arrow-icon" />
              </button>
              <button 
                className="cta-button secondary" 
                onClick={handleWatchDemo}
                aria-label="Watch Demo Video"
              >
                <FaPlay className="play-icon" />
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Interactive Workflow Preview */}
        <section className="workflow-preview">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>See Automation in Action</h2>
              <p>Watch how our workflows transform complex processes into streamlined operations</p>
            </motion.div>

            <div className="workflow-selector">
              {Object.keys(workflowProcesses).map((key) => (
                <button
                  key={key}
                  className={`workflow-tab ${activeWorkflow === key ? 'active' : ''}`}
                  onClick={() => handleWorkflowChange(key)}
                >
                  {workflowProcesses[key].icon}
                  <span>{workflowProcesses[key].name}</span>
                </button>
              ))}
            </div>

            <div className="workflow-display">
              <div className="workflow-controls">
                <button 
                  className={`control-btn ${isPlaying ? 'playing' : ''}`}
                  onClick={togglePlayback}
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className="control-btn">
                  <FaStop />
                </button>
                <button className="control-btn">
                  <FaEdit />
                </button>
              </div>

              <div className="process-flow">
                {workflowProcesses[activeWorkflow].steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`process-step ${step.status}`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="step-number">{step.id}</div>
                    <div className="step-content">
                      <h4>{step.name}</h4>
                      <div className="step-status">
                        <span className={`status-indicator ${step.status}`}></span>
                        <span className="step-time">{step.time}</span>
                      </div>
                    </div>
                    {index < workflowProcesses[activeWorkflow].steps.length - 1 && (
                      <div className="step-connector"></div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="workflow-metrics">
                <div className="metric">
                  <span className="metric-value">{workflowProcesses[activeWorkflow].metrics.timeSaved}</span>
                  <span className="metric-label">Time Saved</span>
                </div>
                <div className="metric">
                  <span className="metric-value">{workflowProcesses[activeWorkflow].metrics.accuracy}</span>
                  <span className="metric-label">Accuracy</span>
                </div>
                <div className="metric">
                  <span className="metric-value">{workflowProcesses[activeWorkflow].metrics.costReduction}</span>
                  <span className="metric-label">Cost Reduction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Capabilities */}
        <section className="automation-capabilities">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Powerful Automation Capabilities</h2>
              <p>Everything you need to build, deploy, and manage intelligent workflows</p>
            </motion.div>

            <div className="capabilities-grid">
              {automationCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="capability-card"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="capability-icon">
                    {capability.icon}
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <div className="capability-features">
                    {capability.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
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
              <p>Tailored workflow automation for your industry's unique challenges</p>
            </motion.div>

            <div className="applications-grid">
              {industryApplications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="application-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="industry-icon">{app.icon}</div>
                  <h3>{app.industry}</h3>
                  <div className="workflows-list">
                    <h4>Key Workflows:</h4>
                    <ul>
                      {app.workflows.map((workflow, idx) => (
                        <li key={idx}>{workflow}</li>
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
        <section className="workflow-cta">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Ready to Automate Your Workflows?</h2>
              <p>Join thousands of organizations that have transformed their operations with intelligent automation</p>
              <div className="cta-actions">
                <button className="cta-button primary" onClick={handleStartFreeTrial}>
                  <span>Start Free Trial</span>
                  <FaArrowRight />
                </button>
                <button className="cta-button secondary" onClick={handleScheduleDemo}>
                  <FaEye />
                  <span>Schedule Demo</span>
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
    </ErrorBoundary>
  );
}

export default WorkflowAutomation; 