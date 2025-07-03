import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/DocumentManagement.css';
import { useNavigate } from 'react-router-dom';

function Integrations() {
  const navigate = useNavigate();

  // Section data (from original Integrations)
  const integrationCategories = [
    { icon: '👥', title: 'CRM Systems', desc: 'Connect with popular CRM platforms to sync customer data and automate workflows.' },
    { icon: '💰', title: 'Accounting Software', desc: 'Integrate with accounting systems for automated financial data processing and reporting.' },
    { icon: '☁️', title: 'Cloud Storage', desc: 'Connect with cloud storage platforms for secure document management and file sharing.' },
    { icon: '💬', title: 'Communication Tools', desc: 'Integrate with communication platforms for enhanced collaboration and messaging.' },
  ];
  const features = [
    { icon: '🔌', title: 'API-First Architecture', desc: 'Built with modern APIs for easy integration and customization.' },
    { icon: '⚡', title: 'Real-time Sync', desc: 'Data synchronization in real-time across all connected platforms.' },
    { icon: '🔄', title: 'Custom Workflows', desc: 'Create custom automation workflows between different systems.' },
    { icon: '🔒', title: 'Security & Compliance', desc: 'Enterprise-grade security with SOC 2 compliance and data encryption.' },
  ];
  const benefits = [
    { icon: '🔗', title: 'Unified Data', value: '100%', desc: 'Single source of truth across all your business systems.' },
    { icon: '⏱️', title: 'Time Savings', value: '75%', desc: 'Reduce manual data entry and system switching time.' },
    { icon: '✅', title: 'Error Reduction', value: '90%', desc: 'Minimize data inconsistencies and manual errors.' },
    { icon: '🚀', title: 'Productivity Boost', value: '3x', desc: 'Increase team productivity with streamlined workflows.' },
  ];
  const setupSteps = [
    { icon: '1️⃣', title: 'Choose Platform', desc: 'Select from our library of pre-built integrations or request a custom one.' },
    { icon: '2️⃣', title: 'Configure', desc: 'Set up authentication and configure data mapping with our intuitive interface.' },
    { icon: '3️⃣', title: 'Test & Deploy', desc: 'Test the integration in a sandbox environment before going live.' },
    { icon: '4️⃣', title: 'Go Live', desc: 'Launch your integration and monitor performance.' },
  ];

  return (
    <ErrorBoundary>
      <div className="document-management-page">
        {/* Hero Section */}
        <section className="dm-hero">
          <div className="hero-content">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
              System Integrations
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-subtitle">
              Connect all your business systems and applications for unified data flow and automated workflows. Seamless integrations with CRM, accounting, cloud storage, and communication tools.
            </motion.p>
          </div>
        </section>

        {/* Integration Categories Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Integration Categories</h2>
              <ul className="dm-feature-list lively-list">
                {integrationCategories.map((cat, i) => (
                  <li key={i}><span className="feature-icon">{cat.icon}</span><strong>{cat.title}:</strong> {cat.desc}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="dm-section alt">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Key Features</h2>
              <ul className="dm-feature-list lively-list">
                {features.map((f, i) => (
                  <li key={i}><span className="feature-icon">{f.icon}</span><strong>{f.title}:</strong> {f.desc}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="dm-section">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">Benefits</h2>
              <ul className="dm-feature-list lively-list">
                {benefits.map((b, i) => (
                  <li key={i}><span className="feature-icon">{b.icon}</span><strong>{b.title}:</strong> <span className="highlight">{b.value}</span> {b.desc}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Setup Steps Section */}
        <section className="dm-section alt">
          <div className="container section-flex">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="section-content">
              <h2 className="section-header gradient-underline">How to Get Started</h2>
              <ul className="dm-feature-list lively-list">
                {setupSteps.map((s, i) => (
                  <li key={i}><span className="feature-icon">{s.icon}</span><strong>{s.title}:</strong> {s.desc}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="dm-cta">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="cta-content">
              <h2>Ready to Integrate Your Systems?</h2>
              <p>Discover how IntelliSync can unify your business platforms.</p>
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

export default Integrations;