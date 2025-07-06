import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import '../styles/Contact.css';

const API_URL = 'http://localhost:5000/api/contact'; // Change to your backend URL in production

const Contact = () => {
  const location = useLocation();
  
  // Get subject from URL parameters
  const urlParams = new URLSearchParams(location.search);
  const subjectFromUrl = urlParams.get('subject') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: subjectFromUrl,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Update subject when URL parameters change
  useEffect(() => {
    if (subjectFromUrl) {
      setFormData(prev => ({
        ...prev,
        subject: subjectFromUrl
      }));
    }
  }, [subjectFromUrl]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMsg('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Could not send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: [
        { text: "info@intellisync-ioa.com", link: "mailto:info@intellisync-ioa.com" },
        { text: "support@intellisync-ioa.com", link: "mailto:support@intellisync-ioa.com" }
      ]
    },
    {
      icon: "📞",
      title: "Call Us",
      details: [
        { text: "+254 722952138", link: "tel:+254722952138" },
        { text: "+254 746657031", link: "tel:+254746657031" },
        { text: "+254 735993939", link: "tel:+254735993939" }
      ]
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: [
        { text: "PwC Tower Waiyaki Way / Chiromo Road Westlands.", link: null },
        { text: "P.O Box 27346-00100", link: null },
        { text: "Nairobi, Kenya", link: null }
      ]
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: [
        { text: "Mon - Fri: 8:00 AM - 4:00 PM", link: null },
        { text: "Sat: 9:00 AM - 1:00 PM", link: null }
      ]
    }
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin", url: "https://linkedin.com/company/intellisync-ioa", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "https://twitter.com/intellisync_ioa", label: "Twitter" },
    { icon: "fab fa-facebook", url: "https://facebook.com/intellisync.ioa", label: "Facebook" },
    { icon: "fab fa-instagram", url: "https://instagram.com/intellisync_ioa", label: "Instagram" }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
      <div className="contact-container">
        {/* Contact Form */}
        <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
            <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
              />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
            </div>

            <motion.button
              type="submit"
                className="submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
            {successMsg && <div className="form-success">{successMsg}</div>}
            {errorMsg && <div className="form-error">{errorMsg}</div>}
        </motion.div>

          {/* Contact Information */}
        <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="info-header">
          <h2>Contact Information</h2>
              <p>Reach out to us through any of these channels.</p>
          </div>

            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
            <motion.div 
                  key={index}
                  className="contact-info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        {detail.link ? (
                          <a 
                            href={detail.link}
                            className="clickable-link"
                            target={detail.link.startsWith('mailto:') || detail.link.startsWith('tel:') ? '_self' : '_blank'}
                            rel={detail.link.startsWith('mailto:') || detail.link.startsWith('tel:') ? '' : 'noopener noreferrer'}
                          >
                            {detail.text}
                          </a>
                        ) : (
                          <p>{detail.text}</p>
                        )}
            </div>
                    ))}
          </div>
            </motion.div>
              ))}
          </div>

          <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
          </div>
        </motion.div>
      </div>
      </section>

      {/* Map Section */}
      <motion.section 
        className="map-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="map-container">
          <h2>Find Us</h2>
          <div className="map-embed" style={{ width: '100%', height: '350px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1rem' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.18621173663!2d36.8026506!3d-1.2644061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173e2e2e3b2d%3A0x7e2e8e9e06cfaf4a!2sPWC%20Tower%2C%20Westlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1715440000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="intellisync-ioa Location"
            ></iframe>
          </div>
          <div className="map-content">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Nairobi, Kenya</h3>
            <p>PWC Tower, Westlands</p>
            <p>We're located in the heart of Nairobi's business district.</p>
            <a href="https://maps.app.goo.gl/p4odq7613tWCxq9j9" target="_blank" rel="noopener noreferrer" className="map-link">View on Google Maps</a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;