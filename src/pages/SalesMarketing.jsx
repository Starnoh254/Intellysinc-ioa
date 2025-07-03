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
import "../styles/DocumentManagement.css";

function SalesMarketing() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // SEO and meta tags
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
    { name: "Retail", icon: "🛒" },
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
      <div className="document-management-page">
        {/* Hero Section */}
        <section className="dm-hero">
          <div className="hero-content">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
              Sales & Marketing Services
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
              Optimize your sales and marketing operations with automated order processing and comprehensive CRM solutions.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Our Sales & Marketing Services</h2>
              <ul className="dm-feature-list lively-list">
                {salesServices.map((service, i) => (
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

        {/* Key Features Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Key Features</h2>
              <ul className="dm-feature-list lively-list">
                {keyFeatures.map((f, i) => (
                  <li key={i}><span className="feature-icon">{f.icon}</span><strong>{f.title}:</strong> {f.description}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="dm-cta">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="cta-content">
              <h2>Ready to Accelerate Your Sales & Marketing?</h2>
              <p>Discover how IntelliSync can optimize your sales and customer relationships.</p>
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

export default SalesMarketing; 