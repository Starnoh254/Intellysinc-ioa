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
import "../styles/DocumentManagement.css";

function MobileSolutions() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // SEO and meta tags
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
      <div className="document-management-page">
        {/* Hero Section */}
        <section className="dm-hero">
          <div className="hero-content">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
              Mobile Solutions Services
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
              Mobile document access and field service management solutions. Enable your workforce to work from anywhere with secure mobile applications.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Our Mobile Solutions</h2>
              <ul className="dm-feature-list lively-list">
                {mobileServices.map((service, i) => (
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
              <h2>Ready to Mobilize Your Workforce?</h2>
              <p>Discover how IntelliSync can empower your team with secure mobile solutions.</p>
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

export default MobileSolutions; 