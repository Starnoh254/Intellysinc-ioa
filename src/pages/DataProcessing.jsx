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
import "../styles/DataProcessing.css";

function DataProcessing() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "Data Processing Services | IntelliSync IOA";
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
      <div className="data-processing-page">
        {/* Hero Section */}
        <section className="data-hero">
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
              <span>📊 Data Processing</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Intelligent <span className="gradient-text">Data Processing</span> Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Transform manual data tasks into automated, intelligent processes with AI-powered data processing solutions
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
                aria-label="Get Started with Data Processing"
              >
                <span>Get Started</span>
                <FaArrowRight className="arrow-icon" />
              </button>
              <button 
                className="cta-button secondary" 
                onClick={handleWatchDemo}
                aria-label="Watch Data Processing Demo"
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
              <h2>Data Processing Services</h2>
              <p>Comprehensive data processing solutions designed to automate and optimize your data workflows</p>
            </motion.div>

            <div className="services-grid">
              {dataServices.map((service, index) => (
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
              <p>Our data processing solutions are tailored for diverse industry requirements</p>
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
              <h2>Why Choose Our Data Processing Solutions</h2>
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
                <FaBrain className="advantage-icon" />
                <h3>AI-Powered Intelligence</h3>
                <p>Advanced machine learning algorithms for accurate data processing and continuous improvement</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaShieldAlt className="advantage-icon" />
                <h3>Enterprise Security</h3>
                <p>Bank-level security with encryption, access controls, and compliance standards</p>
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
                <p>Easy integration with your existing systems and applications</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaChartLine className="advantage-icon" />
                <h3>Real-time Analytics</h3>
                <p>Comprehensive analytics and reporting for process optimization</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="data-cta">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Ready to Automate Your Data Processing?</h2>
              <p>Join hundreds of organizations that have transformed their data workflows with our intelligent processing solutions</p>
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

export default DataProcessing; 