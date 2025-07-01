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
import "../styles/QualityManagement.css";

function QualityManagement() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "Quality Management Services | IntelliSync IOA";
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
      <div className="quality-management-page">
        {/* Hero Section */}
        <section className="quality-hero">
          <div className="hero-background">
            <div className="hero-gradient-overlay"></div>
          </div>
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hero-badge"
            >
              <span>✅ Quality Management</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Excellence in <span className="gradient-text">Quality Management</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Ensure quality standards and regulatory compliance with our comprehensive quality management solutions
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
                aria-label="Get Started with Quality Management"
              >
                <span>Get Started</span>
                <FaArrowRight className="arrow-icon" />
              </button>
              <button 
                className="cta-button secondary" 
                onClick={handleWatchDemo}
                aria-label="Watch Quality Management Demo"
              >
                <span>Watch Demo</span>
                <div className="play-icon">▶</div>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="services-overview">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Quality Management Services</h2>
              <p>Comprehensive quality and compliance solutions designed to ensure excellence and regulatory adherence</p>
            </motion.div>

            <div className="services-grid">
              {qualityServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="service-card"
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  <div className="service-features">
                    <h4>Key Features</h4>
                    <ul>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <FaCheckCircle className="feature-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-benefits">
                    <h4>Benefits</h4>
                    <ul>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>
                          <FaRocket className="benefit-icon" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    className="learn-more-btn"
                    onClick={() => handleLearnMore(service)}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="arrow-icon" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="compliance-standards">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Compliance Standards We Support</h2>
              <p>Our solutions help you meet and exceed industry standards and regulatory requirements</p>
            </motion.div>

            <div className="standards-grid">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="standard-card"
                >
                  <div className="standard-icon">📋</div>
                  <h3>{standard.name}</h3>
                  <p>{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="industries-served">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Industries We Serve</h2>
              <p>Our quality management solutions are designed for regulated industries</p>
            </motion.div>

            <div className="industries-grid">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="industry-card"
                >
                  <div className="industry-icon">{industry.icon}</div>
                  <h3>{industry.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Why Choose Our Quality Management Solutions</h2>
              <p>The advantages that set our solutions apart</p>
            </motion.div>

            <div className="advantages-grid">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaShieldAlt className="advantage-icon" />
                <h3>Regulatory Expertise</h3>
                <p>Deep understanding of industry regulations and compliance requirements</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaChartLine className="advantage-icon" />
                <h3>Real-time Monitoring</h3>
                <p>Continuous quality monitoring and instant alerting for issues</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaNetworkWired className="advantage-icon" />
                <h3>Seamless Integration</h3>
                <p>Easy integration with existing quality and ERP systems</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaLightbulb className="advantage-icon" />
                <h3>Continuous Improvement</h3>
                <p>AI-powered insights for ongoing quality optimization</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="quality-cta">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Ready to Elevate Your Quality Standards?</h2>
              <p>Join organizations that have achieved excellence in quality management with our comprehensive solutions</p>
              <div className="cta-actions">
                <button 
                  className="cta-button primary"
                  onClick={handleStartFreeTrial}
                  aria-label="Start Free Trial"
                >
                  Start Free Trial
                </button>
                <button 
                  className="cta-button secondary"
                  onClick={handleScheduleDemo}
                  aria-label="Schedule Demo"
                >
                  Schedule Demo
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