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
import "../styles/DocumentManagement.css";

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
      <div className="document-management-page">
        {/* Hero Section */}
        <section className="dm-hero">
          <div className="hero-content">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
              Workflow Automation
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
              Streamline your business processes with our comprehensive workflow automation solutions. From invoice processing to employee onboarding, we automate it all.
            </motion.p>
          </div>
        </section>

        {/* Workflow Processes Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Workflow Processes</h2>
              <ul className="dm-feature-list lively-list">
                {Object.values(workflowProcesses).map((proc, i) => (
                  <li key={i}><span className="feature-icon">{proc.icon}</span><strong>{proc.name}:</strong> {proc.steps.map(step => step.name).join(', ')}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="dm-section alt">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Key Capabilities</h2>
              <ul className="dm-feature-list lively-list">
                {automationCapabilities.map((cap, i) => (
                  <li key={i}><span className="feature-icon">{cap.icon}</span><strong>{cap.title}:</strong> {cap.description}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Industries We Serve</h2>
              <ul className="dm-feature-list lively-list">
                {industryApplications.map((ind, i) => (
                  <li key={i}><span className="feature-icon">{ind.icon}</span> {ind.industry}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="dm-cta">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="cta-content">
              <h2>Ready to Automate Your Workflows?</h2>
              <p>Discover how IntelliSync can streamline your business processes.</p>
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