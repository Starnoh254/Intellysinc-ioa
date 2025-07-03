import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaLock, FaShieldAlt, FaCheckCircle, FaArrowRight, FaRocket,
  FaClock, FaMobile, FaCloud, FaNetworkWired, FaChartLine, FaFileAlt, FaDatabase
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick } from "../utils/performance";
import "../styles/DocumentManagement.css";
import "../styles/DataAutomation.css";

function SecurityServices() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    performanceMonitor.trackPageLoad();
    document.title = "Security Services | IntelliSync OA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Enterprise-grade document security and data protection solutions. Secure your business data with advanced encryption and compliance features.'
      );
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Security Services",
      "description": "Document security and data protection solutions",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync Office Automation Limited"
      },
      "offers": {
        "@type": "Offer",
        "description": "Document Security and Data Protection"
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

  // Security services
  const securityServices = [
    { icon: <FaFileAlt />, title: "Document Security", desc: "Advanced security features for document protection and access control." },
    { icon: <FaDatabase />, title: "Data Protection", desc: "Comprehensive data protection with backup, recovery, and disaster planning." }
  ];

  // Industries served
  const industries = [
    { icon: "💰", name: "Finance" },
    { icon: "🏥", name: "Healthcare" },
    { icon: "⚖️", name: "Legal" },
    { icon: "🏛️", name: "Government" },
    { icon: "💻", name: "Technology" },
    { icon: "🛡️", name: "Insurance" },
    { icon: "🎓", name: "Education" },
    { icon: "🏭", name: "Manufacturing" }
  ];

  // Security standards
  const securityStandards = [
    { name: "ISO 27001", desc: "Information Security Management" },
    { name: "SOC 2", desc: "Security, Availability, Processing Integrity" },
    { name: "GDPR", desc: "Data Protection Regulation" },
    { name: "HIPAA", desc: "Healthcare Data Protection" },
    { name: "PCI DSS", desc: "Payment Card Industry Security" },
    { name: "SOX", desc: "Sarbanes-Oxley Compliance" }
  ];

  // Key benefits
  const benefits = [
    { icon: <FaCheckCircle />, title: "Compliance", value: "100%", desc: "Ensure regulatory compliance." },
    { icon: <FaShieldAlt />, title: "Protection", value: "Enterprise", desc: "Enterprise-grade data protection." },
    { icon: <FaRocket />, title: "Business Continuity", value: "24/7", desc: "Ensure business continuity and disaster recovery." },
    { icon: <FaCloud />, title: "Secure Access", value: "Global", desc: "Secure access from anywhere." }
  ];

  const handleGetStarted = () => {
    trackButtonClick('get_started_security');
    navigate('/Contact?subject=Security Services Inquiry');
  };

  return (
    <ErrorBoundary>
      <div className="data-automation-page">
        <div className="main-content">
          {/* Hero Section */}
          <section className="da-hero" style={{ background: "url('/images/security-services.jpg') center center/cover no-repeat" }}>
            <div className="hero-overlay" />
            <div className="hero-content">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
                Security Services
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
                Enterprise-grade document security and data protection solutions. Secure your business data with advanced encryption and compliance features.
              </motion.p>
            </div>
          </section>

          {/* Split Section 1: Services & Industries */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Our Security Services</h2>
              <ul className="dm-feature-list lively-list">
                {securityServices.map((service) => (
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

          {/* Split Section 2: Security Standards & Benefits */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Security Standards</h2>
              <ul className="dm-feature-list lively-list">
                {securityStandards.map((std) => (
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
            <h2>Ready to Secure Your Business?</h2>
            <p>Discover how IntelliSync can protect your data and ensure compliance.</p>
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

export default SecurityServices; 