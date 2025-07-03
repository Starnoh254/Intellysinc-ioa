import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaCheckCircle, FaShieldAlt, FaChartLine, FaUsers, FaCogs, 
  FaLightbulb, FaFileAlt, FaDatabase, FaCloud, FaMobile, 
  FaDesktop, FaServer, FaSearch, FaLock, FaSync, FaRobot, 
  FaBrain, FaNetworkWired, FaIndustry, FaHospital, FaUniversity, 
  FaCar, FaTruck, FaBuilding, FaCalculator, FaChartBar, 
  FaClipboardList, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, 
  FaClock, FaArrowRight, FaRocket
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick, trackCardInteraction } from "../utils/performance";
import "../styles/DocumentManagement.css";

function QualityManagement() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "Quality Management Services | IntelliSync OA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Comprehensive quality management and compliance solutions. Ensure quality standards and regulatory compliance with our intelligent systems.'
      );
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Quality Management Services",
      "description": "Quality management and compliance solutions",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync Office Automation Limited"
      },
      "offers": {
        "@type": "Offer",
        "description": "Quality Management System and Compliance Management"
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

  // Quality management services
  const qualityServices = [
    {
      icon: <FaCheckCircle />,
      title: "Quality Management System",
      description: "Comprehensive quality management with process control and compliance monitoring.",
      features: [
        "Process control and monitoring",
        "Quality metrics and KPIs",
        "Compliance tracking and reporting",
        "Audit management system",
        "Corrective action workflows",
        "Real-time quality analytics"
      ],
      benefits: [
        "Improve product quality by 40%",
        "Reduce quality-related costs",
        "Ensure consistent standards",
        "Streamline quality processes"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting for regulatory requirements.",
      features: [
        "Regulatory requirement tracking",
        "Automated compliance reporting",
        "Audit trail management",
        "Risk assessment tools",
        "Policy management system",
        "Training tracking and certification"
      ],
      benefits: [
        "Ensure 100% regulatory compliance",
        "Reduce compliance risks",
        "Automate reporting processes",
        "Maintain audit readiness"
      ]
    }
  ];

  // Industries served
  const industries = [
    { name: "Manufacturing", icon: "🏭" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Food & Beverage", icon: "🍽️" },
    { name: "Pharmaceuticals", icon: "💊" },
    { name: "Finance", icon: "💰" },
    { name: "Legal", icon: "⚖️" },
    { name: "Aerospace", icon: "✈️" },
    { name: "Automotive", icon: "🚗" }
  ];

  // Compliance standards
  const complianceStandards = [
    { name: "ISO 9001", description: "Quality Management Systems" },
    { name: "ISO 14001", description: "Environmental Management" },
    { name: "ISO 27001", description: "Information Security" },
    { name: "FDA", description: "Food and Drug Administration" },
    { name: "GDPR", description: "Data Protection Regulation" },
    { name: "SOX", description: "Sarbanes-Oxley Act" }
  ];

  // Button handlers
  const handleGetStarted = () => {
    trackButtonClick('get_started_quality');
    navigate('/Contact?subject=Quality Management Services Inquiry');
  };

  const handleWatchDemo = () => {
    trackButtonClick('watch_demo_quality');
    setToast({ message: 'Demo video coming soon!', type: 'info' });
  };

  const handleLearnMore = (service) => {
    trackButtonClick(`learn_more_${service.title.toLowerCase().replace(/\s+/g, '_')}`);
    navigate(`/Contact?subject=${service.title} Service Inquiry`);
  };

  const handleStartFreeTrial = () => {
    trackButtonClick('start_free_trial_quality');
    navigate('/Contact?subject=Quality Management Free Trial');
  };

  const handleScheduleDemo = () => {
    trackButtonClick('schedule_demo_quality');
    navigate('/Contact?subject=Quality Management Demo');
  };

  return (
    <ErrorBoundary>
      <div className="document-management-page">
        {/* Hero Section */}
        <section className="dm-hero">
          <div className="hero-content">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
              Quality Management Services
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
              Comprehensive quality management and compliance solutions. Ensure quality standards and regulatory compliance with our intelligent systems.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Our Quality Management Services</h2>
              <ul className="dm-feature-list lively-list">
                {qualityServices.map((service, i) => (
                  <li key={i}><span className="feature-icon">{service.icon}</span><strong>{service.title}:</strong> {service.description}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="dm-section alt">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Industries We Serve</h2>
              <ul className="dm-feature-list lively-list">
                {industries.map((ind, i) => (
                  <li key={i}><span className="feature-icon">{ind.icon}</span> {ind.name}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Compliance Standards Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Compliance Standards</h2>
              <ul className="dm-feature-list lively-list">
                {complianceStandards.map((c, i) => (
                  <li key={i}><span className="feature-icon">{c.icon}</span><strong>{c.name}:</strong> {c.description}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="dm-cta">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="cta-content">
              <h2>Ready to Elevate Your Quality Management?</h2>
              <p>Discover how IntelliSync can ensure compliance and excellence for your organization.</p>
              <div className="cta-actions">
                <button className="cta-button primary" onClick={() => navigate('/Contact')} type="button">
                  <span>Contact us today for a demo!</span>
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </div>
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

export default QualityManagement; 