import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaDatabase, FaFileAlt, FaEnvelope, FaCheckCircle, FaArrowRight,
  FaRocket, FaShieldAlt, FaClock, FaMobile, FaCloud, FaBrain,
  FaNetworkWired, FaLightbulb, FaChartLine, FaUsers
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick } from "../utils/performance";
import "../styles/DocumentManagement.css";
import "../styles/DataAutomation.css";

function DataProcessing() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    performanceMonitor.trackPageLoad();
    document.title = "Data Processing Services | IntelliSync OA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Automate data entry, forms processing, and email management with our intelligent data processing solutions. Reduce errors and increase efficiency.'
      );
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Data Processing Services",
      "description": "Intelligent data processing and automation solutions",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync Office Automation Limited"
      },
      "offers": {
        "@type": "Offer",
        "description": "Data Entry Automation, Forms Processing, and Email Management"
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

  const dataServices = [
    {
      icon: <FaDatabase />, title: "Data Entry Automation", description: "Automate manual data entry tasks with intelligent OCR and data validation."
    },
    {
      icon: <FaFileAlt />, title: "Forms Processing", description: "Automated processing of forms and applications with intelligent data extraction."
    },
    {
      icon: <FaEnvelope />, title: "Email Management", description: "Automated email processing, classification, and response management."
    }
  ];

  const advantages = [
    { icon: <FaCheckCircle />, title: "Reduce Errors", desc: "Eliminate manual errors and improve data accuracy." },
    { icon: <FaRocket />, title: "Faster Processing", desc: "Process data and forms up to 10x faster." },
    { icon: <FaShieldAlt />, title: "Compliance", desc: "Ensure compliance and data security." },
    { icon: <FaClock />, title: "Save Time", desc: "Automate repetitive tasks and save valuable time." }
  ];

  const industries = [
    { icon: "🏥", name: "Healthcare" },
    { icon: "💰", name: "Finance" },
    { icon: "🏛️", name: "Government" },
    { icon: "🎓", name: "Education" },
    { icon: "⚖️", name: "Legal" },
    { icon: "🛡️", name: "Insurance" },
    { icon: "🏢", name: "Real Estate" },
    { icon: "🏭", name: "Manufacturing" }
  ];

  const metrics = [
    { icon: <FaChartLine />, title: "Time Savings", value: "90%", desc: "Reduce data entry and processing time." },
    { icon: <FaCheckCircle />, title: "Accuracy", value: "99%", desc: "Achieve near-perfect data accuracy." },
    { icon: <FaUsers />, title: "Productivity", value: "5x", desc: "Increase team productivity." },
    { icon: <FaCloud />, title: "Scalability", value: "Unlimited", desc: "Scale operations without extra staff." }
  ];

  const handleGetStarted = () => {
    trackButtonClick('get_started_data_processing');
    navigate('/Contact?subject=Data Processing Services Inquiry');
  };

  return (
    <ErrorBoundary>
      <div className="data-automation-page">
        <div className="main-content">
          {/* Hero Section */}
          <section className="da-hero" style={{ background: "url('./images/data-processing.jpg') center center/cover no-repeat" }}>
            <div className="hero-overlay" />
            <div className="hero-content">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
                Data Processing Services
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
                Automate data entry, forms processing, and email management with our intelligent data processing solutions. Reduce errors and increase efficiency.
              </motion.p>
            </div>
          </section>

          {/* Split Section 1: Services & Advantages */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Our Data Processing Services</h2>
              <ul className="dm-feature-list lively-list">
                {dataServices.map((service, i) => (
                  <li key={i}><span className="feature-icon">{service.icon}</span><strong>{service.title}:</strong> {service.description}</li>
                ))}
              </ul>
            </div>
            <div className="split-half">
              <h2 className="section-header gradient-underline">Key Advantages</h2>
              <ul className="dm-feature-list lively-list">
                {advantages.map((adv, i) => (
                  <li key={i}><span className="feature-icon">{adv.icon}</span><strong>{adv.title}:</strong> {adv.desc}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Split Section 2: Industries & Metrics */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Industries We Serve</h2>
              <ul className="dm-feature-list lively-list">
                {industries.map((ind, i) => (
                  <li key={ind.name}><span className="feature-icon">{ind.icon}</span> {ind.name}</li>
                ))}
              </ul>
            </div>
            <div className="split-half">
              <h2 className="section-header gradient-underline">Performance Metrics</h2>
              <ul className="dm-feature-list lively-list">
                {metrics.map((metric, i) => (
                  <li key={metric.title}><span className="feature-icon">{metric.icon}</span><strong>{metric.title}:</strong> <span className="highlight">{metric.value}</span> {metric.desc}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        {/* CTA Section */}
        <section className="dm-cta">
          <div className="cta-content">
            <h2>Ready to Automate Your Data Processing?</h2>
            <p>Discover how IntelliSync can revolutionize your data processes.</p>
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

export default DataProcessing; 