import React from 'react';
import { motion } from 'framer-motion';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/DocumentManagement.css';

const placeholder = '/public/images/placeholder-icon.png';

const capabilities = [
  { img: placeholder, alt: 'Secure', title: 'Secure', desc: 'Central digital repository for your data.' },
  { img: placeholder, alt: 'Capture', title: 'Capture', desc: 'Import from paper, digital files, and e-forms.' },
  { img: placeholder, alt: 'Manage', title: 'Manage', desc: 'Collaborate, integrate, and set retention policies.' },
  { img: placeholder, alt: 'Access', title: 'Access', desc: 'Retrieve your data anytime, anywhere.' },
  { img: placeholder, alt: 'Automate', title: 'Automate', desc: 'Optimize and automate business processes.' },
  { img: placeholder, alt: 'Analyze', title: 'Analyze', desc: 'Monitor and react to key performance indicators.' },
];

const benefits = [
  { img: placeholder, alt: 'Productivity', title: 'Productivity', desc: 'Automate and optimize processes for speed and accuracy. Quickly create, capture, and find information to speed up customer responses.' },
  { img: placeholder, alt: 'Security', title: 'Security', desc: 'Keep information safe, secure, and confidential in a central digital repository. Gain clear overview of your data and business-critical processes to ensure compliance.' },
  { img: placeholder, alt: 'Flexibility', title: 'Flexibility', desc: 'Scalable solution available on-premise or as a managed cloud service. Access your information anytime, anywhere.' },
];

const automation = [
  { img: placeholder, alt: 'AI-powered Smart Capture', title: 'AI-powered Smart Capture', desc: 'Fast, accurate data extraction and invoice processing. Replace error-prone manual processes with self-learning AI.' },
  { img: placeholder, alt: 'AP Workflow Automation', title: 'AP Workflow Automation', desc: 'Automated Accounts Payable workflows to prevent duplicates and fraud. Easy tracking, review, and approval of invoices from anywhere.' },
  { img: placeholder, alt: 'Content Connector', title: 'Content Connector', desc: 'Automate information flow from folders, email, and cloud storage. Integrates with Microsoft Office and Exchange.' },
  { img: placeholder, alt: 'E-Forms', title: 'E-Forms', desc: 'Quick, intuitive data capture—internally or on customer portals. Forms adapt dynamically to responses for smarter processes.' },
];

const security = [
  { img: placeholder, alt: 'Access Control', title: 'Access Control', desc: 'Granular access control and permissions with role-based security.' },
  { img: placeholder, alt: 'Anti-tamper', title: 'Anti-tamper', desc: 'Authenticity of documents verified on retrieval.' },
  { img: placeholder, alt: 'Disaster Recovery', title: 'Disaster Recovery', desc: 'Automatic backup storage for data recovery.' },
  { img: placeholder, alt: 'Compliance', title: 'Compliance', desc: 'Compliance with GDPR and other data protection regulations. Supports GDPdU audit file requirements.' },
];

function CardGrid({ title, items }) {
  return (
    <section className="dm-card-section">
      <h2>{title}</h2>
      <div className="dm-card-grid">
        {items.map((item, idx) => (
          <motion.div
            className="dm-info-card"
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            viewport={{ once: true }}
            tabIndex={0}
            aria-label={item.title}
          >
            <div className="dm-card-icon">
              <img src={item.img} alt={item.alt} width="48" height="48" style={{objectFit: 'contain'}} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function DocumentManagement() {
  return (
    <ErrorBoundary>
      <div className="document-management-page">
        {/* Hero/Overview Section */}
        <motion.section 
          className="dm-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            IntelliSync-IOA Document Management System
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="hero-subtitle"
          >
            Transform the way you manage and share business documents. IntelliSync-IOA helps you stay ahead in a competitive marketplace by organizing and structuring your data and processes for efficiency, security, and strategic advantage.
          </motion.p>
        </motion.section>
        <CardGrid title="Core Capabilities" items={capabilities} />
        <CardGrid title="Key Benefits" items={benefits} />
        <CardGrid title="Smart Capture & Workflow Automation" items={automation} />
        <CardGrid title="Security & Compliance" items={security} />
      </div>
    </ErrorBoundary>
  );
}

export default DocumentManagement;