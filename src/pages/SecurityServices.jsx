import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaLock, FaShieldAlt, FaCheckCircle, FaArrowRight, FaRocket, 
  FaClock, FaMobile, FaCloud, FaBrain, FaNetworkWired, FaLightbulb,
  FaChartLine, FaIndustry, FaHospital, FaUniversity, FaCar, FaTruck, 
  FaBuilding, FaCalculator, FaChartBar, FaClipboardList, FaEnvelope, 
  FaPhone, FaGlobe, FaMapMarkerAlt, FaSearch, FaSync, FaRobot, 
  FaDesktop, FaServer, FaUsers, FaFileAlt, FaDatabase
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick, trackCardInteraction } from "../utils/performance";
import "../styles/SecurityServices.css";

function SecurityServices() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // SEO and meta tags
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

    // Add structured data
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
    {
      icon: <FaFileAlt />,
      title: "Document Security",
      description: "Advanced security features for document protection and access control.",
      features: [
        "End-to-end encryption",
        "Granular access control",
        "Comprehensive audit trails",
        "Digital watermarking",
        "Digital signatures",
        "Compliance monitoring"
      ],
      benefits: [
        "Protect sensitive documents",
        "Ensure regulatory compliance",
        "Prevent unauthorized access",
        "Maintain document integrity"
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Data Protection",
      description: "Comprehensive data protection with backup, recovery, and disaster planning.",
      features: [
        "Automated backup systems",
        "Disaster recovery planning",
        "Data encryption at rest",
        "Access monitoring and alerts",
        "Compliance reporting",
        "Regular security testing"
      ],
      benefits: [
        "Ensure business continuity",
        "Protect against data loss",
        "Meet compliance requirements",
        "Reduce security risks"
      ]
    }
  ];

  // Industries served
  const industries = [
    { name: "Finance", icon: "💰" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Legal", icon: "⚖️" },
    { name: "Government", icon: "🏛️" },
    { name: "Technology", icon: "💻" },
    { name: "Insurance", icon: "🛡️" },
    { name: "Education", icon: "🎓" },
    { name: "Manufacturing", icon: "🏭" }
  ];

  // Security standards
  const securityStandards = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2", description: "Security, Availability, Processing Integrity" },
    { name: "GDPR", description: "Data Protection Regulation" },
    { name: "HIPAA", description: "Healthcare Data Protection" },
    { name: "PCI DSS", description: "Payment Card Industry Security" },
    { name: "SOX", description: "Sarbanes-Oxley Compliance" }
  ];

  // Button handlers
  const handleGetStarted = () => {
    trackButtonClick('get_started_security');
    navigate('/Contact?subject=Security Services Inquiry');
  };

  const handleWatchDemo = () => {
    trackButtonClick('watch_demo_security');
    setToast({ message: 'Demo video coming soon!', type: 'info' });
  };

  const handleLearnMore = (service) => {
    trackButtonClick(`learn_more_${service.title.toLowerCase().replace(/\s+/g, '_')}`);
    navigate(`/Contact?subject=${service.title} Service Inquiry`);
  };

  const handleStartFreeTrial = () => {
    trackButtonClick('start_free_trial_security');
    navigate('/Contact?subject=Security Services Free Trial');
  };

  const handleScheduleDemo = () => {
    trackButtonClick('schedule_demo_security');
    navigate('/Contact?subject=Security Services Demo');
  };

  return (
    <ErrorBoundary>
      <div className="security-services-page">
        {/* Hero Section */}
        <section className="security-hero">
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
              <span>🔒 Security Services</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Enterprise <span className="gradient-text">Security Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Protect your business data with enterprise-grade security solutions and comprehensive data protection
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
                aria-label="Get Started with Security Services"
              >
                <span>Get Started</span>
                <FaArrowRight className="arrow-icon" />
              </button>
              <button 
                className="cta-button secondary" 
                onClick={handleWatchDemo}
                aria-label="Watch Security Services Demo"
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
              <h2>Security Services</h2>
              <p>Comprehensive security solutions designed to protect your business data and ensure compliance</p>
            </motion.div>

            <div className="services-grid">
              {securityServices.map((service, index) => (
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

        {/* Security Standards */}
        <section className="security-standards">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Security Standards We Support</h2>
              <p>Our solutions help you meet and exceed industry security standards and compliance requirements</p>
            </motion.div>

            <div className="standards-grid">
              {securityStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="standard-card"
                >
                  <div className="standard-icon">🛡️</div>
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
              <p>Our security solutions are designed for regulated and security-conscious industries</p>
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
              <h2>Why Choose Our Security Solutions</h2>
              <p>The advantages that set our security solutions apart</p>
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
                <h3>Enterprise Security</h3>
                <p>Bank-level security with advanced encryption and access controls</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaBrain className="advantage-icon" />
                <h3>AI-Powered Monitoring</h3>
                <p>Intelligent threat detection and automated security monitoring</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaNetworkWired className="advantage-icon" />
                <h3>Compliance Ready</h3>
                <p>Built-in compliance features for major regulatory standards</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaLightbulb className="advantage-icon" />
                <h3>24/7 Protection</h3>
                <p>Round-the-clock security monitoring and incident response</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="security-cta">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Ready to Secure Your Business?</h2>
              <p>Join organizations that trust our security solutions to protect their critical business data</p>
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

export default SecurityServices; 