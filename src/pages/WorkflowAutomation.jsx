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
import performanceMonitor, { trackButtonClick } from "../utils/performance";
import "../styles/DocumentManagement.css";
import "../styles/DataAutomation.css";

function WorkflowAutomation() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [activeWorkflow, setActiveWorkflow] = useState('invoice');

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

  // Workflow processes summary
  const workflowSummaries = [
    { icon: <FaFileInvoice />, title: "Invoice Processing", desc: "Automate invoice capture, validation, and payment workflows." },
    { icon: <FaShoppingCart />, title: "Purchase-to-Pay", desc: "Streamline procurement, approvals, and payment cycles." },
    { icon: <FaUsers />, title: "Employee Onboarding", desc: "Digitize onboarding, document collection, and access setup." }
  ];

  // Automation capabilities
  const automationCapabilities = [
    { icon: <FaCode />, title: "Visual Workflow Designer", desc: "Drag-and-drop interface for creating complex workflows without coding." },
    { icon: <FaSitemap />, title: "Process Orchestration", desc: "Coordinate multiple systems and applications in a single workflow." },
    { icon: <FaLightbulb />, title: "AI-Powered Decisions", desc: "Intelligent decision engines that learn and adapt to your business rules." },
    { icon: <FaChartLine />, title: "Real-time Analytics", desc: "Monitor workflow performance and identify optimization opportunities." }
  ];

  // Industry applications
  const industryApplications = [
    { icon: "🏭", title: "Manufacturing", desc: "Quality Control, Inventory Management, Production Planning, Maintenance Scheduling" },
    { icon: "🏥", title: "Healthcare", desc: "Patient Intake, Claims Processing, Medication Management, Appointment Scheduling" },
    { icon: "💰", title: "Finance", desc: "Loan Processing, Risk Assessment, Compliance Monitoring, Customer Onboarding" },
    { icon: "🛍️", title: "Retail", desc: "Order Fulfillment, Inventory Replenishment, Customer Service, Returns Processing" }
  ];

  // Key metrics
  const metrics = [
    { icon: <FaChartLine />, title: "Time Savings", value: "80%", desc: "Reduce process cycle times." },
    { icon: <FaCheckCircle />, title: "Accuracy", value: "99%", desc: "Achieve near-perfect workflow accuracy." },
    { icon: <FaRocket />, title: "Productivity", value: "4x", desc: "Boost team productivity." },
    { icon: <FaCloud />, title: "Scalability", value: "Unlimited", desc: "Scale automation across departments." }
  ];

  const handleGetStarted = () => {
    trackButtonClick('get_started_workflow');
    navigate('/Contact?subject=Workflow Automation Inquiry');
  };

  return (
    <ErrorBoundary>
      <div className="data-automation-page">
        <div className="main-content">
          {/* Hero Section */}
          <section className="da-hero" style={{ background: "url('/images/workflow-automation.jpg') center center/cover no-repeat" }}>
            <div className="hero-overlay" />
            <div className="hero-content">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
                Workflow Automation
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
                Streamline your business processes with our comprehensive workflow automation solutions. From invoice processing to employee onboarding, we automate it all.
              </motion.p>
            </div>
          </section>

          {/* Split Section 1: Workflow Summaries & Capabilities */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Workflow Solutions</h2>
              <ul className="dm-feature-list lively-list">
                {workflowSummaries.map((item) => (
                  <li key={item.title}><span className="feature-icon">{item.icon}</span><strong>{item.title}:</strong> {item.desc}</li>
                ))}
              </ul>
            </div>
            <div className="split-half">
              <h2 className="section-header gradient-underline">Automation Capabilities</h2>
              <ul className="dm-feature-list lively-list">
                {automationCapabilities.map((item) => (
                  <li key={item.title}><span className="feature-icon">{item.icon}</span><strong>{item.title}:</strong> {item.desc}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Split Section 2: Industry Applications & Metrics */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Industry Applications</h2>
              <ul className="dm-feature-list lively-list">
                {industryApplications.map((item) => (
                  <li key={item.title}><span className="feature-icon">{item.icon}</span> {item.title}: {item.desc}</li>
                ))}
              </ul>
            </div>
            <div className="split-half">
              <h2 className="section-header gradient-underline">Key Metrics</h2>
              <ul className="dm-feature-list lively-list">
                {metrics.map((metric) => (
                  <li key={metric.title}><span className="feature-icon">{metric.icon}</span><strong>{metric.title}:</strong> <span className="highlight">{metric.value}</span> {metric.desc}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        {/* CTA Section */}
        <section className="dm-cta">
          <div className="cta-content">
            <h2>Ready to Automate Your Workflows?</h2>
            <p>Discover how IntelliSync can streamline your business processes.</p>
            <div className="cta-actions">
              <button className="cta-button primary" onClick={handleGetStarted} type="button">
                <span>Contact us today for a demo!</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default WorkflowAutomation; 