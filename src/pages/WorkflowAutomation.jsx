import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaCogs, FaFileInvoice, FaShoppingCart, FaUsers, FaChartLine,
  FaCheckCircle, FaArrowRight, FaRocket, FaShieldAlt, FaClock,
  FaMobile, FaCloud, FaDatabase, FaNetworkWired, FaLightbulb
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick, trackCardInteraction } from "../utils/performance";
import "../styles/WorkflowAutomation.css";

function WorkflowAutomation() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "Workflow Automation Services | IntelliSync IOA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Streamline your business processes with our comprehensive workflow automation solutions. From invoice processing to employee onboarding, we automate it all.'
      );
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Workflow Automation Services",
      "description": "Comprehensive workflow automation solutions for business processes",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync Office Automation Limited"
      },
      "offers": {
        "@type": "Offer",
        "description": "Invoice Processing, Purchase-to-Pay, Employee Onboarding, and Business Process Automation"
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

  // Workflow automation services
  const workflowServices = [
    {
      icon: <FaFileInvoice />,
      title: "Invoice Processing Automation",
      description: "Automated invoice capture, processing, and approval workflows with intelligent data extraction.",
      features: [
        "OCR-powered invoice capture",
        "Intelligent data extraction",
        "Automated approval workflows",
        "Exception handling",
        "Payment processing integration",
        "Real-time analytics and reporting"
      ],
      benefits: [
        "Reduce processing time by 80%",
        "Eliminate manual data entry errors",
        "Improve compliance and audit trails",
        "Enhance vendor relationships"
      ]
    },
    {
      icon: <FaShoppingCart />,
      title: "Purchase-to-Pay Automation",
      description: "Complete purchase order to payment automation with integrated procurement workflows.",
      features: [
        "Purchase order automation",
        "Vendor management system",
        "Automated approval workflows",
        "Receiving and inspection",
        "Invoice matching and reconciliation",
        "Payment processing automation"
      ],
      benefits: [
        "Streamline procurement processes",
        "Reduce cycle times by 60%",
        "Improve spend visibility",
        "Enhance supplier collaboration"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Employee Onboarding Automation",
      description: "Streamlined employee onboarding with automated document collection and workflow management.",
      features: [
        "Automated document collection",
        "Task assignment and tracking",
        "Progress monitoring dashboard",
        "Compliance checks and validation",
        "HR system integration",
        "Customizable workflows"
      ],
      benefits: [
        "Reduce onboarding time by 70%",
        "Ensure compliance and completeness",
        "Improve new hire experience",
        "Reduce administrative burden"
      ]
    },
    {
      icon: <FaCogs />,
      title: "Business Process Automation",
      description: "Automate complex business processes with intelligent workflows and decision engines.",
      features: [
        "Visual workflow designer",
        "Decision engines and rules",
        "Task automation and routing",
        "Approval workflows",
        "Performance monitoring",
        "Process analytics and optimization"
      ],
      benefits: [
        "Increase operational efficiency",
        "Reduce manual errors",
        "Improve process visibility",
        "Enable rapid process changes"
      ]
    }
  ];

  // Industries served
  const industries = [
    { name: "Manufacturing", icon: "🏭" },
    { name: "Finance", icon: "💰" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Retail", icon: "🛍️" },
    { name: "Legal", icon: "⚖️" },
    { name: "Education", icon: "🎓" },
    { name: "Government", icon: "🏛️" },
    { name: "Real Estate", icon: "🏢" }
  ];

  // Button handlers
  const handleGetStarted = () => {
    trackButtonClick('get_started_workflow');
    navigate('/Contact?subject=Workflow Automation Inquiry');
  };

  const handleWatchDemo = () => {
    trackButtonClick('watch_demo_workflow');
    setToast({ message: 'Demo video coming soon!', type: 'info' });
  };

  const handleLearnMore = (service) => {
    trackButtonClick(`learn_more_${service.title.toLowerCase().replace(/\s+/g, '_')}`);
    navigate(`/Contact?subject=${service.title} Service Inquiry`);
  };

  const handleStartFreeTrial = () => {
    trackButtonClick('start_free_trial_workflow');
    navigate('/Contact?subject=Workflow Automation Free Trial');
  };

  const handleScheduleDemo = () => {
    trackButtonClick('schedule_demo_workflow');
    navigate('/Contact?subject=Workflow Automation Demo');
  };

  return (
    <ErrorBoundary>
      <div className="workflow-automation-page">
        {/* Hero Section */}
        <section className="workflow-hero">
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
              <span>⚡ Workflow Automation</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Streamline Your <span className="gradient-text">Business Processes</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Automate complex workflows, reduce manual tasks, and boost productivity with our intelligent process automation solutions
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
                aria-label="Get Started with Workflow Automation"
              >
                <span>Get Started</span>
                <FaArrowRight className="arrow-icon" />
              </button>
              <button 
                className="cta-button secondary" 
                onClick={handleWatchDemo}
                aria-label="Watch Workflow Automation Demo"
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
              <h2>Workflow Automation Services</h2>
              <p>Comprehensive automation solutions designed to transform your business operations</p>
            </motion.div>

            <div className="services-grid">
              {workflowServices.map((service, index) => (
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
              <p>Our workflow automation solutions are designed for diverse industry needs</p>
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
              <h2>Why Choose Our Workflow Automation</h2>
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
                <h3>Enterprise Security</h3>
                <p>Bank-level security with encryption, access controls, and compliance standards</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaCloud className="advantage-icon" />
                <h3>Cloud-Native</h3>
                <p>Built for the cloud with scalability, reliability, and global accessibility</p>
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
                <p>Seamless integration with your existing systems and applications</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="advantage-item"
              >
                <FaLightbulb className="advantage-icon" />
                <h3>AI-Powered</h3>
                <p>Intelligent automation with machine learning and predictive analytics</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="workflow-cta">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Ready to Automate Your Workflows?</h2>
              <p>Join hundreds of businesses that have transformed their operations with our workflow automation solutions</p>
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

export default WorkflowAutomation; 