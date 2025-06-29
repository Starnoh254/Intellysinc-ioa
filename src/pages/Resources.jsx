import React, { useState } from 'react';
import '../styles/Resources.css';

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Sample resource data
  const resources = [
    {
      id: 1,
      title: "2024 Digital Marketing Trends Report",
      type: "Whitepaper",
      category: "Marketing",
      format: "PDF",
      description: "Comprehensive analysis of emerging trends in digital marketing",
      link: "#",
      gated: true,
      thumbnail: "/images/freepik/ddx6.jpg"
    },
    {
      id: 2,
      title: "Product Setup Video Tutorial",
      type: "Tutorial",
      category: "Getting Started",
      format: "Video",
      description: "Step-by-step guide to configuring your account",
      link: "#",
      gated: false,
      thumbnail: "/images/freepik/9.jpg"
    },
    {
      id: 3,
      title: "API Integration Guide",
      type: "Documentation",
      category: "Developers",
      format: "PDF",
      description: "Complete reference for integrating with our API",
      link: "#",
      gated: false,
      thumbnail: "/images/freepik/3333.jpg"
    },
    {
      id: 4,
      title: "Customer Success Story: XYZ Corp",
      type: "Case Study",
      category: "Business",
      format: "PDF",
      description: "How XYZ Corp increased revenue by 150% using our solution",
      link: "#",
      gated: true,
      thumbnail: "/images/freepik/v980-au-08-a.jpg"
    }
  ];

  // Get unique categories for filters
  const categories = ['All', ...new Set(resources.map(resource => resource.category))];

  // Filter resources
  const filteredResources = activeFilter === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === activeFilter);

  // Handle form submission for gated content
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Download link sent to ${email}`);
    setEmail('');
  };

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      alert(`Thank you! You've been subscribed to our newsletter with: ${newsletterEmail}`);
      setNewsletterEmail('');
    }
  };

  // Handle resource download/view
  const handleResourceAction = (resource) => {
    if (resource.gated) {
      alert('Please enter your email to download this resource.');
    } else {
      alert(`Opening ${resource.title}...`);
      // You can implement actual download/view functionality here
    }
  };

  return (
    <div className="resource-page">
      {/* Hero Section */}
      <section className="resource-hero">
        <h1><br />Resources Center</h1>
        <p>Find guides, reports, and tools to help you succeed</p>
        
        {/* Search Bar */}
        <div className="search-container">
          <svg className="search-icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search resources..." 
          />
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={activeFilter === category ? 'active' : ''}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="resources-grid">
        {filteredResources.map(resource => (
          <div key={resource.id} className="resource-card">
            <div className="card-image">
              <img src={resource.thumbnail} alt={resource.title} />
              <span className={`format-label ${resource.format.toLowerCase()}`}>
                {resource.format}
              </span>
            </div>
            
            <div className="card-content">
              <span className="resource-type">{resource.type}</span>
              <h3>{resource.title}</h3>
              <p className="description">{resource.description}</p>
              
              {resource.gated ? (
                <form onSubmit={handleSubmit} className="gate-form">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Download</button>
                </form>
              ) : (
                <button 
                  className="view-button"
                  onClick={() => handleResourceAction(resource)}
                >
                  {resource.format === 'Video' ? 'Watch Now' : 'View Now'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="cta-content">
          <h2>Get More Resources</h2>
          <p>Subscribe to receive our latest guides and industry insights</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Resources;