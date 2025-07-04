import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaMobile, FaMapMarkerAlt, FaCheckCircle, FaArrowRight, FaRocket,
  FaShieldAlt, FaClock, FaCloud, FaBrain, FaNetworkWired, FaLightbulb,
  FaChartLine, FaClipboardList, FaFileAlt, FaUsers
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick } from "../utils/performance";
import "../styles/DocumentManagement.css";
import "../styles/DataAutomation.css";

function MobileSolutions() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    performanceMonitor.trackPageLoad();
    document.title = "Mobile Solutions Services | IntelliSync OA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Mobile document access and field service management solutions. Enable your workforce to work from anywhere with secure mobile applications.'
      );
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile Solutions Services",
      "description": "Mobile document access and field service management",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync Office Automation Limited"
      },
      "offers": {
        "@type": "Offer",
        "description": "Mobile Document Access and Field Service Management"
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

  // Mobile solutions services
  const mobileServices = [
    { icon: <FaFileAlt />, title: "Mobile Document Access", desc: "Secure mobile access to documents and workflows from anywhere." },
    { icon: <FaMapMarkerAlt />, title: "Field Service Management", desc: "Mobile solutions for field service teams with real-time updates and document access." }
  ];

  // Key features
  const keyFeatures = [
    { icon: <FaShieldAlt />, title: "Enterprise Security", desc: "Bank-level security with encryption and compliance standards." },
    { icon: <FaCloud />, title: "Cloud Sync", desc: "Automatic synchronization across all devices and platforms." },
    { icon: <FaMobile />, title: "Cross-Platform", desc: "Works seamlessly on iOS, Android, and web platforms." },
    { icon: <FaNetworkWired />, title: "Easy Integration", desc: "Integrates with your existing business systems." }
  ];

  // Industries served
  const industries = [
    { icon: "🔧", name: "Services" },
    { icon: "🏭", name: "Manufacturing" },
    { icon: "⚡", name: "Utilities" },
    { icon: "🏥", name: "Healthcare" },
    { icon: "🏗️", name: "Construction" },
    { icon: "🚛", name: "Transportation" },
    { icon: "🏢", name: "Real Estate" },
    { icon: "🛍️", name: "Retail" }
  ];

  // Key benefits
  const benefits = [
    { icon: <FaCheckCircle />, title: "Productivity Boost", value: "60%", desc: "Improve productivity by 60%." },
    { icon: <FaRocket />, title: "Faster Response", value: "30%", desc: "Reduce field service costs by 30%." },
    { icon: <FaCloud />, title: "Seamless Access", value: "100%", desc: "Access documents anywhere, anytime." },
    { icon: <FaShieldAlt />, title: "Security", value: "Enterprise", desc: "Enhanced security and compliance." }
  ];

  const handleGetStarted = () => {
    trackButtonClick('get_started_mobile');
    navigate('/Contact?subject=Mobile Solutions Services Inquiry');
  };

  return (
    <ErrorBoundary>
      <div className="data-automation-page">
        <div className="main-content">
          {/* Hero Section */}
          <section className="da-hero" style={{ background: "url('/images/mobile-solutions.jpg') center center/cover no-repeat" }}>
            <div className="hero-overlay" />
            <div className="hero-content">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
                Mobile Solutions Services
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
                Mobile document access and field service management solutions. Enable your workforce to work from anywhere with secure mobile applications.
              </motion.p>
            </div>
          </section>

          {/* Split Section 1: Services & Features */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Our Mobile Solutions</h2>
              <ul className="dm-feature-list lively-list">
                {mobileServices.map((service) => (
                  <li key={service.title}><span className="feature-icon">{service.icon}</span><strong>{service.title}:</strong> {service.desc}</li>
                ))}
              </ul>
            </div>
            <div className="split-half">
              <h2 className="section-header gradient-underline">Key Features</h2>
              <ul className="dm-feature-list lively-list">
                {keyFeatures.map((feature) => (
                  <li key={feature.title}><span className="feature-icon">{feature.icon}</span><strong>{feature.title}:</strong> {feature.desc}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Split Section 2: Industries & Benefits */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Industries We Serve</h2>
              <ul className="dm-feature-list lively-list">
                {industries.map((ind) => (
                  <li key={ind.name}><span className="feature-icon">{ind.icon}</span> {ind.name}</li>
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
            <h2>Ready to Mobilize Your Workforce?</h2>
            <p>Discover how IntelliSync can empower your teams with secure mobile solutions.</p>
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

export default MobileSolutions; 