import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Solutions.css';

const Solutions = () => {
  return (
    <div className="solutions-page">
      {/* Modern Hero Section */}
      <section className="solutions-hero modern-hero-bg">
        <div className="solutions-hero-overlay" />
        <div className="solutions-hero-content">
          <h1>Our Solutions</h1>
          <p>
            IntelliSync Office Automation Limited delivers a comprehensive suite of digital solutions to transform your business operations, drive efficiency, and unlock actionable insights. Explore our core offerings below.
          </p>
        </div>
      </section>

      {/* Business Intelligence & Analytics */}
      <section className="solutions-section modern-card">
        <h2>Business Intelligence & Analytics</h2>
        <p>
          Unlock actionable insights with advanced analytics, real-time dashboards, and AI-powered predictive modeling. Our BI platform empowers executive decision-making and operational excellence.
        </p>
        <ul>
          <li>Advanced Analytics Engine (ML, predictive modeling, real-time processing)</li>
          <li>Executive Dashboard Suite (drill-down, mobile, custom branding)</li>
          <li>Regulatory Compliance (SOX, GDPR, HIPAA, audit trails, data governance)</li>
          <li>Data Integration Hub (200+ enterprise systems, ETL, real-time sync)</li>
          <li><strong>Use Cases:</strong> Financial performance, supply chain, customer analytics, risk management</li>
        </ul>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Link to="/BusinessIntelligence" className="modern-cta-btn">Learn More</Link>
        </div>
      </section>

      {/* Data Automation */}
      <section className="solutions-section modern-card">
        <h2>Data Automation</h2>
        <p>
          Transform manual processes into intelligent, automated workflows. Reduce processing time, minimize errors, and scale effortlessly with our data automation solutions.
        </p>
        <ul>
          <li>Document Processing (AI, OCR, classification, validation, workflow routing)</li>
          <li>Workflow Automation (process mapping, approvals, task assignment)</li>
          <li>Data Integration (API, real-time sync, transformation, error handling)</li>
          <li>Reporting Automation (scheduled reports, dashboards, email/mobile delivery)</li>
          <li><strong>Performance:</strong> 80% time savings, 95% error reduction, 60% cost efficiency, 10x scalability</li>
          <li><strong>Industries:</strong> Healthcare, finance, manufacturing, HR, and more</li>
        </ul>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Link to="/DataAutomation" className="modern-cta-btn">Learn More</Link>
        </div>
      </section>

      {/* Document Management */}
      <section className="solutions-section modern-card">
        <h2>Document Management</h2>
        <p>
          Secure, scalable, and intelligent document control for the entire document lifecycle. Streamline capture, processing, storage, collaboration, and compliance.
        </p>
        <ul>
          <li>Capture, process, store, access, collaborate, and archive documents</li>
          <li>Enterprise security, mobile access, analytics & insights, compliance-ready (GDPR, HIPAA, SOX)</li>
          <li><strong>Use Cases:</strong> Patient records, case files, financial docs, quality documentation</li>
        </ul>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Link to="/DocumentManagement" className="modern-cta-btn">Learn More</Link>
        </div>
      </section>

      {/* Workflow Automation */}
      <section className="solutions-section modern-card">
        <h2>Workflow Automation</h2>
        <p>
          Streamline your business processes with comprehensive workflow automation. Automate everything from invoice processing to employee onboarding.
        </p>
        <ul>
          <li>Automated processes: invoice processing, purchase-to-pay, onboarding, business process automation</li>
          <li>Visual workflow designer, process orchestration, AI-powered decisions, real-time analytics</li>
          <li><strong>Industries:</strong> Manufacturing, healthcare, finance, retail</li>
        </ul>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Link to="/WorkflowAutomation" className="modern-cta-btn">Learn More</Link>
        </div>
      </section>

      {/* System Integrations */}
      <section className="solutions-section modern-card">
        <h2>System Integrations</h2>
        <p>
          Connect all your business systems and applications for unified data flow and automated workflows. We offer seamless integrations with leading platforms.
        </p>
        <ul>
          <li>CRM (Salesforce, HubSpot, Zoho, Microsoft Dynamics, etc.)</li>
          <li>Accounting (QuickBooks, Xero, Sage, etc.)</li>
          <li>Cloud Storage (Google Drive, Dropbox, OneDrive, Box, etc.)</li>
          <li>Communication Tools (Slack, Teams, Zoom, etc.)</li>
          <li>API-first architecture, real-time sync, custom workflows, secure data flow</li>
        </ul>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Link to="/Integrations" className="modern-cta-btn">Learn More</Link>
        </div>
      </section>

      {/* Sales & Marketing */}
      <section className="solutions-section modern-card">
        <h2>Sales & Marketing</h2>
        <p>
          Optimize your sales and marketing operations with automated order processing and comprehensive CRM solutions.
        </p>
        <ul>
          <li>Automated sales order processing, customer management, real-time inventory, dynamic pricing, and analytics</li>
          <li>Integrated CRM with lead management, customer engagement, pipeline automation, and mobile access</li>
        </ul>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Link to="/SalesMarketing" className="modern-cta-btn">Learn More</Link>
        </div>
      </section>

      {/* Security Services */}
      <section className="solutions-section modern-card">
        <h2>Security Services</h2>
        <p>
          Enterprise-grade document security and data protection for your business.
        </p>
        <ul>
          <li>Document security: encryption, access control, audit trails, digital signatures, compliance monitoring</li>
          <li>Data protection: automated backup, disaster recovery, data encryption, access monitoring, compliance reporting</li>
        </ul>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Link to="/SecurityServices" className="modern-cta-btn">Learn More</Link>
        </div>
      </section>

      {/* Mobile Solutions */}
      <section className="solutions-section modern-card">
        <h2>Mobile Solutions</h2>
        <p>
          Enable your workforce to work from anywhere with secure mobile applications and field service management.
        </p>
        <ul>
          <li>Mobile document access: cross-platform apps, offline access, secure authentication, real-time sync</li>
          <li>Field service management: GPS tracking, job updates, document access in the field, photo capture, offline sync</li>
        </ul>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Link to="/MobileSolutions" className="modern-cta-btn">Learn More</Link>
        </div>
      </section>

      {/* Quality Management */}
      <section className="solutions-section modern-card">
        <h2>Quality Management</h2>
        <p>
          Comprehensive quality management and compliance solutions for regulatory excellence.
        </p>
        <ul>
          <li>Quality management system: process control, KPIs, compliance tracking, audit management, analytics</li>
          <li>Compliance management: regulatory tracking, automated reporting, audit trails, risk assessment, policy management</li>
        </ul>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Link to="/QualityManagement" className="modern-cta-btn">Learn More</Link>
        </div>
      </section>

      {/* Data Processing */}
      <section className="solutions-section modern-card">
        <h2>Data Processing</h2>
        <p>
          Automate data entry, forms processing, and email management with intelligent solutions.
        </p>
        <ul>
          <li>Data entry automation: OCR, validation, error correction, batch processing, system integration</li>
          <li>Forms processing: multi-format recognition, data extraction, approval workflows, status tracking</li>
          <li>Email management: classification, automated routing, template responses, CRM integration, analytics</li>
        </ul>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Link to="/DataProcessing" className="modern-cta-btn">Learn More</Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="solutions-cta modern-cta">
        <p>
          Ready to transform your business? <Link to="/Contact" className="modern-cta-btn">Contact us</Link> or <Link to="/Contact?subject=Demo Request" className="modern-cta-btn">request a demo</Link> to get started with IntelliSync solutions.
        </p>
      </section>
    </div>
  );
};

export default Solutions;
