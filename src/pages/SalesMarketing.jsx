import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUsers, FaChartBar, FaCheckCircle, FaArrowRight, FaRocket,
  FaShieldAlt, FaClock, FaMobile, FaCloud, FaBrain, FaNetworkWired,
  FaLightbulb, FaChartLine, FaClipboardList
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick } from "../utils/performance";
import "../styles/DocumentManagement.css";
import "../styles/DataAutomation.css";

function SalesMarketing() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    performanceMonitor.trackPageLoad();
    document.title = "Sales & Marketing Services | IntelliSync OA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Optimize your sales and marketing operations with automated order processing and comprehensive CRM solutions.'
      );
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sales & Marketing Services",
      "description": "Sales and marketing automation solutions",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync Office Automation Limited"
      },
      "offers": {
        "@type": "Offer",
        "description": "Sales Order Processing and Customer Relationship Management"
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

  // Sales & Marketing services
  const salesServices = [
    { icon: <FaClipboardList />, title: "Sales Order Processing", desc: "Automated sales order processing with integrated customer management." },
    { icon: <FaUsers />, title: "Customer Relationship Management", desc: "Integrated CRM with automated lead management and customer engagement." }
  ];

  // Key features
  const keyFeatures = [
    { icon: <FaChartLine />, title: "Sales Analytics", desc: "Comprehensive analytics and reporting for data-driven decisions." },
    { icon: <FaMobile />, title: "Mobile Access", desc: "Access your sales data and CRM from anywhere, anytime." },
    { icon: <FaCloud />, title: "Cloud-Based", desc: "Secure, scalable cloud solutions with automatic updates." },
    { icon: <FaNetworkWired />, title: "Easy Integration", desc: "Seamless integration with your existing business systems." }
  ];

  // Industries served
  const industries = [
    { icon: "🛒", name: "Retail" },
    { icon: "🏭", name: "Manufacturing" },
    { icon: "🔧", name: "Services" },
    { icon: "💻", name: "Technology" },
    { icon: "🏥", name: "Healthcare" },
    { icon: "💰", name: "Finance" },
    { icon: "🏢", name: "Real Estate" },
    { icon: "🚗", name: "Automotive" }
  ];

  // Key benefits
  const benefits = [
    { icon: <FaChartBar />, title: "Faster Order Processing", value: "5x", desc: "Process orders 5x faster." },
    { icon: <FaCheckCircle />, title: "Error Reduction", value: "90%", desc: "Reduce order errors by 90%." },
    { icon: <FaRocket />, title: "Lead Conversion", value: "40%", desc: "Increase lead conversion by 40%." },
    { icon: <FaCloud />, title: "Scalability", value: "Unlimited", desc: "Scale sales and marketing across teams." }
  ];

  const handleGetStarted = () => {
    trackButtonClick('get_started_sales_marketing');
    navigate('/Contact?subject=Sales & Marketing Services Inquiry');
  };

  return (
    <ErrorBoundary>
      <div className="data-automation-page">
        <div className="main-content">
          {/* Hero Section */}
          <section className="da-hero" style={{ background: `url('${import.meta.env.BASE_URL}images/sales-marketing.jpg') center center/cover no-repeat` }}>
            <div className="hero-overlay" />
            <div className="hero-content">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
                Sales & Marketing Services
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
                Optimize your sales and marketing operations with automated order processing and comprehensive CRM solutions.
              </motion.p>
            </div>
          </section>

          {/* Split Section 1: Services & Features */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Our Sales & Marketing Services</h2>
              <ul className="dm-feature-list lively-list">
                {salesServices.map((service) => (
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
                  <li key={benefit.title}><span className="feature-icon">{benefit.icon}</span><strong>{benefit.title}:</strong> {benefit.value} {benefit.desc}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        {/* CTA Section */}
        <section className="dm-cta">
          <div className="cta-content">
            <h2>Ready to Accelerate Your Sales & Marketing?</h2>
            <p>Discover how IntelliSync can help you boost sales and customer engagement.</p>
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

export default SalesMarketing; 