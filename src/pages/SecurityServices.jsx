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
import "../styles/DocumentManagement.css";

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
      <div className="document-management-page">
        {/* Hero Section */}
        <section className="dm-hero">
          <div className="hero-content">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
              Security Services
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
              Enterprise-grade document security and data protection solutions. Secure your business data with advanced encryption and compliance features.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Our Security Services</h2>
              <ul className="dm-feature-list lively-list">
                {securityServices.map((service, i) => (
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

        {/* Security Standards Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Security Standards</h2>
              <ul className="dm-feature-list lively-list">
                {securityStandards.map((s, i) => (
                  <li key={i}><span className="feature-icon">{s.icon}</span><strong>{s.name}:</strong> {s.description}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="dm-cta">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="cta-content">
              <h2>Ready to Secure Your Business?</h2>
              <p>Discover how IntelliSync can protect your data and ensure compliance.</p>
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

export default SecurityServices; 