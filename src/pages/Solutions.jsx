import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaRocket, FaChartLine, FaShieldAlt, FaUsers, FaCogs, FaLightbulb, 
  FaFileAlt, FaDatabase, FaCloud, FaMobile, FaDesktop, FaServer,
  FaSearch, FaLock, FaSync, FaRobot, FaBrain, FaNetworkWired,
  FaIndustry, FaHospital, FaUniversity, FaCar, FaTruck, FaBuilding,
  FaCalculator, FaChartBar, FaClipboardList, FaEnvelope, FaPhone,
  FaGlobe, FaMapMarkerAlt, FaClock, FaCheckCircle, FaArrowRight,
  FaPlay, FaStar, FaAward, FaHeadset
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick, trackCardInteraction } from "../utils/performance";
import "../styles/Solutions.css";

function Solutions() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "Enterprise Solutions | IntelliSync IOA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Transform your business with IntelliSync IOA\'s comprehensive enterprise solutions. Document management, workflow automation, business intelligence, and more.'
      );
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Enterprise Office Automation Solutions",
      "description": "Comprehensive office automation and business process solutions",
      "provider": {
        "@type": "Organization",
        "name": "IntelliSync Office Automation Limited"
      },
      "offers": {
        "@type": "Offer",
        "description": "Document Management, Workflow Automation, Business Intelligence, Data Processing, and System Integration services"
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

  // Major solution categories with links to dedicated pages
  const solutionCategories = [
    {
      id: 'document-management',
      icon: <FaFileAlt />,
      title: "Document Management",
      subtitle: "Enterprise Document Control",
      description: "Complete document lifecycle management with enterprise-grade security, compliance, and collaboration tools.",
      path: "/DocumentManagement",
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
      solutions: ["Document Management System (DMS)", "Document Capture & Processing", "Records Management", "Contract Management"],
      features: ["Secure Storage", "Version Control", "Compliance", "Collaboration"]
    },
    {
      id: 'workflow-automation',
      icon: <FaCogs />,
      title: "Workflow Automation",
      subtitle: "Intelligent Process Automation",
      description: "Automate complex business processes with AI-powered workflows and intelligent decision engines.",
      path: "/WorkflowAutomation",
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
      solutions: ["Business Process Automation", "Invoice Processing", "Purchase-to-Pay Automation", "Employee Onboarding"],
      features: ["AI-Powered", "Visual Designer", "Analytics", "Integration"]
    },
    {
      id: 'business-intelligence',
      icon: <FaChartLine />,
      title: "Business Intelligence",
      subtitle: "Data-Driven Insights",
      description: "Transform raw data into actionable insights with advanced analytics and real-time reporting capabilities.",
      path: "/BusinessIntelligence",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      solutions: ["Business Intelligence & Analytics", "Performance Management", "Data Analytics & Reporting"],
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "KPI Monitoring"]
    },
    {
      id: 'data-processing',
      icon: <FaDatabase />,
      title: "Data Processing",
      subtitle: "Intelligent Data Automation",
      description: "Automate manual data entry tasks with intelligent OCR and advanced data validation systems.",
      path: "/DataProcessing",
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      solutions: ["Data Entry Automation", "Forms Processing", "Email Management"],
      features: ["OCR Technology", "Data Validation", "Batch Processing", "Quality Monitoring"]
    },
    {
      id: 'quality-management',
      icon: <FaCheckCircle />,
      title: "Quality Management",
      subtitle: "Compliance & Standards",
      description: "Comprehensive quality management with process control and regulatory compliance monitoring.",
      path: "/QualityManagement",
      color: "#EF4444",
      gradient: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
      solutions: ["Quality Management System", "Compliance Management"],
      features: ["Process Control", "Compliance Tracking", "Audit Management", "Risk Assessment"]
    },
    {
      id: 'sales-marketing',
      icon: <FaUsers />,
      title: "Sales & Marketing",
      subtitle: "Customer Relationship Excellence",
      description: "Automated sales order processing with integrated customer relationship management.",
      path: "/SalesMarketing",
      color: "#EC4899",
      gradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
      solutions: ["Sales Order Processing", "Customer Relationship Management"],
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Marketing Automation"]
    },
    {
      id: 'mobile-solutions',
      icon: <FaMobile />,
      title: "Mobile Solutions",
      subtitle: "Anywhere, Anytime Access",
      description: "Secure mobile access to documents and workflows from anywhere with enterprise-grade security.",
      path: "/MobileSolutions",
      color: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
      solutions: ["Mobile Document Access", "Field Service Management"],
      features: ["Mobile Apps", "Offline Access", "Secure Authentication", "Push Notifications"]
    },
    {
      id: 'security-services',
      icon: <FaLock />,
      title: "Security Services",
      subtitle: "Enterprise-Grade Protection",
      description: "Advanced security features for document protection and comprehensive access control.",
      path: "/SecurityServices",
      color: "#6B7280",
      gradient: "linear-gradient(135deg, #6B7280 0%, #4B5563 100%)",
      solutions: ["Document Security", "Data Protection"],
      features: ["Encryption", "Access Control", "Audit Trails", "Compliance"]
    },
    {
      id: 'integrations',
      icon: <FaNetworkWired />,
      title: "System Integration",
      subtitle: "Seamless Connectivity",
      description: "Seamless integration with existing ERP, CRM, and business systems for unified operations.",
      path: "/Integrations",
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
      solutions: ["System Integration", "Cloud Integration"],
      features: ["API Integration", "Data Synchronization", "Custom Connectors", "Real-time Sync"]
    },
    {
      id: 'data-automation',
      icon: <FaRobot />,
      title: "Data Automation",
      subtitle: "Intelligent Automation",
      description: "Intelligent automation for data processing and business workflows with AI capabilities.",
      path: "/DataAutomation",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
      solutions: ["Data Entry Automation", "Forms Processing", "Email Management"],
      features: ["AI-Powered", "Machine Learning", "Process Mining", "Intelligent Routing"]
    }
  ];

  // Industries with enhanced data
  const industries = [
    { 
      name: "Healthcare", 
      icon: "🏥", 
      description: "Patient records, compliance, quality management",
      solutions: ["HIPAA Compliance", "Patient Records", "Quality Management", "Mobile Access"],
      color: "#EF4444"
    },
    { 
      name: "Finance", 
      icon: "💰", 
      description: "Invoice processing, compliance, risk management",
      solutions: ["SOX Compliance", "Invoice Processing", "Risk Management", "Audit Trails"],
      color: "#10B981"
    },
    { 
      name: "Manufacturing", 
      icon: "🏭", 
      description: "Quality management, supply chain, automation",
      solutions: ["Quality Control", "Supply Chain", "Process Automation", "Inventory Management"],
      color: "#F59E0B"
    },
    { 
      name: "Legal", 
      icon: "⚖️", 
      description: "Contract management, document security, compliance",
      solutions: ["Contract Management", "Document Security", "Compliance Tracking", "Case Management"],
      color: "#8B5CF6"
    },
    { 
      name: "Education", 
      icon: "🎓", 
      description: "Student records, document management, analytics",
      solutions: ["Student Records", "Document Management", "Analytics", "Compliance"],
      color: "#3B82F6"
    },
    { 
      name: "Government", 
      icon: "🏛️", 
      description: "Records management, compliance, public access",
      solutions: ["Records Management", "Compliance", "Public Access", "Security"],
      color: "#6B7280"
    },
    { 
      name: "Real Estate", 
      icon: "🏢", 
      description: "Contract management, property records, client management",
      solutions: ["Contract Management", "Property Records", "Client Management", "Document Security"],
      color: "#EC4899"
    },
    { 
      name: "Retail", 
      icon: "🛍️", 
      description: "Sales processing, inventory, customer management",
      solutions: ["Sales Processing", "Inventory Management", "Customer Management", "Analytics"],
      color: "#06B6D4"
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

  const handleCategoryClick = (category) => {
    trackButtonClick(`navigate_to_${category.id}`);
    navigate(category.path);
  };

  const handleStartFreeTrial = () => {
    trackButtonClick('start_free_trial');
    navigate('/Contact?subject=Free Trial Request');
  };

  const handleScheduleDemo = () => {
    trackButtonClick('schedule_demo');
    navigate('/Contact?subject=Demo Scheduling Request');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    trackButtonClick(`filter_tab_${tab}`);
  };

  // Filter categories based on active tab
  const filteredCategories = activeTab === 'all' 
    ? solutionCategories 
    : solutionCategories.filter(cat => cat.id === activeTab);

  return (
    <ErrorBoundary>
      <div className="solutions-page">
        {/* Hero Section */}
        <section className="solutions-hero">
          <div className="hero-background">
            <div className="hero-gradient-overlay"></div>
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
              <div className="shape shape-5"></div>
            </div>
          </div>
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hero-badge"
            >
              <FaStar className="badge-icon" />
              <span>Enterprise-Grade Solutions</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Transform Your Business with
              <span className="gradient-text"> Intelligent Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Comprehensive enterprise solutions designed to optimize operations, enhance productivity, and drive growth across all business functions
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
                aria-label="Get Started with IntelliSync"
              >
                <span>Get Started</span>
                <FaArrowRight className="arrow-icon" />
              </button>
              <button 
                className="cta-button secondary" 
                onClick={handleWatchDemo}
                aria-label="Watch Demo Video"
              >
                <FaPlay className="play-icon" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

          </div>
        </section>

        {/* Solution Categories */}
        <section className="solution-categories">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <div className="section-badge">
                <FaAward className="badge-icon" />
                <span>Enterprise Solutions</span>
              </div>
              <h2>Comprehensive Business Solutions</h2>
              <p>Discover our suite of enterprise-grade solutions designed to transform your business operations</p>
            </motion.div>

            {/* Category Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="category-tabs"
            >
              <button 
                className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => handleTabChange('all')}
              >
                All Solutions
              </button>
              <button 
                className={`tab-button ${activeTab === 'document-management' ? 'active' : ''}`}
                onClick={() => handleTabChange('document-management')}
              >
                Document Management
              </button>
              <button 
                className={`tab-button ${activeTab === 'workflow-automation' ? 'active' : ''}`}
                onClick={() => handleTabChange('workflow-automation')}
              >
                Workflow Automation
              </button>
              <button 
                className={`tab-button ${activeTab === 'business-intelligence' ? 'active' : ''}`}
                onClick={() => handleTabChange('business-intelligence')}
              >
                Business Intelligence
              </button>
            </motion.div>

            <div className="categories-grid">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="category-card"
                  onClick={() => handleCategoryClick(category)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Learn more about ${category.title}`}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCategoryClick(category)}
                  style={{ cursor: 'pointer', outline: 'none' }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="card-header">
                    <div className="category-icon" style={{ background: category.gradient }}>
                      {category.icon}
                    </div>
                    <div className="category-info">
                      <h3>{category.title}</h3>
                      <p className="category-subtitle">{category.subtitle}</p>
                    </div>
                  </div>
                  <div className="card-content">
                    <p className="category-description">{category.description}</p>
                    <div className="category-features">
                      <h4>Key Features</h4>
                      <div className="features-grid">
                        {category.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="feature-tag">{feature}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button 
                    className="learn-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(category);
                    }}
                    aria-label={`Learn more about ${category.title}`}
                  >
                    <span>Explore Solution</span>
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
              <p>Tailored solutions for diverse industry needs and compliance requirements</p>
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
                  <div className="industry-header">
                    <div className="industry-icon" style={{ backgroundColor: industry.color }}>{industry.icon}</div>
                    <h3>{industry.name}</h3>
                  </div>
                  <p className="industry-description">{industry.description}</p>
                  <div className="industry-solutions">
                    <h4>Key Solutions</h4>
                    <ul>
                      {industry.solutions.map((solution, solIndex) => (
                        <li key={solIndex}>{solution}</li>
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
              <h2>Why Choose IntelliSync IOA</h2>
              <p>The advantages that set us apart in the enterprise solutions market</p>
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
                <div className="advantage-icon">
                  <FaAward />
                </div>
                <h3>Proven Expertise</h3>
                <p>Over 15 years of experience in enterprise automation and business process optimization</p>
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
                <div className="advantage-icon">
                  <FaRocket />
                </div>
                <h3>Scalable Solutions</h3>
                <p>Grow with confidence - our solutions scale seamlessly with your business needs</p>
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
                <div className="advantage-icon">
                  <FaHeadset />
                </div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock technical support and customer service with dedicated account managers</p>
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
                <div className="advantage-icon">
                  <FaShieldAlt />
                </div>
                <h3>Security First</h3>
                <p>Enterprise-grade security and compliance standards with SOC 2 Type II certification</p>
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
              <p>Join thousands of enterprises that have already revolutionized their operations with IntelliSync IOA</p>
              <div className="cta-actions">
                <button 
                  className="cta-button primary"
                  onClick={handleStartFreeTrial}
                  aria-label="Start Free Trial"
                >
                  <span>Start Free Trial</span>
                  <FaArrowRight className="arrow-icon" />
                </button>
                <button 
                  className="cta-button secondary"
                  onClick={handleScheduleDemo}
                  aria-label="Schedule Demo"
                >
                  <FaPlay className="play-icon" />
                  <span>Schedule Demo</span>
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

export default Solutions; 