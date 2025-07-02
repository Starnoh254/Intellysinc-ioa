import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CompanyInfo.css'; // ✅ Ensure the filename matches exactly (case-sensitive)

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Section component using updated class names
const Section = ({ title, children }) => (
  <motion.section
    className="company-info-section"
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ duration: 0.5 }}
  >
    <div className="company-info-card">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  </motion.section>
);

function CompanyInfo() {
  return (
    <div className="company-info-page">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="company-info-heading"
      >
        <br />
        OA OFFICE AUTOMATION LTD.
      </motion.h1>

      <Section title="Why OA Office Automation">
        <p>
          OA leverages technology to streamline office tasks by integrating software, hardware, processes, and workflows to boost productivity, reduce errors, and optimize resource use.
        </p>
      </Section>

      <Section title="Key Components of OA Office Automation">
        <ol>
          <li><strong>Document Management:</strong> Easy creation, storage, and sharing of documents.</li>
          <li><strong>Workflow Automation:</strong> Automates approvals, notifications, and tasks.</li>
          <li><strong>Collaboration Tools:</strong> Shared workspaces, real-time editing, messaging.</li>
          <li><strong>Data Analysis:</strong> Simplified data collection and reporting.</li>
          <li><strong>Integration:</strong> Seamless with CRMs, ERPs, AI tools, and more.</li>
        </ol>
      </Section>

      <Section title="Benefits of Office Automation">
        <ul>
          <li>Increased productivity</li>
          <li>Cost savings</li>
          <li>Improved accuracy</li>
          <li>Enhanced communication</li>
          <li>Scalability</li>
        </ul>
      </Section>

      <Section title="Company Overview">
        <p>
          OA provides end-to-end office automation solutions by integrating software, hardware, and workflows to improve operations.
        </p>
      </Section>

      <Section title="Mission">
        <p>To help organizations reach their potential through scalable automation.</p>
      </Section>

      <Section title="Vision">
        <p>To be the world's most trusted office automation partner.</p>
      </Section>

      <Section title="Core Values">
        <ul>
          <li>Innovation</li>
          <li>Excellence</li>
          <li>Customer Focus</li>
          <li>Integrity</li>
          <li>Collaboration</li>
        </ul>
      </Section>

      <Section title="Service Offerings">
        <ul>
          <li>Workflow assessment & consulting</li>
          <li>Custom software development</li>
          <li>Hardware integration</li>
          <li>System implementation</li>
          <li>Training & change management</li>
          <li>Support & maintenance</li>
        </ul>
      </Section>

      <Section title="Key Differentiators">
        <ul>
          <li>Holistic approach</li>
          <li>Scalability</li>
          <li>Proven methodology</li>
          <li>Industry expertise</li>
          <li>Security & compliance</li>
        </ul>
      </Section>

      <Section title="Target Markets">
        <ul>
          <li>SMEs</li>
          <li>Large enterprises</li>
          <li>Regulated industries</li>
          <li>Public sector organizations</li>
        </ul>
      </Section>

      <Section title="Technology Partnerships">
        <p>We partner with Microsoft, HP, Ricoh, IBM, Dell, and more for best-in-class solutions.</p>
      </Section>

      <Section title="Quality Assurance">
        <p>We follow ISO 27001, GDPR, and other quality frameworks.</p>
      </Section>

      <Section title="Leadership & Expertise">
        <p>Our team combines decades of experience in automation, engineering, and change management.</p>
      </Section>

      <Section title="Contact Us">
        <p>
          OA Office Automation Limited<br />
          P.O.Box 27346-0100, Nairobi, Kenya<br />
          Phone: <a href="tel:+254722952138">+254 722952138</a><br />
          Email: <a href="mailto:info@intellisync-oa.com">info@intellisync-oa.com</a><br />
        </p>
      </Section>
    </div>
  );
}

export default CompanyInfo;
