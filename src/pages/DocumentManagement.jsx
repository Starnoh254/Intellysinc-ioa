import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLock, FaCloud, FaCogs, FaChartLine, FaArrowRight, FaSearch, FaShareAlt, FaSignature, FaSyncAlt, FaDatabase } from 'react-icons/fa';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/DocumentManagement.css';
import { useNavigate } from 'react-router-dom';

function DocumentManagement() {
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <div className="document-management-page">
        {/* Hero Section */}
        <section className="dm-hero">
          <div className="hero-content">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
              Content & Process Management Solution
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
              <br />Transform Your Business with <span className="highlight">Intelligent Document Management</span><br /> <br />
              In today's fast-paced business environment, staying competitive requires streamlined processes and strategic information management. <br /><br /><span className="highlight">Intellisync-OA</span> empowers organizations—from small businesses to large enterprises—to optimize efficiency, enhance security, and reduce operational costs by structuring data and workflows intelligently.
            </motion.p>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Key Features of our Document Management Solution</h2>
              <ul className="dm-feature-list lively-list">
                <li><FaLock className="feature-icon" /><strong>Secure:</strong> Centralize documents in a protected digital repository</li>
                <li><FaCloud className="feature-icon" /><strong>Capture:</strong> Digitize paper files, import electronic documents, and gather data via smart e-forms</li>
                <li><FaCogs className="feature-icon" /><strong>Manage:</strong> Organize, collaborate, and enforce retention policies</li>
                <li><FaArrowRight className="feature-icon" /><strong>Access:</strong> Retrieve critical information anytime, anywhere</li>
                <li><FaSyncAlt className="feature-icon" /><strong>Automate:</strong> Streamline core business processes with intelligent workflows</li>
                <li><FaChartLine className="feature-icon" /><strong>Analyze:</strong> Track performance metrics and make data-driven decisions</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="dm-section alt">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Why Choose Our Service?</h2>
              <ul className="dm-feature-list lively-list">
                <li><FaCheckCircle className="feature-icon" /><strong>Boost Productivity:</strong> Automate repetitive tasks for faster, error-free operations. Accelerate customer responses with quick document retrieval.</li>
                <li><FaLock className="feature-icon" /><strong>Enhance Security:</strong> Store sensitive data in a tamper-proof digital vault. Maintain compliance with GDPR and other regulatory standards.</li>
                <li><FaCloud className="feature-icon" /><strong>Maximize Flexibility:</strong> Access files on-premise, in the cloud, or via mobile. Scale effortlessly as your business grows.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Smart Capture & Automation Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Smart Capture & Automation</h2>
              <ul className="dm-feature-list lively-list">
                <li><FaSearch className="feature-icon" /><strong>AI-Powered Data Extraction:</strong> Reduce manual data entry with self-learning AI. Process high volumes of invoices without complex setup.</li>
                <li><FaSyncAlt className="feature-icon" /><strong>AP Automation:</strong> Prevent duplicate or fraudulent payments. Track invoice approvals from anywhere.</li>
                <li><FaChartLine className="feature-icon" /><strong>Fast ROI:</strong> Lower processing costs with cloud-based efficiency. No additional hardware or software required.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Secure Digital Repository Section */}
        <section className="dm-section alt">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Secure Digital Repository</h2>
              <ul className="dm-feature-list lively-list">
                <li><FaLock className="feature-icon" /><strong>Role-Based Access Control:</strong> Simplify permissions management</li>
                <li><FaCheckCircle className="feature-icon" /><strong>Anti-Tamper Protection:</strong> Verify document authenticity</li>
                <li><FaCloud className="feature-icon" /><strong>Disaster Recovery:</strong> Automatic backups ensure data safety</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Seamless Integration & Collaboration Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Seamless Integration & Collaboration</h2>
              <ul className="dm-feature-list lively-list">
                <li><FaSyncAlt className="feature-icon" /><strong>Workflow Automation:</strong> Never miss deadlines with background task automation</li>
                <li><FaShareAlt className="feature-icon" /><strong>Third-Party Integrations:</strong> Connect with Microsoft Office, SAP, SharePoint, and more</li>
                <li><FaSignature className="feature-icon" /><strong>eSignature Support:</strong> AdobeSign, DocuSign, and other leading providers</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Access Anywhere, Anytime Section */}
        <section className="dm-section alt">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Access Anywhere, Anytime</h2>
              <ul className="dm-feature-list lively-list">
                <li><FaCloud className="feature-icon" /><strong>Desktop, Web & Mobile:</strong> Work offline and sync later</li>
                <li><FaSearch className="feature-icon" /><strong>Advanced Search:</strong> Locate files by content or metadata</li>
                <li><FaShareAlt className="feature-icon" /><strong>Secure Sharing:</strong> Export, email, or share via portals</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Advanced Analytics & Reporting Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Advanced Analytics & Reporting</h2>
              <ul className="dm-feature-list lively-list">
                <li><FaChartLine className="feature-icon" /><strong>Custom Dashboards:</strong> Monitor KPIs in real time</li>
                <li><FaDatabase className="feature-icon" /><strong>Audit Trails:</strong> Track document history for compliance</li>
                <li><FaChartLine className="feature-icon" /><strong>Scheduled Reports:</strong> Automate insights for better decision-making</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="dm-cta">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="cta-content">
              <h2>Ready to Optimize Your Business?</h2>
              <p>Discover how Intellisync-OA can revolutionize your document and process management.</p>
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
            </motion.div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default DocumentManagement;