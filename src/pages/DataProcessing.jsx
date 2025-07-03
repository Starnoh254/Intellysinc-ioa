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
import performanceMonitor, { trackButtonClick, trackCardInteraction } from "../utils/performance";
import "../styles/DocumentManagement.css";

function DataProcessing() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // SEO and meta tags
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

    // Add structured data
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

  // Data processing services
  const dataServices = [
    {
      icon: <FaDatabase />,
      title: "Data Entry Automation",
      description: "Automate manual data entry tasks with intelligent OCR and data validation.",
      features: [
        "Advanced OCR technology",
        "Intelligent data validation",
        "Error correction and learning",
        "Batch processing capabilities",
        "Integration with existing systems",
        "Real-time quality monitoring"
      ],
      benefits: [
        "Reduce data entry time by 90%",
        "Eliminate manual errors",
        "Improve data accuracy",
        "Scale processing capacity"
      ]
    },
    {
      icon: <FaFileAlt />,
      title: "Forms Processing",
      description: "Automated processing of forms and applications with intelligent data extraction.",
      features: [
        "Multi-format form recognition",
        "Intelligent data extraction",
        "Custom validation rules",
        "Automated approval workflows",
        "Status tracking and notifications",
        "Seamless system integration"
      ],
      benefits: [
        "Process forms 10x faster",
        "Reduce processing errors",
        "Improve customer experience",
        "Ensure compliance and accuracy"
      ]
    },
    {
      icon: <FaEnvelope />,
      title: "Email Management",
      description: "Automated email processing, classification, and response management.",
      features: [
        "Intelligent email classification",
        "Automated routing and responses",
        "Template-based responses",
        "Follow-up tracking system",
        "Integration with CRM systems",
        "Analytics and reporting"
      ],
      benefits: [
        "Handle 5x more emails efficiently",
        "Improve response times",
        "Reduce manual email sorting",
        "Enhance customer communication"
      ]
    }
  ];

  // Industries served
  const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Finance", icon: "💰" },
    { name: "Government", icon: "🏛️" },
    { name: "Education", icon: "🎓" },
    { name: "Legal", icon: "⚖️" },
    { name: "Insurance", icon: "🛡️" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Manufacturing", icon: "🏭" }
  ];

  // Button handlers
  const handleGetStarted = () => {
    trackButtonClick('get_started_data_processing');
    navigate('/Contact?subject=Data Processing Services Inquiry');
  };

  const handleWatchDemo = () => {
    trackButtonClick('watch_demo_data_processing');
    setToast({ message: 'Demo video coming soon!', type: 'info' });
  };

  const handleLearnMore = (service) => {
    trackButtonClick(`learn_more_${service.title.toLowerCase().replace(/\s+/g, '_')}`);
    navigate(`/Contact?subject=${service.title} Service Inquiry`);
  };

  const handleStartFreeTrial = () => {
    trackButtonClick('start_free_trial_data_processing');
    navigate('/Contact?subject=Data Processing Free Trial');
  };

  const handleScheduleDemo = () => {
    trackButtonClick('schedule_demo_data_processing');
    navigate('/Contact?subject=Data Processing Demo');
  };

  return (
    <ErrorBoundary>
      <div className="document-management-page">
        {/* Hero Section */}
        <section className="dm-hero">
          <div className="hero-content">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
              Data Processing Services
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
              Automate data entry, forms processing, and email management with our intelligent data processing solutions. Reduce errors and increase efficiency.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Our Data Processing Services</h2>
              <ul className="dm-feature-list lively-list">
                {dataServices.map((service, i) => (
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

        {/* Advantages Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Why Choose Our Data Processing Solutions?</h2>
              <ul className="dm-feature-list lively-list">
                {dataServices.map((service, i) => (
                  <li key={i}><span className="feature-icon">{service.icon}</span><strong>{service.title}:</strong> {service.description}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="dm-cta">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="cta-content">
              <h2>Ready to Automate Your Data Processing?</h2>
              <p>Discover how IntelliSync can transform your data workflows.</p>
              <div className="cta-actions">
                <button className="cta-button primary" onClick={handleStartFreeTrial} type="button">
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

export default DataProcessing; 