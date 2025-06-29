import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaShieldAlt, FaUsers, FaCogs, FaLightbulb } from "react-icons/fa";
import "../styles/Solutions.css";

function Solutions() {
  const solutions = [
    {
      icon: <FaRocket />,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with our advanced analytics platform.",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization"]
    },
    {
      icon: <FaChartLine />,
      title: "Data Automation",
      description: "Streamline your workflows and eliminate manual data entry with intelligent automation.",
      features: ["Workflow automation", "Data integration", "Process optimization", "Error reduction"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Document Management",
      description: "Secure, organize, and streamline your document workflows with enterprise-grade solutions.",
      features: ["Secure storage", "Version control", "Collaboration tools", "Compliance management"]
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Enhance team productivity with integrated communication and project management tools.",
      features: ["Real-time messaging", "Project tracking", "File sharing", "Team analytics"]
    },
    {
      icon: <FaCogs />,
      title: "System Integration",
      description: "Seamlessly connect your existing systems and applications for unified operations.",
      features: ["API integration", "Data synchronization", "Custom connectors", "Scalable architecture"]
    },
    {
      icon: <FaLightbulb />,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to discover patterns and optimize your business processes.",
      features: ["Machine learning", "Pattern recognition", "Predictive modeling", "Intelligent recommendations"]
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Finance", icon: "💰" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Retail", icon: "🛍️" },
    { name: "Education", icon: "🎓" },
    { name: "Technology", icon: "💻" }
  ];

  const caseStudies = [
    {
      title: "Healthcare Provider",
      description: "Reduced patient wait times by 40% through intelligent scheduling automation.",
      results: ["40% faster scheduling", "Improved patient satisfaction", "Reduced administrative overhead"]
    },
    {
      title: "Financial Services",
      description: "Streamlined compliance reporting with automated data collection and analysis.",
      results: ["90% faster reporting", "100% compliance accuracy", "Reduced audit time"]
    },
    {
      title: "Manufacturing",
      description: "Optimized production processes with real-time monitoring and predictive maintenance.",
      results: ["25% increased efficiency", "Reduced downtime by 60%", "Lower maintenance costs"]
    }
  ];

  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Comprehensive Business Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Transform your business operations with our intelligent automation and analytics solutions
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-actions"
          >
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">Watch Demo</button>
          </motion.div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="core-solutions">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Our Core Solutions</h2>
            <p>Comprehensive tools designed to address your most critical business challenges</p>
          </motion.div>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="solution-card"
              >
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul className="solution-features">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button className="learn-more-btn">Learn More</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="industries-served">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Industries We Serve</h2>
            <p>Tailored solutions for diverse industry needs</p>
          </motion.div>

          <div className="industries-grid">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="industry-card"
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Success Stories</h2>
            <p>Real results from real businesses</p>
          </motion.div>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="case-study-card"
              >
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <div className="results">
                  <h4>Key Results:</h4>
                  <ul>
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex}>{result}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Why Choose IntelliSync</h2>
            <p>The advantages that set us apart</p>
          </motion.div>

          <div className="advantages-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="advantage-item"
            >
              <h3>Proven Expertise</h3>
              <p>Over 10 years of experience in business automation and analytics</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="advantage-item"
            >
              <h3>Scalable Solutions</h3>
              <p>Grow with confidence - our solutions scale with your business</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="advantage-item"
            >
              <h3>24/7 Support</h3>
              <p>Round-the-clock technical support and customer service</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="advantage-item"
            >
              <h3>Security First</h3>
              <p>Enterprise-grade security and compliance standards</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="solutions-cta">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Join thousands of businesses that have already revolutionized their operations with IntelliSync</p>
            <div className="cta-actions">
              <button className="cta-button primary">Start Free Trial</button>
              <button className="cta-button secondary">Schedule Demo</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Solutions; 