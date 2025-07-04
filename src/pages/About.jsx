import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import { FaShieldAlt, FaUserTie, FaCogs, FaChartLine, FaUsers, FaEnvelope, FaPhone, FaGlobe, FaLightbulb, FaHandshake, FaCheckCircle, FaBullseye, FaBuilding, FaPuzzlePiece } from 'react-icons/fa';

const coreValues = [
  { icon: <FaLightbulb size={28} />, title: 'Innovation', desc: 'We continuously explore emerging technologies to deliver cutting-edge solutions.' },
  { icon: <FaCheckCircle size={28} />, title: 'Excellence', desc: 'We uphold the highest standards of quality in every project.' },
  { icon: <FaHandshake size={28} />, title: 'Customer Focus', desc: 'We listen, anticipate needs, and customize services for lasting partnerships.' },
  { icon: <FaBullseye size={28} />, title: 'Integrity', desc: 'We operate with transparency, honesty, and respect in all interactions.' },
  { icon: <FaUsers size={28} />, title: 'Collaboration', desc: 'We foster teamwork—both internally and with clients—to achieve shared success.' },
];

const serviceOfferings = [
  {
    title: "Workflow Assessment & Consulting",
    details: [
      "Business process audits to identify inefficiencies",
      "Strategic roadmaps for digital transformation"
    ]
  },
  {
    title: "Custom Software Development",
    details: [
      "Document management systems",
      "Automated approval and notification workflows",
      "Data analytics and reporting dashboards"
    ]
  },
  {
    title: "Hardware Integration",
    details: [
      "Scanners, printers, and multifunction devices",
      "Secure server and network infrastructure"
    ]
  },
  {
    title: "System Implementation & Integration",
    details: [
      "Seamless integration with ERP, CRM, HRIS, and legacy applications",
      "API development and middleware configuration"
    ]
  },
  {
    title: "Training & Change Management",
    details: [
      "User-centric training programs and documentation",
      "Stakeholder engagement and adoption support"
    ]
  },
  {
    title: "Support & Maintenance",
    details: [
      "24/7 technical support and helpdesk services",
      "Proactive monitoring, patch management, and upgrades"
    ]
  }
];

const differentiators = [
  {
    title: 'Holistic Approach',
    desc: 'We combine software, hardware, and process expertise to deliver turnkey solutions.'
  },
  {
    title: 'Scalability',
    desc: 'Modular architecture and flexible pricing models ensure solutions grow with your business.'
  },
  {
    title: 'Proven Methodology',
    desc: 'Our phased implementation framework mitigates risk and accelerates time-to-value.'
  },
  {
    title: 'Industry Expertise',
    desc: 'Deep domain knowledge in finance, human resources, legal, and administrative functions.'
  },
  {
    title: 'Security & Compliance',
    desc: 'We adhere to industry best practices, including ISO 27001 standards and GDPR guidelines.'
  }
];

const targetMarkets = [
  { icon: <FaBuilding size={24} />, text: 'SMEs seeking streamlined administrative workflows' },
  { icon: <FaBuilding size={24} />, text: 'Large Enterprises requiring enterprise-grade automation' },
  { icon: <FaShieldAlt size={24} />, text: 'Regulated industries (finance, legal, healthcare)' },
  { icon: <FaPuzzlePiece size={24} />, text: 'Public sector organizations focused on transparency and cost efficiency' },
];

const keyComponents = [
  {
    icon: <FaCogs size={28} />,
    title: 'Document Management',
    desc: 'Features for easy creation, storage, retrieval, and sharing of documents. Ensures team members have access to the latest information and reduces version control issues.'
  },
  {
    icon: <FaChartLine size={28} />,
    title: 'Workflow Automation',
    desc: 'Automates workflows to standardize processes, automate approvals, notifications, and tasks, significantly reducing manual effort.'
  },
  {
    icon: <FaUsers size={28} />,
    title: 'Collaboration Tools',
    desc: 'Facilitates communication among team members with shared workspaces, real-time editing, and integrated messaging, enhancing teamwork and project management.'
  },
  {
    icon: <FaChartLine size={28} />,
    title: 'Data Analysis and Reporting',
    desc: 'Streamlines data collection and reporting. Integrated analytics tools help generate insights and reports for quick, informed decisions.'
  },
  {
    icon: <FaPuzzlePiece size={28} />,
    title: 'Integration Capabilities',
    desc: 'Integrates with existing systems (CRM, DMS, PMS, ECMS, ERP, AI, etc.) for seamless data transfer and reduced manual entry.'
  }
];

const benefits = [
  {
    icon: <FaChartLine size={28} />,
    title: 'Increased Productivity',
    desc: 'By automating repetitive tasks, employees can focus on more strategic work, leading to improved productivity and job satisfaction.'
  },
  {
    icon: <FaCogs size={28} />,
    title: 'Cost Savings',
    desc: 'Reducing manual processes can lead to significant cost savings in labour and operational efficiencies, allowing organizations to allocate resources more effectively.'
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: 'Improved Accuracy',
    desc: 'Automation minimizes the risk of human error, ensuring greater accuracy in data entry and processing, which is crucial for maintaining high-quality standards.'
  }
];

