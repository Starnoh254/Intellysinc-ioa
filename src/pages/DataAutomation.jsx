import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCogs, FaDatabase, FaChartLine, FaUpload, FaCheckCircle, FaDownload, FaSitemap, FaNetworkWired, FaArrowRight, FaCloud, FaMobile } from 'react-icons/fa';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/DocumentManagement.css';
import { useNavigate } from 'react-router-dom';

function DataAutomation() {
  const navigate = useNavigate();

  // Section data (from original DataAutomation)
  const automationProcess = [
    { icon: <FaUpload />, title: 'Data Input', desc: 'Capture data from multiple sources' },
    { icon: <FaCogs />, title: 'Processing', desc: 'AI-powered data processing' },
    { icon: <FaCheckCircle />, title: 'Validation', desc: 'Quality assurance checks' },
    { icon: <FaDownload />, title: 'Output', desc: 'Deliver processed data' },
  ];
  const automationTypes = [
    { icon: <FaUpload />, title: 'Document Processing', desc: 'Extract, classify, and process documents using AI and OCR.' },
    { icon: <FaSitemap />, title: 'Workflow Automation', desc: 'Streamline business processes with intelligent workflow automation.' },
    { icon: <FaNetworkWired />, title: 'Data Integration', desc: 'Connect and synchronize data across multiple systems.' },
    { icon: <FaChartLine />, title: 'Reporting Automation', desc: 'Generate and distribute reports automatically.' },
  ];
  const performanceMetrics = [
    { icon: <FaChartLine />, title: 'Time Savings', value: '80%', desc: 'Reduce manual data entry and processing time.' },
    { icon: <FaCheckCircle />, title: 'Error Reduction', value: '95%', desc: 'Minimize human errors in data processing.' },
    { icon: <FaRobot />, title: 'Scalability', value: '10x', desc: 'Handle increased workloads without additional staff.' },
    { icon: <FaCloud />, title: 'Cost Efficiency', value: '60%', desc: 'Lower operational costs through automation.' },
  ];
  const industries = [
    { icon: '🏥', name: 'Healthcare' },
    { icon: '💰', name: 'Finance' },
    { icon: '🏭', name: 'Manufacturing' },
    { icon: '🛍️', name: 'Retail' },
  ];

  return (
    <ErrorBoundary>
      <div className="document-management-page">
        {/* Hero Section */}
        <section className="dm-hero">
          <div className="hero-content">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
              Data Automation Solutions
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
              Transform manual processes into intelligent, automated workflows. Reduce processing time by 80% with our data automation solutions.
            </motion.p>
          </div>
        </section>

        {/* Process Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Automation Process</h2>
              <ul className="dm-feature-list lively-list">
                {automationProcess.map((step, i) => (
                  <li key={i}><span className="feature-icon">{step.icon}</span><strong>{step.title}:</strong> {step.desc}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Automation Types Section */}
        <section className="dm-section alt">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Automation Types</h2>
              <ul className="dm-feature-list lively-list">
                {automationTypes.map((type, i) => (
                  <li key={i}><span className="feature-icon">{type.icon}</span><strong>{type.title}:</strong> {type.desc}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Performance Metrics</h2>
              <ul className="dm-feature-list lively-list">
                {performanceMetrics.map((metric, i) => (
                  <li key={i}><span className="feature-icon">{metric.icon}</span><strong>{metric.title}:</strong> <span className="highlight">{metric.value}</span> {metric.desc}</li>
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

        {/* CTA Section */}
        <section className="dm-cta">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="cta-content">
              <h2>Ready to Automate Your Data?</h2>
              <p>Discover how IntelliSync can revolutionize your data processes.</p>
              <div className="cta-actions">
                <button className="cta-button primary" onClick={() => navigate('/Contact')} type="button">
                  <span>Contact us today for a demo!</span>
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default DataAutomation; 