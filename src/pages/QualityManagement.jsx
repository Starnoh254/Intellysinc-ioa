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
import performanceMonitor, { trackButtonClick } from "../utils/performance";
import "../styles/DocumentManagement.css";
import "../styles/DataAutomation.css";

function QualityManagement() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

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
    { icon: <FaCheckCircle />, title: "Quality Management System", desc: "Comprehensive quality management with process control and compliance monitoring." },
    { icon: <FaShieldAlt />, title: "Compliance Management", desc: "Automated compliance monitoring and reporting for regulatory requirements." }
  ];

  // Industries served
  const industries = [
    { icon: "🏭", name: "Manufacturing" },
    { icon: "🏥", name: "Healthcare" },
    { icon: "🍽️", name: "Food & Beverage" },
    { icon: "💊", name: "Pharmaceuticals" },
    { icon: "💰", name: "Finance" },
    { icon: "⚖️", name: "Legal" },
    { icon: "✈️", name: "Aerospace" },
    { icon: "🚗", name: "Automotive" }
  ];

  // Compliance standards
  const complianceStandards = [
    { name: "ISO 9001", desc: "Quality Management Systems" },
    { name: "ISO 14001", desc: "Environmental Management" },
    { name: "ISO 27001", desc: "Information Security" },
    { name: "FDA", desc: "Food and Drug Administration" },
    { name: "GDPR", desc: "Data Protection Regulation" },
    { name: "SOX", desc: "Sarbanes-Oxley Act" }
  ];

  // Key benefits
  const benefits = [
    { icon: <FaChartLine />, title: "Quality Improvement", value: "40%", desc: "Improve product quality by 40%." },
    { icon: <FaCheckCircle />, title: "Compliance", value: "100%", desc: "Ensure 100% regulatory compliance." },
    { icon: <FaRocket />, title: "Efficiency", value: "2x", desc: "Double your process efficiency." },
    { icon: <FaCloud />, title: "Scalability", value: "Unlimited", desc: "Scale quality management across departments." }
  ];

  const handleGetStarted = () => {
    trackButtonClick('get_started_quality');
    navigate('/Contact?subject=Quality Management Services Inquiry');
  };

  return (
    <ErrorBoundary>
      <div className="data-automation-page">
        <div className="main-content">
          {/* Hero Section */}
          <section className="da-hero" style={{ background: "url('/images/quality-management.jpg') center center/cover no-repeat" }}>
            <div className="hero-overlay" />
            <div className="hero-content">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
                Quality Management Services
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
                Comprehensive quality management and compliance solutions. Ensure quality standards and regulatory compliance with our intelligent systems.
              </motion.p>
            </div>
          </section>

          {/* Split Section 1: Services & Industries */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Our Quality Management Services</h2>
              <ul className="dm-feature-list lively-list">
                {qualityServices.map((service) => (
                  <li key={service.title}><span className="feature-icon">{service.icon}</span><strong>{service.title}:</strong> {service.desc}</li>
                ))}
              </ul>
            </div>
            <div className="split-half">
              <h2 className="section-header gradient-underline">Industries We Serve</h2>
              <ul className="dm-feature-list lively-list">
                {industries.map((ind) => (
                  <li key={ind.name}><span className="feature-icon">{ind.icon}</span> {ind.name}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Split Section 2: Compliance Standards & Benefits */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Compliance Standards</h2>
              <ul className="dm-feature-list lively-list">
                {complianceStandards.map((std) => (
                  <li key={std.name}><strong>{std.name}:</strong> {std.desc}</li>
                ))}
              </ul>
            </div>
            <div className="split-half">
              <h2 className="section-header gradient-underline">Key Benefits</h2>
              <ul className="dm-feature-list lively-list">
                {benefits.map((benefit) => (
                  <li key={benefit.title}><span className="feature-icon">{benefit.icon}</span><strong>{benefit.title}:</strong> <span className="highlight">{benefit.value}</span> {benefit.desc}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        {/* CTA Section */}
        <section className="dm-cta">
          <div className="cta-content">
            <h2>Ready to Elevate Your Quality Management?</h2>
            <p>Discover how IntelliSync can help you achieve compliance and excellence.</p>
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

export default QualityManagement; 