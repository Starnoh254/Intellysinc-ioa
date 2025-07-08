import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLock, FaCloud, FaCogs, FaChartLine, FaArrowRight, FaSearch, FaShareAlt, FaSignature, FaSyncAlt, FaDatabase } from 'react-icons/fa';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/DocumentManagement.css';
import '../styles/DataAutomation.css';
import { useNavigate } from 'react-router-dom';

function DocumentManagement() {
  const navigate = useNavigate();

  // Split section content arrays
  const features = [
    { icon: <FaLock />, title: 'Secure', desc: 'Centralize documents in a protected digital repository' },
    { icon: <FaCloud />, title: 'Capture', desc: 'Digitize paper files, import electronic documents, and gather data via smart e-forms' },
    { icon: <FaCogs />, title: 'Manage', desc: 'Organize, collaborate, and enforce retention policies' },
    { icon: <FaArrowRight />, title: 'Access', desc: 'Retrieve critical information anytime, anywhere' },
    { icon: <FaSyncAlt />, title: 'Automate', desc: 'Streamline core business processes with intelligent workflows' },
    { icon: <FaChartLine />, title: 'Analyze', desc: 'Track performance metrics and make data-driven decisions' }
  ];

  const whyChoose = [
    { icon: <FaCheckCircle />, title: 'Boost Productivity', desc: 'Automate repetitive tasks for faster, error-free operations. Accelerate customer responses with quick document retrieval.' },
    { icon: <FaLock />, title: 'Enhance Security', desc: 'Store sensitive data in a tamper-proof digital vault. Maintain compliance with GDPR and other regulatory standards.' },
    { icon: <FaCloud />, title: 'Maximize Flexibility', desc: 'Access files on-premise, in the cloud, or via mobile. Scale effortlessly as your business grows.' }
  ];

  const smartCapture = [
    { icon: <FaSearch />, title: 'AI-Powered Data Extraction', desc: 'Reduce manual data entry with self-learning AI. Process high volumes of invoices without complex setup.' },
    { icon: <FaSyncAlt />, title: 'AP Automation', desc: 'Prevent duplicate or fraudulent payments. Track invoice approvals from anywhere.' },
    { icon: <FaChartLine />, title: 'Fast ROI', desc: 'Lower processing costs with cloud-based efficiency. No additional hardware or software required.' }
  ];

  const repository = [
    { icon: <FaLock />, title: 'Role-Based Access Control', desc: 'Simplify permissions management' },
    { icon: <FaCheckCircle />, title: 'Anti-Tamper Protection', desc: 'Verify document authenticity' },
    { icon: <FaCloud />, title: 'Disaster Recovery', desc: 'Automatic backups ensure data safety' }
  ];

  return (
    <ErrorBoundary>
      <div className="data-automation-page">
        <div className="main-content">
          {/* Hero Section */}
          <section className="da-hero" style={{ background: `url('${import.meta.env.BASE_URL}images/document-management.jpg') center center/cover no-repeat` }}>
            <div className="hero-overlay" />
            <div className="hero-content">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
                Content & Process Management Solution
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
                <br />Transform Your Business with Intelligent Document Management<br /> <br />
                In today's fast-paced business environment, staying competitive requires streamlined processes and strategic information management. <br /><br />IntelliSync Office Automation empowers organizations—from small businesses to large enterprises—to optimize efficiency, enhance security, and reduce operational costs by structuring data and workflows intelligently.
              </motion.p>
            </div>
          </section>

          {/* Split Section 1: Features & Why Choose */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Key Features</h2>
              <ul className="dm-feature-list lively-list">
                {features.map((item, i) => (
                  <li key={item.title}><span className="feature-icon">{item.icon}</span><strong>{item.title}:</strong> {item.desc}</li>
                ))}
              </ul>
            </div>
            <div className="split-half">
              <h2 className="section-header gradient-underline">Why Choose Our Service?</h2>
              <ul className="dm-feature-list lively-list">
                {whyChoose.map((item, i) => (
                  <li key={item.title}><span className="feature-icon">{item.icon}</span><strong>{item.title}:</strong> {item.desc}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Split Section 2: Smart Capture & Repository */}
          <section className="split-section">
            <div className="split-half">
              <h2 className="section-header gradient-underline">Smart Capture & Automation</h2>
              <ul className="dm-feature-list lively-list">
                {smartCapture.map((item, i) => (
                  <li key={item.title}><span className="feature-icon">{item.icon}</span><strong>{item.title}:</strong> {item.desc}</li>
                ))}
              </ul>
            </div>
            <div className="split-half">
              <h2 className="section-header gradient-underline">Secure Digital Repository</h2>
              <ul className="dm-feature-list lively-list">
                {repository.map((item, i) => (
                  <li key={item.title}><span className="feature-icon">{item.icon}</span><strong>{item.title}:</strong> {item.desc}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        {/* CTA Section */}
        <section className="dm-cta">
          <div className="cta-content">
            <h2>Ready to Optimize Your Business?</h2>
            <p>Discover how IntelliSync Office Automation can revolutionize your document and process management.</p>
            <div className="cta-actions">
              <button
                className="cta-button primary"
                onClick={() => navigate('/Contact')}
                type="button"
              >
                <span>Contact us today for a demo!</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default DocumentManagement;