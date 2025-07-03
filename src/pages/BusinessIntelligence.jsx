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
import '../styles/DataAutomation.css';

function BusinessIntelligence() {
  const navigate = useNavigate();

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

  // BI Capabilities
  const biCapabilities = [
    { icon: <FaChartLine />, title: "Advanced Analytics Engine", desc: "Enterprise-grade analytics with machine learning and predictive modeling capabilities." },
    { icon: <FaChartBar />, title: "Executive Dashboard Suite", desc: "C-level executive dashboards with drill-down capabilities and mobile optimization." },
    { icon: <FaChartPie />, title: "Regulatory Compliance", desc: "Built-in compliance frameworks for SOX, GDPR, HIPAA, and industry-specific regulations." },
    { icon: <FaChartArea />, title: "Data Integration Hub", desc: "Seamless integration with 200+ enterprise systems and real-time data synchronization." }
  ];

  // Data Sources
  const dataSources = [
    { icon: "🏢", title: "Enterprise ERP Systems", desc: "SAP, Oracle, Microsoft Dynamics, NetSuite integration." },
    { icon: "📊", title: "CRM Platforms", desc: "Salesforce, HubSpot, Microsoft Dynamics 365." },
    { icon: "☁️", title: "Cloud Infrastructure", desc: "AWS, Azure, Google Cloud Platform." },
    { icon: "🗄️", title: "Data Warehouses", desc: "Snowflake, Amazon Redshift, Google BigQuery." }
  ];

  // Use Cases
  const useCases = [
    { icon: "💰", title: "Financial Performance Management", desc: "Comprehensive financial analytics with real-time reporting and predictive modeling." },
    { icon: "📦", title: "Supply Chain Intelligence", desc: "End-to-end supply chain visibility with predictive analytics and optimization." },
    { icon: "🎯", title: "Customer Experience Analytics", desc: "360-degree customer view with behavioral analysis and predictive insights." },
    { icon: "🛡️", title: "Risk Management & Compliance", desc: "Comprehensive risk assessment with regulatory compliance monitoring." }
  ];

  // Key Benefits
  const benefits = [
    { icon: <FaRocket />, title: "Faster Insights", value: "Real-time", desc: "Get actionable insights instantly." },
    { icon: <FaCheckCircle />, title: "Accuracy", value: "99.9%", desc: "Highly accurate analytics and reporting." },
    { icon: <FaCloud />, title: "Scalability", value: "Enterprise", desc: "Scale analytics across your organization." },
    { icon: <FaShieldAlt />, title: "Compliance", value: "100%", desc: "Meet all regulatory and industry standards." }
  ];

  const handleGetStarted = () => {
    navigate('/Contact?subject=Enterprise BI Solution Inquiry');
  };

  return (
    <div className="data-automation-page">
      <div className="main-content">
                  {/* Hero Section */}
          <section className="da-hero" style={{ background: "url('./images/business-intelligence.jpg') center center/cover no-repeat" }}>
            <div className="hero-overlay" />
            <div className="hero-content">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title" style={{ color: '#ffffff' }}>
              Enterprise-Grade <span className="gradient-text" style={{ color: '#f59e0b' }}>Business Intelligence</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle" style={{ color: '#ffffff' }}>
              Enterprise-grade business intelligence platform delivering actionable insights through advanced analytics, real-time dashboards, and AI-powered predictive modeling.
            </motion.p>
          </div>
        </section>

        {/* Split Section 1: Capabilities & Data Sources */}
        <section className="split-section">
          <div className="split-half">
            <h2 className="section-header gradient-underline">BI Capabilities</h2>
            <ul className="dm-feature-list lively-list">
              {biCapabilities.map((item) => (
                <li key={item.title}><span className="feature-icon">{item.icon}</span><strong>{item.title}:</strong> {item.desc}</li>
              ))}
            </ul>
          </div>
          <div className="split-half">
            <h2 className="section-header gradient-underline">Data Sources</h2>
            <ul className="dm-feature-list lively-list">
              {dataSources.map((item) => (
                <li key={item.title}><span className="feature-icon">{item.icon}</span><strong>{item.title}:</strong> {item.desc}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Split Section 2: Use Cases & Benefits */}
        <section className="split-section">
          <div className="split-half">
            <h2 className="section-header gradient-underline">Use Cases</h2>
            <ul className="dm-feature-list lively-list">
              {useCases.map((item) => (
                <li key={item.title}><span className="feature-icon">{item.icon}</span><strong>{item.title}:</strong> {item.desc}</li>
              ))}
            </ul>
          </div>
          <div className="split-half">
            <h2 className="section-header gradient-underline">Key Benefits</h2>
            <ul className="dm-feature-list lively-list">
              {benefits.map((benefit) => (
                <li key={benefit.title}><span className="feature-icon">{benefit.icon}</span><strong>{benefit.title}:</strong> <span className="highlight">{benefit.value}</span> {benefit.desc}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      {/* CTA Section */}
      <section className="dm-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Business Intelligence?</h2>
          <p>Discover how IntelliSync can empower your organization with actionable insights.</p>
          <div className="cta-actions">
            <button className="cta-button primary" onClick={handleGetStarted} type="button">
              <span>Contact us today for a demo!</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusinessIntelligence;
