import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaUsers, FaChartBar, FaCheckCircle, FaArrowRight, FaRocket, 
  FaShieldAlt, FaClock, FaMobile, FaCloud, FaBrain, FaNetworkWired,
  FaLightbulb, FaChartLine, FaIndustry, FaHospital, FaUniversity, 
  FaCar, FaTruck, FaBuilding, FaCalculator, FaClipboardList, 
  FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, 
  FaSearch, FaLock, FaSync, FaRobot, FaDesktop, FaServer
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick, trackCardInteraction } from "../utils/performance";
import "../styles/SalesMarketing.css";

function SalesMarketing() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "Sales & Marketing Services | IntelliSync IOA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Optimize your sales and marketing operations with automated order processing and comprehensive CRM solutions.'
      );
    }

    // Add structured data
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
    {
      icon: <FaClipboardList />,
      title: "Sales Order Processing",
      description: "Automated sales order processing with integrated customer management.",
      features: [
        "Automated order entry and validation",
        "Customer management integration",
        "Real-time inventory checking",
        "Dynamic pricing automation",
        "Order tracking and status updates",
        "Comprehensive sales analytics"
      ],
      benefits: [
        "Process orders 5x faster",
        "Reduce order errors by 90%",
        "Improve customer satisfaction",
        "Increase sales conversion rates"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Customer Relationship Management",
      description: "Integrated CRM with automated lead management and customer engagement.",
      features: [
        "Lead management and scoring",
        "Customer profile management",
        "Communication tracking",
        "Sales pipeline automation",
        "Advanced analytics and reporting",
        "Mobile CRM access"
      ],
      benefits: [
        "Increase lead conversion by 40%",
        "Improve customer retention",
        "Streamline sales processes",
        "Enhance customer insights"
      ]
    }
  ];

  // Industries served
  const industries = [
    { name: "Retail", icon: "🛍️" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Services", icon: "🔧" },
    { name: "Technology", icon: "💻" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Finance", icon: "💰" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Automotive", icon: "🚗" }
  ];

  // Key features
  const keyFeatures = [
    {
      icon: <FaChartLine />,
      title: "Sales Analytics",
      description: "Comprehensive analytics and reporting for data-driven decisions"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Access",
      description: "Access your sales data and CRM from anywhere, anytime"
    },
    {
      icon: <FaCloud />,
      title: "Cloud-Based",
      description: "Secure, scalable cloud solutions with automatic updates"
    },
    {
      icon: <FaNetworkWired />,
      title: "Easy Integration",
      description: "Seamless integration with your existing business systems"
    }
  ];

  // Button handlers
  const handleGetStarted = () => {
    trackButtonClick('get_started_sales_marketing');
    navigate('/Contact?subject=Sales & Marketing Services Inquiry');
  };

  const handleWatchDemo = () => {
    trackButtonClick('watch_demo_sales_marketing');
    setToast({ message: 'Demo video coming soon!', type: 'info' });
  };

  const handleLearnMore = (service) => {
    trackButtonClick(`learn_more_${service.title.toLowerCase().replace(/\s+/g, '_')}`);
    navigate(`/Contact?subject=${service.title} Service Inquiry`);
  };

  const handleStartFreeTrial = () => {
    trackButtonClick('start_free_trial_sales_marketing');
    navigate('/Contact?subject=Sales & Marketing Free Trial');
  };

  const handleScheduleDemo = () => {
    trackButtonClick('schedule_demo_sales_marketing');
    navigate('/Contact?subject=Sales & Marketing Demo');
  };

  return (
    <ErrorBoundary>
      <div className="sales-marketing-page">
        {/* Hero Section */}
        <section className="sales-hero">
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
              <span>📈 Sales & Marketing</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Accelerate Your <span className="gradient-text">Sales Growth</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Streamline sales operations and enhance customer relationships with our intelligent sales and marketing solutions
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
                aria-label="Get Started with Sales & Marketing"
              >
                <span>Get Started</span>
                <FaArrowRight className="arrow-icon" />
              </button>
              <button 
                className="cta-button secondary" 
                onClick={handleWatchDemo}
                aria-label="Watch Sales & Marketing Demo"
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
              <h2>Sales & Marketing Services</h2>
              <p>Comprehensive solutions designed to optimize your sales processes and customer relationships</p>
            </motion.div>

            <div className="services-grid">
              {salesServices.map((service, index) => (
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

        {/* Key Features */}
        <section className="key-features">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Key Features</h2>
              <p>Powerful features designed to transform your sales and marketing operations</p>
            </motion.div>

            <div className="features-grid">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="feature-card"
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
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
              <p>Our sales and marketing solutions are designed for diverse industry needs</p>
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
              <h2>Why Choose Our Sales & Marketing Solutions</h2>
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
                <h3>AI-Powered Insights</h3>
                <p>Intelligent analytics and predictive insights for better decision making</p>
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
                <p>Bank-level security with encryption and compliance standards</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaNetworkWired className="advantage-icon" />
                <h3>Easy Integration</h3>
                <p>Seamless integration with your existing business systems</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaLightbulb className="advantage-icon" />
                <h3>Scalable Solutions</h3>
                <p>Grow with confidence - our solutions scale with your business</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="sales-cta">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Ready to Boost Your Sales Performance?</h2>
              <p>Join hundreds of businesses that have transformed their sales operations with our intelligent solutions</p>
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

export default SalesMarketing; 