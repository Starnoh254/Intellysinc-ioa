import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CaseStudies.css';

const CaseStudies = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedStudy, setExpandedStudy] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    challenge: ''
  });

  // Case study data
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Boosts Conversions by 140%",
      client: "FashionForward",
      industry: "Retail",
      challenge: "Low mobile conversion rates and high cart abandonment",
      solution: "Implemented AI-powered product recommendations and streamlined checkout",
      results: [
        { metric: "140%", label: "Increase in conversions" },
        { metric: "35%", label: "Reduction in cart abandonment" },
        { metric: "3.2x", label: "ROI in 6 months" }
      ],
      testimonial: "The solution transformed our mobile revenue and became our competitive edge.",
      author: "Jamie Chen, CTO at FashionForward",
      logo: "/client-logos/fashionforward.png",
      thumbnail: "/case-studies/ecommerce-thumb.jpg"
    },
    {
      id: 2,
      title: "Healthcare Provider Cuts Operational Costs by 30%",
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Inefficient patient record management causing delays",
      solution: "Custom EHR system with automated workflows",
      results: [
        { metric: "30%", label: "Cost reduction" },
        { metric: "50%", label: "Faster record retrieval" },
        { metric: "4.1", label: "Staff satisfaction (from 2.3)" }
      ],
      testimonial: "We now deliver better patient care with half the administrative overhead.",
      author: "Dr. Sarah Williamson, Chief Medical Officer",
      logo: "/client-logos/medicareplus.png",
      thumbnail: "/case-studies/healthcare-thumb.jpg"
    }
  ];

  // Get unique industries for filters
  const industries = ['All', ...new Set(caseStudies.map(study => study.industry))];

  // Filter case studies
  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeFilter);

  // Toggle expanded view
  const toggleExpand = (id) => {
    setExpandedStudy(expandedStudy === id ? null : id);
  };

  // Handle download case study
  const handleDownloadCaseStudy = (study) => {
    alert(`Downloading case study: ${study.title}`);
    // You can implement actual download functionality here
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      alert(`Thank you ${formData.name}! We'll contact you at ${formData.email} to discuss your challenge.`);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        challenge: ''
      });
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="case-studies-hero">
        <div className="hero-content">
          <h1>Proven Success Stories</h1>
          <p>Explore how we've helped businesses solve complex challenges and achieve remarkable results</p>
        </div>
      </section>

      {/* Filter Controls */}
      <div className="case-filters">
        {industries.map(industry => (
          <button
            key={industry}
            className={activeFilter === industry ? 'active' : ''}
            onClick={() => setActiveFilter(industry)}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="case-studies-grid">
        {filteredStudies.map(study => (
          <div 
            key={study.id} 
            className={`case-study-card ${expandedStudy === study.id ? 'expanded' : ''}`}
          >
            <div className="card-header">
              <div className="client-logo">
                <img src={study.logo} alt={`${study.client} logo`} />
              </div>
              <div className="card-title">
                <span className="industry">{study.industry}</span>
                <h2>{study.title}</h2>
              </div>
              <button 
                className="toggle-button"
                onClick={() => toggleExpand(study.id)}
                aria-label={expandedStudy === study.id ? 'Collapse case study' : 'Expand case study'}
              >
                {expandedStudy === study.id ? '−' : '+'}
              </button>
            </div>

            <div className="card-preview">
              <div className="thumbnail">
                <img src={study.thumbnail} alt={study.title} />
              </div>
              <div className="preview-results">
                {study.results.slice(0, 2).map((result, index) => (
                  <div key={index} className="mini-metric">
                    <span className="value">{result.metric}</span>
                    <span className="label">{result.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expanded Content */}
            {expandedStudy === study.id && (
              <div className="expanded-content">
                <div className="content-section">
                  <h3>The Challenge</h3>
                  <p>{study.challenge}</p>
                </div>

                <div className="content-section">
                  <h3>Our Solution</h3>
                  <p>{study.solution}</p>
                </div>

                <div className="results-grid">
                  {study.results.map((result, index) => (
                    <div key={index} className="result-metric">
                      <span className="metric-value">{result.metric}</span>
                      <span className="metric-label">{result.label}</span>
                    </div>
                  ))}
                </div>

                <div className="testimonial">
                  <blockquote>
                    <p>"{study.testimonial}"</p>
                    <cite>— {study.author}</cite>
                  </blockquote>
                </div>

                <button 
                  className="download-button"
                  onClick={() => handleDownloadCaseStudy(study)}
                >
                  Download Full Case Study
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="case-studies-cta">
        <div className="cta-content">
          <h2>Ready to achieve similar results?</h2>
          <p>Let's discuss how we can help solve your business challenges</p>
          <form className="cta-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Work Email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="company"
                placeholder="Company Name" 
                value={formData.company}
                onChange={handleInputChange}
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <textarea 
              name="challenge"
              placeholder="Tell us about your challenge..."
              value={formData.challenge}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit">Request Consultation</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;