const partnerLogos = [
  { name: 'Microsoft', file: 'microsoft.jpg' },
  { name: 'HP', file: 'hp.png' },
  { name: 'Canon', file: 'canon.jpg' },
  { name: 'Xerox', file: 'xeros.png' },
  { name: 'Fortinet', file: 'fortinet.jpg' },
  { name: 'Epson', file: 'epson.png' },
  { name: 'DocuWare', file: 'docuware.png' },
  { name: 'Toshiba', file: 'toshiba.png' },
  { name: 'uniFLOW', file: 'uniflow.jpg' },
  { name: 'Oracle', file: 'oracle.png' },
  { name: 'Cisco', file: 'cisco.png' },
  { name: 'SAP ERP', file: 'saperp.png' },
  { name: 'Nuance', file: 'nuance.jpg' },
  { name: 'Therefore', file: 'therefore.png' },
  { name: 'Scan2x', file: 'scan2x.jpg' },
  { name: 'Sybrin', file: 'sybrin.jpg' },
  { name: 'Kofax', file: 'kofax.png' },
  { name: 'MyQ', file: 'myq.png' },
  { name: 'Kyocera', file: 'kyocera.png' },
];

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.section className="about-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
        <motion.h1 animate={{ x: [-50, 0] }} transition={{ type: 'spring', stiffness: 100 }}>
          IntelliSync Office Automation Limited (OA)
        </motion.h1>
        <motion.p animate={{ x: [50, 0] }} transition={{ type: 'spring', stiffness: 100 }}>
          "Synchronizing Your Office, Maximizing Your Productivity"<br />
          Headquartered in Nairobi, Kenya
        </motion.p>
      </motion.section>

      {/* Company Overview */}
      <div className="about-main-card about-highlight-card">
        <section className="about-section about-company-overview">
          <div className="about-qa-flex">
            <div className="about-qa-icon"><FaBuilding size={36} /></div>
            <div>
              <h2>Company Overview</h2>
              <p>
                IntelliSync Office Automation Limited is an end-to-end leading office automation solutions provider. Seamlessly integrating software, hardware, processes, and business workflows, OA empowers organizations to achieve higher productivity, minimize errors, and optimize resource utilization. Our tailored solutions address the unique challenges of modern workplaces—helping clients transform routine tasks into efficient, digitally driven processes.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Platform Overview Section */}
      <section className="platform-overview-section">
        <div className="platform-overview-columns">
          <div className="platform-overview-col">
            <h3>The Platform</h3>
            <ul>
              <li>Cloud & On-Premises Deployment</li>
              <li>Mobile Access & Remote Work</li>
              <li>Enterprise-Grade Security</li>
              <li>Compliance & Audit Trails</li>
              <li>Unified Document Management</li>
              <li>Scalable & Customizable Solutions</li>
            </ul>
          </div>
          <div className="platform-overview-col">
            <h3>Capabilities</h3>
            <ul>
              <li>Intelligent Document Processing</li>
              <li>Workflow Automation</li>
              <li>Smart Indexing & Search</li>
              <li>Secure Electronic Signatures</li>
              <li>Digital Forms & Data Collection</li>
              <li>Analytics & Reporting Dashboards</li>
              <li>Bulk Import & Export</li>
            </ul>
          </div>
          <div className="platform-overview-col">
            <h3>Integrations</h3>
            <ul>
              <li>Microsoft Teams & Outlook</li>
              <li>Google Drive, OneDrive, Dropbox</li>
              <li>SAP & ERP Systems</li>
              <li>Salesforce, HubSpot, Slack</li>
              <li>API & Custom Connectors</li>
              <li>Legacy System Integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="about-main-card about-mission-card">
        <section className="about-section about-mission-vision">
          <div className="about-mv-grid">
            <div className="about-mv-block">
              <FaBullseye size={32} className="about-mv-icon" />
              <h3>Mission</h3>
              <p>To enable organizations of all sizes to realize their full operational potential through innovative, reliable, and scalable office automation solutions that reduce cost, eliminate manual bottlenecks, and foster a culture of continuous improvement.</p>
            </div>
            <div className="about-mv-block">
              <FaLightbulb size={32} className="about-mv-icon" />
              <h3>Vision</h3>
              <p>To be the world's most trusted partner in office automation, setting the standard for integrated technology solutions that drive productivity, accuracy, and sustainable growth for our clients.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Core Values */}
      <div className="about-main-card about-values-card">
        <section className="about-section">
          <h2>Core Values</h2>
          <div className="about-cards-grid">
            {coreValues.map((val) => (
              <div className="about-card about-value-card" key={val.title}>
                <div className="about-value-icon">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Service Offerings */}
      <div className="about-main-card about-offerings-card">
        <section className="about-section">
          <h2>Service Offerings</h2>
          <div className="about-cards-grid">
            {serviceOfferings.map((offering) => (
              <div
                className="about-card about-offering-card"
                key={offering.title}
                tabIndex={0}
                aria-label={`View details for ${offering.title}`}
              >
                <FaCogs size={28} className="about-offering-icon" />
                <h4>{offering.title}</h4>
                <div className="about-offering-details">
                  <ul>
                    {offering.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Key Differentiators */}
      <div className="about-main-card about-diff-card">
        <section className="about-section">
          <h2>Key Differentiators</h2>
          <div className="about-cards-grid">
            {differentiators.map((item) => (
              <div className="about-card about-diff-feature" key={item.title}>
                <FaCheckCircle size={28} className="about-diff-icon" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Target Markets */}
      <div className="about-main-card about-target-card">
        <section className="about-section">
          <h2>Target Markets</h2>
          <div className="about-cards-grid">
            {targetMarkets.map((m, i) => (
              <div className="about-card about-target-feature" key={i}>
                {m.icon}
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Technology Partnerships */}
      <div className="about-main-card">
        <section className="about-section">
          <h2>Technology Partnerships</h2>
          <div className="about-partner-logos-grid">
            {partnerLogos.map((p) => (
              <div className="about-partner-logo-card" key={p.name}>
                <img
                  src={`${import.meta.env.BASE_URL}images/${p.file}`}
                  alt={p.name + ' logo'}
                  className="about-partner-logo-img"
                  onError={e => { e.target.onerror = null; e.target.src = `${import.meta.env.BASE_URL}images/placeholder.png`; }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Quality Assurance */}
      <div className="about-main-card about-highlight-card">
        <section className="about-section about-quality-assurance">
          <div className="about-qa-flex">
            <div className="about-qa-icon"><FaShieldAlt size={36} /></div>
            <div>
              <h2>Quality Assurance</h2>
              <p>
                Quality is at the heart of every OA engagement. From initial consultation through post-go-live support, we employ rigorous testing protocols, performance benchmarks, and customer satisfaction surveys to uphold our commitment to excellence.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Leadership & Expertise */}
      <div className="about-main-card about-leadership-card">
        <section className="about-section about-leadership-section">
          <div className="about-leadership-flex">
            <div className="about-leadership-info">
              <h2>Leadership & Expertise</h2>
              <p>
                Our leadership team combines decades of experience in software engineering, systems integration, process improvement, and change management. Supported by certified project managers, business analysts, and technical specialists, OA delivers results-driven solutions on schedule and within budget.
              </p>
              <blockquote className="about-leadership-quote">
                "Expertise is not just what we know, but how we deliver results for our clients."
              </blockquote>
            </div>
            <div className="about-leadership-avatars">
              <FaUserTie size={48} /> <FaUserTie size={48} /> <FaUserTie size={48} />
            </div>
          </div>
        </section>
      </div>

      {/* Why OA / Key Components */}
      <div className="about-main-card about-components-card">
        <section className="about-section">
          <h2>Why IntelliSync Office Automation</h2>
          <p className="about-components-intro">
            OA leverages the use of technology to streamline and improve office tasks and workflows. By integrating Software, Hardware, Processes and Businesses to reduce errors, and optimize resource management.
          </p>
          <div className="about-cards-grid about-components-features">
            {keyComponents.map((comp) => (
              <div className="about-card about-component-feature" key={comp.title}>
                <div className="about-component-icon">{comp.icon}</div>
                <h4>{comp.title}</h4>
                <p>{comp.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Benefits of Office Automation */}
      <div className="about-main-card about-benefits-card">
        <section className="about-section">
          <h2>Benefits of Office Automation</h2>
          <div className="about-benefits-grid">
            {benefits.map((b) => (
              <div className="about-benefit-feature" key={b.title}>
                <div className="about-benefit-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact Info */}
      <div className="about-main-card about-contact-card">
        <section className="about-section about-contact">
          <h2>Contact Us</h2>
          <div className="about-contact-flex">
            <div className="about-contact-info">
              <div><FaEnvelope /> <a href="mailto:info@intellisync-oa.com">info@intellisync-oa.com</a></div>
              <div><FaPhone /> +254 722 952 138 | +254 746 657 031 | +254 735 993 939</div>
              <div><FaGlobe /> <a href="https://www.intellisync-oa.com" target="_blank" rel="noopener noreferrer">www.intellisync-oa.com</a></div>
              <div>P. O. Box 27346-0100, Nairobi, Kenya</div>
            </div>
            <div className="about-contact-cta">
              <a href="mailto:info@intellisync-oa.com" className="about-contact-btn">Get in Touch</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
