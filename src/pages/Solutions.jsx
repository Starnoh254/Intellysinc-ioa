import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaRocket, FaChartLine, FaShieldAlt, FaUsers, FaCogs, FaLightbulb } from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick, trackCardInteraction } from "../utils/performance";
import "../styles/Solutions.css";

function Solutions() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "Business Solutions | IntelliSync";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Comprehensive business solutions including Business Intelligence, Data Automation, Document Management, and System Integration. Transform your operations with IntelliSync.'
      );
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Business Solutions",
      "description": "Comprehensive business automation and analytics solutions",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync"
      },
      "offers": {
        "@type": "Offer",
        "description": "Business Intelligence, Data Automation, Document Management, and System Integration services"
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

  const solutions = [
    {
      icon: <FaRocket />,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with our advanced analytics platform.",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization"],
      path: "/BusinessIntelligence"
    },
    {
      icon: <FaChartLine />,
      title: "Data Automation",
      description: "Streamline your workflows and eliminate manual data entry with intelligent automation.",
      features: ["Workflow automation", "Data integration", "Process optimization", "Error reduction"],
      path: "/DataAutomation"
    },
    {
      icon: <FaShieldAlt />,
      title: "Document Management",
      description: "Secure, organize, and streamline your document workflows with enterprise-grade solutions.",
      features: ["Secure storage", "Version control", "Collaboration tools", "Compliance management"],
      path: "/DocumentManagement"
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Enhance team productivity with integrated communication and project management tools.",
      features: ["Real-time messaging", "Project tracking", "File sharing", "Team analytics"],
      path: "/Contact"
    },
    {
      icon: <FaCogs />,
      title: "System Integration",
      description: "Seamlessly connect your existing systems and applications for unified operations.",
      features: ["API integration", "Data synchronization", "Custom connectors", "Scalable architecture"],
      path: "/Integrations"
    },
    {
      icon: <FaLightbulb />,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to discover patterns and optimize your business processes.",
      features: ["Machine learning", "Pattern recognition", "Predictive modeling", "Intelligent recommendations"],
      path: "/Contact"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Finance", icon: "💰" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Retail", icon: "🛍️" },
    { name: "Education", icon: "🎓" },
    { name: "Technology", icon: "💻" }
  ];

  const caseStudies = [
    {
      title: "Healthcare Provider",
      description: "Reduced patient wait times by 40% through intelligent scheduling automation.",
      results: ["40% faster scheduling", "Improved patient satisfaction", "Reduced administrative overhead"]
    },
    {
      title: "Financial Services",
      description: "Streamlined compliance reporting with automated data collection and analysis.",
      results: ["90% faster reporting", "100% compliance accuracy", "Reduced audit time"]
    },
    {
      title: "Manufacturing",
      description: "Optimized production processes with real-time monitoring and predictive maintenance.",
      results: ["25% increased efficiency", "Reduced downtime by 60%", "Lower maintenance costs"]
    }
  ];

  // Button handlers
  const handleGetStarted = () => {
    trackButtonClick('get_started_solutions');
    navigate('/Contact?subject=Business Solutions Inquiry');
  };

  const handleWatchDemo = () => {
    trackButtonClick('watch_demo_solutions');
    setToast({ message: 'Demo video coming soon!', type: 'info' });
  };

  const handleLearnMore = (solution) => {
    trackButtonClick(`learn_more_${solution.title.toLowerCase().replace(' ', '_')}`);
    if (solution.path) {
      if (solution.path === '/Contact') {
        navigate(`/Contact?subject=${solution.title} Solution Inquiry`);
      } else {
        navigate(solution.path);
      }
    } else {
      setToast({ message: `Learn more about ${solution.title} - Coming soon!`, type: 'info' });
    }
  };

  const handleSolutionCardClick = (solution) => {
    trackCardInteraction(solution.title, 'click');
    setSelectedSolution(solution);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSolution(null);
  };

  const handleStartFreeTrial = () => {
    trackButtonClick('start_free_trial');
    navigate('/Contact?subject=Free Trial Request');
  };

  const handleScheduleDemo = () => {
    trackButtonClick('schedule_demo');
    navigate('/Contact?subject=Demo Scheduling Request');
  };

  return (
    <ErrorBoundary>
      <div className="solutions-page">
        {/* Hero Section */}
        <section className="solutions-hero">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Comprehensive Business Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-subtitle"
            >
              Transform your business operations with our intelligent automation and analytics solutions
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-actions"
            >
              <button 
                className="cta-button primary" 
                onClick={handleGetStarted}
                aria-label="Get Started with IntelliSync"
              >
                Get Started
              </button>
              <button 
                className="cta-button secondary" 
                onClick={handleWatchDemo}
                aria-label="Watch Demo Video"
              >
                Watch Demo
              </button>
            </motion.div>
          </div>
        </section>

        {/* Core Solutions */}
        <section className="core-solutions">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Our Core Solutions</h2>
              <p>Comprehensive tools designed to address your most critical business challenges</p>
            </motion.div>

            <div className="solutions-grid">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="solution-card"
                  onClick={() => handleSolutionCardClick(solution)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Learn more about ${solution.title}`}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSolutionCardClick(solution)}
                  style={{ cursor: 'pointer', outline: 'none' }}
                >
                  <div className="solution-icon">{solution.icon}</div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <ul className="solution-features">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <button 
                    className="learn-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore(solution);
                    }}
                    aria-label={`Learn more about ${solution.title}`}
                  >
                    Learn More
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
              <p>Tailored solutions for diverse industry needs</p>
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
                  tabIndex={0}
                  aria-label={`${industry.name} industry solutions`}
                  style={{ outline: 'none' }}
                >
                  <div className="industry-icon">{industry.icon}</div>
                  <h3>{industry.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="case-studies">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Success Stories</h2>
              <p>Real results from real businesses</p>
            </motion.div>

            <div className="case-studies-grid">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="case-study-card"
                  tabIndex={0}
                  aria-label={`Case study: ${study.title}`}
                  style={{ outline: 'none' }}
                >
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <div className="results">
                    <h4>Key Results:</h4>
                    <ul>
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex}>{result}</li>
                      ))}
                    </ul>
                  </div>
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
              <h2>Why Choose IntelliSync</h2>
              <p>The advantages that set us apart</p>
            </motion.div>

            <div className="advantages-grid">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="advantage-item"
                tabIndex={0}
                aria-label="Proven Expertise advantage"
                style={{ outline: 'none' }}
              >
                <h3>Proven Expertise</h3>
                <p>Over 10 years of experience in business automation and analytics</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="advantage-item"
                tabIndex={0}
                aria-label="Scalable Solutions advantage"
                style={{ outline: 'none' }}
              >
                <h3>Scalable Solutions</h3>
                <p>Grow with confidence - our solutions scale with your business</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="advantage-item"
                tabIndex={0}
                aria-label="24/7 Support advantage"
                style={{ outline: 'none' }}
              >
                <h3>24/7 Support</h3>
                <p>Round-the-clock technical support and customer service</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="advantage-item"
                tabIndex={0}
                aria-label="Security First advantage"
                style={{ outline: 'none' }}
              >
                <h3>Security First</h3>
                <p>Enterprise-grade security and compliance standards</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="solutions-cta">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Ready to Transform Your Business?</h2>
              <p>Join thousands of businesses that have already revolutionized their operations with IntelliSync</p>
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

        {/* Solution Details Modal */}
        {showModal && selectedSolution && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                ×
              </button>
              <div className="modal-header">
                <div className="solution-icon">{selectedSolution.icon}</div>
                <h2>{selectedSolution.title}</h2>
              </div>
              <div className="modal-description">
                <p>{selectedSolution.description}</p>
              </div>
              <div className="modal-features">
                <h3>Key Features</h3>
                <ul>
                  {selectedSolution.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button 
                className="modal-cta"
                onClick={() => handleLearnMore(selectedSolution)}
              >
                Get Started with {selectedSolution.title}
              </button>
            </div>
          </div>
        )}

        {/* Toast Notifications */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}

        {/* Solutions Grid Section (existing) */}
        <section className="solutions-grid-section">
          {/* ...existing solutions grid code... */}
        </section>

        {/* Explore Solutions By Category Section */}
        <section className="solutions-categories-section">
          <h2 className="categories-title">Explore Solutions By</h2>
          <div className="categories-grid">
            <div className="category-column">
              <h3>By Use Case</h3>
              <ul>
                <li>Automated Invoice Processing</li>
                <li>Purchase-to-Pay</li>
                <li>Document Management</li>
                <li>Contract Management</li>
                <li>Quality Management</li>
                <li>Sales Order Processing</li>
                <li>Employee File Management</li>
                <li>Secure document archiving</li>
              </ul>
            </div>
            <div className="category-column">
              <h3>By Industry</h3>
              <ul>
                <li>Auto dealerships</li>
                <li>Financial Services</li>
                <li>Healthcare</li>
                <li>Higher Education</li>
                <li>Manufacturing</li>
                <li>State and local government</li>
                <li>Transportation and logistics</li>
              </ul>
            </div>
            <div className="category-column">
              <h3>By Department</h3>
              <ul>
                <li>Finance & accounting</li>
                <li>Sales & marketing</li>
              </ul>
            </div>
            <div className="category-column">
              <h3>By Company Size</h3>
              <ul>
                <li>Small and mid-sized businesses</li>
                <li>Large enterprises</li>
                <li>Mobile workforce</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default Solutions; 