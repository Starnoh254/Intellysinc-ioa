import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaMobile, FaMapMarkerAlt, FaCheckCircle, FaArrowRight, FaRocket, 
  FaShieldAlt, FaClock, FaCloud, FaBrain, FaNetworkWired, FaLightbulb,
  FaChartLine, FaIndustry, FaHospital, FaUniversity, FaCar, FaTruck, 
  FaBuilding, FaCalculator, FaChartBar, FaClipboardList, FaEnvelope, 
  FaPhone, FaGlobe, FaSearch, FaLock, FaSync, FaRobot, FaDesktop, 
  FaServer, FaUsers, FaFileAlt, FaDatabase
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick, trackCardInteraction } from "../utils/performance";
import "../styles/MobileSolutions.css";

function MobileSolutions() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "Mobile Solutions Services | IntelliSync IOA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Mobile document access and field service management solutions. Enable your workforce to work from anywhere with secure mobile applications.'
      );
    }

    // Add structured data
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
    {
      icon: <FaFileAlt />,
      title: "Mobile Document Access",
      description: "Secure mobile access to documents and workflows from anywhere.",
      features: [
        "Cross-platform mobile apps",
        "Offline document access",
        "Secure authentication",
        "Push notifications",
        "Touch-optimized interface",
        "Real-time synchronization"
      ],
      benefits: [
        "Access documents anywhere, anytime",
        "Improve productivity by 60%",
        "Enhanced security and compliance",
        "Seamless user experience"
      ]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Field Service Management",
      description: "Mobile solutions for field service teams with real-time updates and document access.",
      features: [
        "Field service mobile apps",
        "GPS tracking and navigation",
        "Real-time job updates",
        "Document access in field",
        "Photo capture and upload",
        "Offline synchronization"
      ],
      benefits: [
        "Reduce field service costs by 30%",
        "Improve response times",
        "Enhanced customer satisfaction",
        "Better resource utilization"
      ]
    }
  ];

  // Industries served
  const industries = [
    { name: "Services", icon: "🔧" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Utilities", icon: "⚡" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Construction", icon: "🏗️" },
    { name: "Transportation", icon: "🚛" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Retail", icon: "🛍️" }
  ];

  // Key features
  const keyFeatures = [
    {
      icon: <FaShieldAlt />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption and compliance standards"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Sync",
      description: "Automatic synchronization across all devices and platforms"
    },
    {
      icon: <FaMobile />,
      title: "Cross-Platform",
      description: "Works seamlessly on iOS, Android, and web platforms"
    },
    {
      icon: <FaNetworkWired />,
      title: "Easy Integration",
      description: "Integrates with your existing business systems"
    }
  ];

  // Button handlers
  const handleGetStarted = () => {
    trackButtonClick('get_started_mobile');
    navigate('/Contact?subject=Mobile Solutions Services Inquiry');
  };

  const handleWatchDemo = () => {
    trackButtonClick('watch_demo_mobile');
    setToast({ message: 'Demo video coming soon!', type: 'info' });
  };

  const handleLearnMore = (service) => {
    trackButtonClick(`learn_more_${service.title.toLowerCase().replace(/\s+/g, '_')}`);
    navigate(`/Contact?subject=${service.title} Service Inquiry`);
  };

  const handleStartFreeTrial = () => {
    trackButtonClick('start_free_trial_mobile');
    navigate('/Contact?subject=Mobile Solutions Free Trial');
  };

  const handleScheduleDemo = () => {
    trackButtonClick('schedule_demo_mobile');
    navigate('/Contact?subject=Mobile Solutions Demo');
  };

  return (
    <ErrorBoundary>
      <div className="mobile-solutions-page">
        {/* Hero Section */}
        <section className="mobile-hero">
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
              <span>📱 Mobile Solutions</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Work <span className="gradient-text">Anywhere</span> with Mobile Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Enable your workforce to access documents and manage field operations from anywhere with our secure mobile solutions
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
                aria-label="Get Started with Mobile Solutions"
              >
                <span>Get Started</span>
                <FaArrowRight className="arrow-icon" />
              </button>
              <button 
                className="cta-button secondary" 
                onClick={handleWatchDemo}
                aria-label="Watch Mobile Solutions Demo"
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
              <h2>Mobile Solutions Services</h2>
              <p>Comprehensive mobile solutions designed to keep your workforce connected and productive</p>
            </motion.div>

            <div className="services-grid">
              {mobileServices.map((service, index) => (
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
              <p>Powerful features designed for modern mobile workforce</p>
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
              <p>Our mobile solutions are designed for diverse industry needs</p>
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
              <h2>Why Choose Our Mobile Solutions</h2>
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
                <h3>Intelligent Design</h3>
                <p>User-friendly interfaces designed for mobile productivity</p>
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
                <h3>Seamless Integration</h3>
                <p>Easy integration with your existing business systems</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaLightbulb className="advantage-icon" />
                <h3>Offline Capability</h3>
                <p>Work continues even without internet connectivity</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mobile-cta">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Ready to Go Mobile?</h2>
              <p>Join organizations that have empowered their workforce with our mobile solutions</p>
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

export default MobileSolutions; 