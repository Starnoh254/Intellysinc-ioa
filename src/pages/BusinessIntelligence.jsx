import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaChartLine, FaChartBar, FaChartPie, FaChartArea, FaEye, FaDownload,
  FaFilter, FaCog, FaBell, FaUser, FaSearch, FaArrowRight,
  FaPlay, FaPause, FaExpand, FaCompress, FaShare, FaBookmark,
  FaAward, FaShieldAlt, FaRocket, FaLightbulb, FaCheckCircle,
  FaGlobe, FaDatabase, FaNetworkWired, FaCloud, FaLock
} from 'react-icons/fa';
import '../styles/BusinessIntelligence.css';

function BusinessIntelligence() {
  const navigate = useNavigate();
  const [activeDashboard, setActiveDashboard] = useState('sales');
  const [isLive, setIsLive] = useState(true);


  useEffect(() => {
    document.title = "Enterprise Business Intelligence Solutions | IntelliSync IOA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Enterprise-grade business intelligence platform delivering actionable insights through advanced analytics, real-time dashboards, and AI-powered predictive modeling.'
      );
    }
  }, []);

  // Professional dashboard configurations
  const dashboards = {
    sales: {
      name: "Sales Performance Analytics",
      icon: "📈",
      description: "Comprehensive sales intelligence and pipeline analytics",

      charts: [
        { type: "line", title: "Revenue Trend Analysis", data: [65, 78, 90, 85, 95, 88, 92] },
        { type: "bar", title: "Regional Performance", data: [45, 32, 28, 19, 15] },
        { type: "pie", title: "Lead Source Distribution", data: [35, 25, 20, 15, 5] }
      ]
    },
    operations: {
      name: "Operational Excellence",
      icon: "⚙️",
      description: "Process optimization and operational intelligence",

      charts: [
        { type: "area", title: "Efficiency Metrics", data: [78, 82, 85, 88, 91, 89, 92] },
        { type: "bar", title: "Department KPIs", data: [92, 87, 94, 89, 91] },
        { type: "line", title: "Quality Trends", data: [5.2, 4.1, 3.2, 2.8, 2.1, 1.8, 1.2] }
      ]
    },
    customer: {
      name: "Customer Intelligence",
      icon: "👥",
      description: "Customer behavior analysis and satisfaction metrics",

      charts: [
        { type: "line", title: "Satisfaction Trends", data: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8] },
        { type: "bar", title: "Customer Segments", data: [40, 30, 20, 10] },
        { type: "pie", title: "Support Categories", data: [45, 25, 20, 10] }
      ]
    }
  };

  // Enterprise BI capabilities
  const biCapabilities = [
    {
      icon: <FaChartLine />,
      title: "Advanced Analytics Engine",
      description: "Enterprise-grade analytics with machine learning and predictive modeling capabilities",
      features: ["Real-time Processing", "ML Integration", "Predictive Analytics", "Custom Algorithms"],
      expertise: "PhD-level data science team"
    },
    {
      icon: <FaChartBar />,
      title: "Executive Dashboard Suite",
      description: "C-level executive dashboards with drill-down capabilities and mobile optimization",
      features: ["Executive Views", "Mobile Responsive", "Drill-down Analysis", "Custom Branding"],
      expertise: "15+ years enterprise experience"
    },
    {
      icon: <FaChartPie />,
      title: "Regulatory Compliance",
      description: "Built-in compliance frameworks for SOX, GDPR, HIPAA, and industry-specific regulations",
      features: ["Audit Trails", "Data Governance", "Compliance Reporting", "Security Controls"],
      expertise: "Certified compliance experts"
    },
    {
      icon: <FaChartArea />,
      title: "Data Integration Hub",
      description: "Seamless integration with 200+ enterprise systems and real-time data synchronization",
      features: ["API Integration", "ETL Processing", "Real-time Sync", "Data Quality"],
      expertise: "Enterprise architecture specialists"
    }
  ];

  // Professional data sources
  const dataSources = [
    {
      name: "Enterprise ERP Systems",
      icon: "🏢",
      description: "SAP, Oracle, Microsoft Dynamics, NetSuite integration",
      status: "connected",
      certifications: ["SAP Certified", "Oracle Partner"]
    },
    {
      name: "CRM Platforms",
      icon: "📊",
      description: "Salesforce, HubSpot, Microsoft Dynamics 365",
      status: "connected",
      certifications: ["Salesforce Partner", "Microsoft Gold Partner"]
    },
    {
      name: "Cloud Infrastructure",
      icon: "☁️",
      description: "AWS, Azure, Google Cloud Platform",
      status: "connected",
      certifications: ["AWS Advanced Partner", "Azure Expert MSP"]
    },
    {
      name: "Data Warehouses",
      icon: "🗄️",
      description: "Snowflake, Amazon Redshift, Google BigQuery",
      status: "available",
      certifications: ["Snowflake Elite Partner"]
    }
  ];

  // Enterprise use cases
  const useCases = [
    {
      title: "Financial Performance Management",
      description: "Comprehensive financial analytics with real-time reporting and predictive modeling",
      icon: "💰",
      metrics: ["Revenue Forecasting", "Cost Analysis", "ROI Optimization"],
      expertise: "CFO Advisory Services"
    },
    {
      title: "Supply Chain Intelligence",
      description: "End-to-end supply chain visibility with predictive analytics and optimization",
      icon: "📦",
      metrics: ["Inventory Optimization", "Demand Forecasting", "Supplier Analytics"],
      expertise: "Supply Chain Specialists"
    },
    {
      title: "Customer Experience Analytics",
      description: "360-degree customer view with behavioral analysis and predictive insights",
      icon: "🎯",
      metrics: ["Customer Lifetime Value", "Churn Prediction", "Personalization"],
      expertise: "Customer Success Experts"
    },
    {
      title: "Risk Management & Compliance",
      description: "Comprehensive risk assessment with regulatory compliance monitoring",
      icon: "🛡️",
      metrics: ["Risk Scoring", "Compliance Monitoring", "Fraud Detection"],
      expertise: "Risk Management Professionals"
    }
  ];



  const handleGetStarted = () => {
    navigate('/Contact?subject=Enterprise BI Solution Inquiry');
  };

  const handleWatchDemo = () => {
    navigate('/CaseStudies');
  };

  const handleScheduleConsultation = () => {
    navigate('/Contact?subject=Enterprise BI Consultation Request');
  };

  const handleDashboardChange = (dashboard) => {
    setActiveDashboard(dashboard);
  };

  const toggleLiveMode = () => {
    setIsLive(!isLive);
  };



  return (
    <div className="business-intelligence-page">
      {/* Professional Hero Section */}
      <motion.section 
        className="bi-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="hero-title"
          >
            Enterprise-Grade <span className="gradient-text">Business Intelligence</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="hero-subtitle"
          >
            Transform enterprise data into actionable intelligence with our award-winning BI platform. 
            Trusted by Fortune 500 companies worldwide.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="primary-btn" onClick={handleGetStarted}>
              <FaRocket />
              <span>Enterprise Demo</span>
            </button>
            <button className="secondary-btn" onClick={handleWatchDemo}>
              <FaEye />
              <span>View Case Studies</span>
            </button>
          </motion.div>
        </div>
      </motion.section>



      {/* Interactive Dashboard Showcase */}
      <section className="dashboard-showcase">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <div className="expert-badge">
              <FaLightbulb />
              <span>Advanced Analytics</span>
            </div>
            <h2>Enterprise Dashboard Experience</h2>
            <p>Professional-grade dashboards designed for executive decision-making and operational excellence</p>
          </motion.div>

          <div className="dashboard-selector">
            {Object.keys(dashboards).map((key) => (
              <button
                key={key}
                className={`dashboard-tab ${activeDashboard === key ? 'active' : ''}`}
                onClick={() => handleDashboardChange(key)}
              >
                <span className="tab-icon">{dashboards[key].icon}</span>
                <div className="tab-content">
                  <span className="tab-name">{dashboards[key].name}</span>
                  <span className="tab-description">{dashboards[key].description}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="dashboard-display">
            <div className="dashboard-header">
              <div className="dashboard-title">
                <h3>{dashboards[activeDashboard].name}</h3>
                <div className="live-indicator">
                  <span className={`status-dot ${isLive ? 'live' : 'offline'}`}></span>
                  <span>{isLive ? 'Live Data' : 'Historical Data'}</span>
                </div>
              </div>
              <div className="dashboard-controls">
                <button 
                  className={`live-toggle ${isLive ? 'active' : ''}`}
                  onClick={toggleLiveMode}
                >
                  <FaPlay />
                  <span>Real-time Mode</span>
                </button>
                <button className="control-btn">
                  <FaDownload />
                </button>
                <button className="control-btn">
                  <FaShare />
                </button>
              </div>
            </div>



            <div className="charts-grid">
              {dashboards[activeDashboard].charts.map((chart, index) => (
                <motion.div
                  key={index}
                  className="chart-container"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="chart-header">
                    <h4>{chart.title}</h4>
                    <div className="chart-controls">
                      <button className="chart-btn">
                        <FaEye />
                      </button>
                      <button className="chart-btn">
                        <FaDownload />
                      </button>
                    </div>
                  </div>
                  <div className={`chart-preview ${chart.type}`}>
                    <div className="chart-placeholder">
                      {chart.type === 'line' && <FaChartLine />}
                      {chart.type === 'bar' && <FaChartBar />}
                      {chart.type === 'pie' && <FaChartPie />}
                      {chart.type === 'area' && <FaChartArea />}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise BI Capabilities */}
      <section className="bi-capabilities">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <div className="expert-badge">
              <FaCog />
              <span>Enterprise Features</span>
            </div>
            <h2>Professional BI Capabilities</h2>
            <p>Enterprise-grade features designed for complex business environments</p>
          </motion.div>

          <div className="capabilities-grid">
            {biCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="capability-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="capability-icon">{capability.icon}</div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="capability-features">
                  {capability.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="expertise-badge">
                  <FaUser />
                  <span>{capability.expertise}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Data Sources */}
      <section className="data-sources">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <div className="expert-badge">
              <FaDatabase />
              <span>Enterprise Integration</span>
            </div>
            <h2>Professional Data Integration</h2>
            <p>Seamless integration with enterprise systems and certified partnerships</p>
          </motion.div>

          <div className="sources-grid">
            {dataSources.map((source, index) => (
              <motion.div
                key={index}
                className="source-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="source-icon">{source.icon}</div>
                <h3>{source.name}</h3>
                <p>{source.description}</p>
                <div className="source-status">
                  <span className={`status-badge ${source.status}`}>
                    {source.status === 'connected' ? 'Connected' : 'Available'}
                  </span>
                </div>
                <div className="certifications">
                  {source.certifications.map((cert, idx) => (
                    <span key={idx} className="certification-badge">{cert}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Use Cases */}
      <section className="bi-use-cases">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <div className="expert-badge">
              <FaNetworkWired />
              <span>Enterprise Solutions</span>
            </div>
            <h2>Professional Use Cases</h2>
            <p>Proven solutions for enterprise challenges with expert consultation</p>
          </motion.div>

          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="use-case-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="use-case-icon">{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
                <div className="metrics-list">
                  {useCase.metrics.map((metric, idx) => (
                    <span key={idx} className="metric-tag">{metric}</span>
                  ))}
                </div>
                <div className="expertise-info">
                  <FaUser />
                  <span>{useCase.expertise}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="bi-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <div className="expert-badge">
              <FaRocket />
              <span>Enterprise Ready</span>
            </div>
            <h2>Ready to Transform Your Enterprise Intelligence?</h2>
            <p>Join Fortune 500 companies that trust our enterprise-grade BI platform for their most critical business decisions</p>
            <div className="cta-actions">
              <button className="cta-btn primary" onClick={handleGetStarted}>
                <FaRocket />
                <span>Schedule Enterprise Demo</span>
                <FaArrowRight />
              </button>
              <button className="cta-btn secondary" onClick={handleScheduleConsultation}>
                <FaUser />
                <span>Consult with Experts</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BusinessIntelligence;