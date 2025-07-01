import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaRocket, FaChartLine, FaShieldAlt, FaUsers, FaCogs, FaLightbulb, 
  FaFileAlt, FaDatabase, FaCloud, FaMobile, FaDesktop, FaServer,
  FaSearch, FaLock, FaSync, FaRobot, FaBrain, FaNetworkWired,
  FaIndustry, FaHospital, FaUniversity, FaCar, FaTruck, FaBuilding,
  FaCalculator, FaChartBar, FaClipboardList, FaEnvelope, FaPhone,
  FaGlobe, FaMapMarkerAlt, FaClock, FaCheckCircle, FaArrowRight
} from "react-icons/fa";
import Toast from "../components/Toast";
import ErrorBoundary from "../components/ErrorBoundary";
import performanceMonitor, { trackButtonClick, trackCardInteraction } from "../utils/performance";
import "../styles/Solutions.css";

function Solutions() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // SEO and meta tags
  useEffect(() => {
    performanceMonitor.trackPageLoad();
    
    document.title = "Comprehensive Business Solutions | IntelliSync IOA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Complete office automation solutions including Document Management, Workflow Automation, Business Intelligence, Data Processing, and System Integration. Transform your business with IntelliSync IOA.'
      );
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Office Automation Solutions",
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

  // Comprehensive solutions based on MFI Solutions (excluding Pro Print)
  const allSolutions = [
    // Document Management Solutions
    {
      category: 'document-management',
      icon: <FaFileAlt />,
      title: "Document Management System (DMS)",
      description: "Complete document lifecycle management with secure storage, version control, and collaboration tools.",
      features: ["Secure document storage", "Version control", "Collaboration tools", "Compliance management", "Advanced search", "Workflow automation"],
      path: "/DocumentManagement",
      industry: "All Industries"
    },
    {
      category: 'document-management',
      icon: <FaFileAlt />,
      title: "Document Capture & Processing",
      description: "Automated document scanning, OCR, and intelligent data extraction from various document types.",
      features: ["OCR technology", "Data extraction", "Batch processing", "Multi-format support", "Quality assurance", "Integration ready"],
      path: "/DocumentManagement",
      industry: "All Industries"
    },
    {
      category: 'document-management',
      icon: <FaFileAlt />,
      title: "Records Management",
      description: "Comprehensive records management with retention policies, archiving, and compliance features.",
      features: ["Retention policies", "Automated archiving", "Compliance tracking", "Audit trails", "Secure disposal", "Legal hold"],
      path: "/DocumentManagement",
      industry: "Legal, Healthcare, Finance"
    },
    {
      category: 'document-management',
      icon: <FaFileAlt />,
      title: "Contract Management",
      description: "End-to-end contract lifecycle management with approval workflows and compliance tracking.",
      features: ["Contract templates", "Approval workflows", "Version tracking", "Renewal alerts", "Compliance monitoring", "Analytics"],
      path: "/Contact",
      industry: "Legal, Finance, Real Estate"
    },

    // Workflow Automation Solutions
    {
      category: 'workflow-automation',
      icon: <FaCogs />,
      title: "Business Process Automation",
      description: "Automate complex business processes with intelligent workflows and decision engines.",
      features: ["Visual workflow designer", "Decision engines", "Task automation", "Approval workflows", "Performance monitoring", "Process analytics"],
      path: "/DataAutomation",
      industry: "All Industries"
    },
    {
      category: 'workflow-automation',
      icon: <FaCogs />,
      title: "Invoice Processing Automation",
      description: "Automated invoice capture, processing, and approval workflows with intelligent data extraction.",
      features: ["Invoice capture", "Data extraction", "Approval workflows", "Payment processing", "Exception handling", "Analytics"],
      path: "/DataAutomation",
      industry: "Finance, Manufacturing, Retail"
    },
    {
      category: 'workflow-automation',
      icon: <FaCogs />,
      title: "Purchase-to-Pay Automation",
      description: "Complete purchase order to payment automation with integrated procurement workflows.",
      features: ["Purchase orders", "Vendor management", "Approval workflows", "Receiving", "Invoice matching", "Payment processing"],
      path: "/DataAutomation",
      industry: "Manufacturing, Retail, Services"
    },
    {
      category: 'workflow-automation',
      icon: <FaCogs />,
      title: "Employee Onboarding Automation",
      description: "Streamlined employee onboarding with automated document collection and workflow management.",
      features: ["Document collection", "Task assignments", "Progress tracking", "Compliance checks", "Integration with HR systems", "Reporting"],
      path: "/Contact",
      industry: "All Industries"
    },

    // Business Intelligence Solutions
    {
      category: 'business-intelligence',
      icon: <FaChartLine />,
      title: "Business Intelligence & Analytics",
      description: "Transform data into actionable insights with advanced analytics and reporting capabilities.",
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "Predictive analytics", "KPI monitoring", "Drill-down capabilities"],
      path: "/BusinessIntelligence",
      industry: "All Industries"
    },
    {
      category: 'business-intelligence',
      icon: <FaChartLine />,
      title: "Performance Management",
      description: "Monitor and optimize business performance with comprehensive analytics and reporting.",
      features: ["KPI tracking", "Performance dashboards", "Goal setting", "Progress monitoring", "Alerts and notifications", "Trend analysis"],
      path: "/BusinessIntelligence",
      industry: "All Industries"
    },
    {
      category: 'business-intelligence',
      icon: <FaChartLine />,
      title: "Data Analytics & Reporting",
      description: "Advanced data analytics with customizable reports and interactive visualizations.",
      features: ["Data mining", "Statistical analysis", "Interactive charts", "Scheduled reports", "Data export", "Mobile access"],
      path: "/BusinessIntelligence",
      industry: "All Industries"
    },

    // Data Processing Solutions
    {
      category: 'data-processing',
      icon: <FaDatabase />,
      title: "Data Entry Automation",
      description: "Automate manual data entry tasks with intelligent OCR and data validation.",
      features: ["OCR technology", "Data validation", "Error correction", "Batch processing", "Integration APIs", "Quality monitoring"],
      path: "/DataAutomation",
      industry: "All Industries"
    },
    {
      category: 'data-processing',
      icon: <FaDatabase />,
      title: "Forms Processing",
      description: "Automated processing of forms and applications with intelligent data extraction.",
      features: ["Form recognition", "Data extraction", "Validation rules", "Approval workflows", "Status tracking", "Integration"],
      path: "/DataAutomation",
      industry: "Healthcare, Finance, Government"
    },
    {
      category: 'data-processing',
      icon: <FaDatabase />,
      title: "Email Management",
      description: "Automated email processing, classification, and response management.",
      features: ["Email classification", "Auto-routing", "Response templates", "Follow-up tracking", "Integration", "Analytics"],
      path: "/Contact",
      industry: "All Industries"
    },

    // Quality Management Solutions
    {
      category: 'quality-management',
      icon: <FaCheckCircle />,
      title: "Quality Management System",
      description: "Comprehensive quality management with process control and compliance monitoring.",
      features: ["Process control", "Quality metrics", "Compliance tracking", "Audit management", "Corrective actions", "Reporting"],
      path: "/Contact",
      industry: "Manufacturing, Healthcare, Food"
    },
    {
      category: 'quality-management',
      icon: <FaCheckCircle />,
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting for regulatory requirements.",
      features: ["Regulatory tracking", "Compliance reporting", "Audit trails", "Risk assessment", "Policy management", "Training tracking"],
      path: "/Contact",
      industry: "Finance, Healthcare, Legal"
    },

    // Sales & Marketing Solutions
    {
      category: 'sales-marketing',
      icon: <FaUsers />,
      title: "Sales Order Processing",
      description: "Automated sales order processing with integrated customer management.",
      features: ["Order entry", "Customer management", "Inventory checking", "Pricing automation", "Order tracking", "Reporting"],
      path: "/Contact",
      industry: "Retail, Manufacturing, Services"
    },
    {
      category: 'sales-marketing',
      icon: <FaUsers />,
      title: "Customer Relationship Management",
      description: "Integrated CRM with automated lead management and customer engagement.",
      features: ["Lead management", "Customer profiles", "Communication tracking", "Sales pipeline", "Analytics", "Mobile access"],
      path: "/Contact",
      industry: "All Industries"
    },

    // Integration Solutions
    {
      category: 'integration',
      icon: <FaNetworkWired />,
      title: "System Integration",
      description: "Seamless integration with existing ERP, CRM, and business systems.",
      features: ["API integration", "Data synchronization", "Custom connectors", "Real-time sync", "Error handling", "Monitoring"],
      path: "/Integrations",
      industry: "All Industries"
    },
    {
      category: 'integration',
      icon: <FaNetworkWired />,
      title: "Cloud Integration",
      description: "Connect on-premise and cloud applications with secure data exchange.",
      features: ["Cloud connectors", "Data migration", "Hybrid deployment", "Security protocols", "Scalability", "Monitoring"],
      path: "/Integrations",
      industry: "All Industries"
    },

    // Mobile Solutions
    {
      category: 'mobile',
      icon: <FaMobile />,
      title: "Mobile Document Access",
      description: "Secure mobile access to documents and workflows from anywhere.",
      features: ["Mobile apps", "Offline access", "Secure authentication", "Push notifications", "Touch optimization", "Cross-platform"],
      path: "/Contact",
      industry: "All Industries"
    },
    {
      category: 'mobile',
      icon: <FaMobile />,
      title: "Field Service Management",
      description: "Mobile solutions for field service teams with real-time updates and document access.",
      features: ["Field apps", "GPS tracking", "Real-time updates", "Document access", "Photo capture", "Offline sync"],
      path: "/Contact",
      industry: "Services, Manufacturing, Utilities"
    },

    // Security Solutions
    {
      category: 'security',
      icon: <FaLock />,
      title: "Document Security",
      description: "Advanced security features for document protection and access control.",
      features: ["Encryption", "Access control", "Audit trails", "Watermarking", "Digital signatures", "Compliance"],
      path: "/DocumentManagement",
      industry: "All Industries"
    },
    {
      category: 'security',
      icon: <FaLock />,
      title: "Data Protection",
      description: "Comprehensive data protection with backup, recovery, and disaster planning.",
      features: ["Backup automation", "Disaster recovery", "Data encryption", "Access monitoring", "Compliance", "Testing"],
      path: "/Contact",
      industry: "All Industries"
    }
  ];

  // Filter solutions based on active category
  const filteredSolutions = activeCategory === 'all' 
    ? allSolutions 
    : allSolutions.filter(solution => solution.category === activeCategory);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Solutions', icon: <FaRocket /> },
    { id: 'document-management', name: 'Document Management', icon: <FaFileAlt /> },
    { id: 'workflow-automation', name: 'Workflow Automation', icon: <FaCogs /> },
    { id: 'business-intelligence', name: 'Business Intelligence', icon: <FaChartLine /> },
    { id: 'data-processing', name: 'Data Processing', icon: <FaDatabase /> },
    { id: 'quality-management', name: 'Quality Management', icon: <FaCheckCircle /> },
    { id: 'sales-marketing', name: 'Sales & Marketing', icon: <FaUsers /> },
    { id: 'integration', name: 'System Integration', icon: <FaNetworkWired /> },
    { id: 'mobile', name: 'Mobile Solutions', icon: <FaMobile /> },
    { id: 'security', name: 'Security', icon: <FaLock /> }
  ];

  // Industry-specific solutions
  const industrySolutions = [
    {
      industry: "Healthcare",
      icon: "🏥",
      solutions: ["Document Management", "Compliance Management", "Patient Records", "Quality Management", "Mobile Access"]
    },
    {
      industry: "Finance",
      icon: "💰",
      solutions: ["Invoice Processing", "Compliance Management", "Document Security", "Business Intelligence", "Risk Management"]
    },
    {
      industry: "Manufacturing",
      icon: "🏭",
      solutions: ["Quality Management", "Purchase-to-Pay", "Inventory Management", "Performance Analytics", "Field Service"]
    },
    {
      industry: "Legal",
      icon: "⚖️",
      solutions: ["Contract Management", "Document Management", "Compliance Tracking", "Records Management", "Case Management"]
    },
    {
      industry: "Education",
      icon: "🎓",
      solutions: ["Student Records", "Document Management", "Compliance Management", "Mobile Access", "Analytics"]
    },
    {
      industry: "Government",
      icon: "🏛️",
      solutions: ["Records Management", "Compliance Management", "Document Security", "Workflow Automation", "Public Access"]
    },
    {
      industry: "Real Estate",
      icon: "🏢",
      solutions: ["Contract Management", "Document Management", "Property Records", "Client Management", "Mobile Access"]
    },
    {
      industry: "Retail",
      icon: "🛍️",
      solutions: ["Sales Order Processing", "Inventory Management", "Customer Management", "Analytics", "Mobile Solutions"]
    }
  ];

  // Use cases by department
  const departmentUseCases = [
    {
      department: "Finance & Accounting",
      icon: <FaCalculator />,
      useCases: [
        "Automated Invoice Processing",
        "Purchase-to-Pay Automation",
        "Financial Reporting",
        "Compliance Management",
        "Expense Management"
      ]
    },
    {
      department: "Human Resources",
      icon: <FaUsers />,
      useCases: [
        "Employee Onboarding",
        "Document Management",
        "Performance Management",
        "Compliance Tracking",
        "Benefits Administration"
      ]
    },
    {
      department: "Operations",
      icon: <FaCogs />,
      useCases: [
        "Process Automation",
        "Quality Management",
        "Performance Monitoring",
        "Workflow Optimization",
        "Resource Planning"
      ]
    },
    {
      department: "Sales & Marketing",
      icon: <FaChartBar />,
      useCases: [
        "Sales Order Processing",
        "Customer Relationship Management",
        "Lead Management",
        "Sales Analytics",
        "Marketing Automation"
      ]
    },
    {
      department: "IT & Technology",
      icon: <FaServer />,
      useCases: [
        "System Integration",
        "Data Management",
        "Security Management",
        "Cloud Integration",
        "Mobile Solutions"
      ]
    },
    {
      department: "Compliance & Legal",
      icon: <FaShieldAlt />,
      useCases: [
        "Compliance Management",
        "Contract Management",
        "Records Management",
        "Audit Trails",
        "Risk Management"
      ]
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
    trackButtonClick(`learn_more_${solution.title.toLowerCase().replace(/\s+/g, '_')}`);
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

  const handleCategoryFilter = (categoryId) => {
    setActiveCategory(categoryId);
    trackButtonClick(`filter_category_${categoryId}`);
  };

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
              <span>✨ Innovative Solutions</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              <span className="gradient-text">Revolutionary</span> Office Automation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Experience the future of business with our cutting-edge intelligent automation and analytics solutions
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-actions"
            >
              <button 
                className="cta-button primary glass-effect" 
                onClick={handleGetStarted}
                aria-label="Get Started with IntelliSync"
              >
                <span>Get Started</span>
                <div className="button-glow"></div>
              </button>
              <button 
                className="cta-button secondary glass-effect" 
                onClick={handleWatchDemo}
                aria-label="Watch Demo Video"
              >
                <span>Watch Demo</span>
                <div className="play-icon">▶</div>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-stats"
            >
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Solutions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="category-filter">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="filter-header"
            >
              <div className="section-badge">
                <span>🎯</span>
                <span>Categories</span>
              </div>
              <h2>Explore Solutions by Category</h2>
              <p>Discover the perfect solution tailored to your business needs</p>
            </motion.div>

            <div className="category-buttons">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`category-btn glass-effect ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryFilter(category.id)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: categories.indexOf(category) * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={`Filter by ${category.name}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                  <div className="category-glow"></div>
                </motion.button>
              ))}
            </div>
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
              <div className="section-badge">
                <span>🚀</span>
                <span>Solutions</span>
              </div>
              <h2>Our Revolutionary Solutions</h2>
              <p>Cutting-edge tools designed to transform your business operations</p>
            </motion.div>

            <div className="solutions-grid">
              {filteredSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="solution-card glass-effect"
                  onClick={() => handleSolutionCardClick(solution)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Learn more about ${solution.title}`}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSolutionCardClick(solution)}
                  style={{ cursor: 'pointer', outline: 'none' }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="card-glow"></div>
                  <div className="solution-icon">
                    <div className="icon-background"></div>
                    {solution.icon}
                  </div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <div className="solution-industry">
                    <span className="industry-tag glass-effect">{solution.industry}</span>
                  </div>
                  <ul className="solution-features">
                    {solution.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="learn-more-btn glass-effect"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore(solution);
                    }}
                    aria-label={`Learn more about ${solution.title}`}
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
              <p>Tailored solutions for diverse industry needs</p>
            </motion.div>

            <div className="industries-grid">
              {industrySolutions.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="industry-card"
                  tabIndex={0}
                  aria-label={`${industry.industry} industry solutions`}
                  style={{ outline: 'none' }}
                >
                  <div className="industry-icon">{industry.icon}</div>
                  <h3>{industry.industry}</h3>
                  <ul className="industry-solutions">
                    {industry.solutions.map((solution, solIndex) => (
                      <li key={solIndex}>{solution}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Use Cases */}
        <section className="department-use-cases">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Solutions by Department</h2>
              <p>Address specific departmental challenges with targeted solutions</p>
            </motion.div>

            <div className="department-grid">
              {departmentUseCases.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="department-card"
                  tabIndex={0}
                  aria-label={`${dept.department} solutions`}
                  style={{ outline: 'none' }}
                >
                  <div className="department-icon">{dept.icon}</div>
                  <h3>{dept.department}</h3>
                  <ul className="use-cases-list">
                    {dept.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex}>{useCase}</li>
                    ))}
                  </ul>
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
                <p>Over 10 years of experience in office automation and business process optimization</p>
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
                <p>Grow with confidence - our solutions scale with your business needs</p>
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
              <p>Join thousands of businesses that have already revolutionized their operations with IntelliSync IOA</p>
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
                <span className="solution-industry-modal">{selectedSolution.industry}</span>
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
      </div>
    </ErrorBoundary>
  );
}

export default Solutions; 