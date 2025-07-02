import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Support.css';

const Support = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // FAQ Data
  const faqCategories = [
    {
      name: 'Company location',
      questions: [
        {
          q: "Where are you located?",
          a: "Go to About page."
        },
        {
          q: "Do you have any awards?",
          a: "Go to Awards page."
        }
      ]
    },
    {
      name: 'Information',
      questions: [
        {
          q: "Where can I learn more about this company",
          a: "Navigate to CompanyInfo page."
        }
      ]
    }
  ];

  // Toggle FAQ accordion
  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  // Handle search
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // You can implement search functionality here
      console.log('Searching for:', searchQuery);
      // For now, just show an alert
      alert(`Searching for: ${searchQuery}`);
    }
  };

  // Handle live chat
  const handleLiveChat = () => {
    // You can implement live chat functionality here
    alert('Live chat feature coming soon!');
  };

  // Handle email support
  const handleEmailSupport = () => {
    window.location.href = 'mailto:support@intellisync-oa.com?subject=Support Request';
  };

  // Handle phone support
  const handlePhoneSupport = () => {
    window.location.href = 'tel:+254722952138';
  };

  return (
    <div className="support-page">
      {/* Hero Section */}
      <section className="support-hero">
        <h1><br />How can we help you today?</h1>
        
        {/* Search Bar */}
        <div className="search-container">
          <svg className="search-icon" viewBox="0 0 24 24" width="20" height="20">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input 
            type="text" 
            placeholder="Describe your issue..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>

        <p className="hero-subtext">
          Popular searches: <a href="#">About company</a>, <a href="#">Office location</a>
        </p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        {faqCategories.map((category, catIndex) => (
          <div key={catIndex} className="faq-category">
            <h3>{category.name}</h3>
            
            {category.questions.map((item, index) => (
              <div 
                key={index} 
                className="faq-item"
                onClick={() => toggleAccordion(`${catIndex}-${index}`)}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <svg 
                    className={`icon ${activeAccordion === `${catIndex}-${index}` ? 'rotate' : ''}`} 
                    viewBox="0 0 24 24" 
                    width="18" 
                    height="18"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </div>
                
                {activeAccordion === `${catIndex}-${index}` && (
                  <div className="faq-answer">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Contact Options */}
      <section className="contact-section">
        <h2>Still need help?</h2>
        <p>Our support team is ready to assist you</p>
        
        <div className="contact-options">
          
          <div className="contact-card">
            <div className="contact-icon live-chat">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
              </svg>
            </div>
            <h3>Live Chat</h3>
            <button onClick={handleLiveChat}>Start Chat</button>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon email">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3>Email Us</h3>
            <button onClick={handleEmailSupport}>Send Email</button>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon phone">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </div>
            <h3>Call Support</h3>
            <button onClick={handlePhoneSupport}>+254 (722) 952-138</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;