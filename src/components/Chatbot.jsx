import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Chatbot.css';

const Chatbot = ({ onOpenLiveChat }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Simple response system
  const getResponse = (message) => {
    const text = message.toLowerCase();
    
    if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
      return "Hello! Welcome to intellisync-ioa. How can I help you today?";
    }
    
    if (text.includes('price') || text.includes('cost') || text.includes('pricing')) {
      return "We offer Starter ($29/month), Professional ($79/month), and Enterprise (custom pricing) plans. What size is your organization?";
    }
    
    if (text.includes('feature') || text.includes('service') || text.includes('what')) {
      return "intellisync-ioa offers Business Intelligence, Data Automation, Document Management, and System Integrations. Our platform provides real-time analytics, automated workflows, and secure document storage.";
    }
    
    if (text.includes('contact') || text.includes('support') || text.includes('help')) {
      return "You can reach us at support@intellisync-oa.com or call +254-722-952-138. We're available 24/7 for urgent issues.";
    }
    
    if (text.includes('demo') || text.includes('trial') || text.includes('test')) {
      return "I'd be happy to schedule a demo! Our demos typically last 30-45 minutes and cover all key features. What's your preferred time?";
    }
    
    if (text.includes('business intelligence') || text.includes('bi') || text.includes('analytics')) {
      return "Our Business Intelligence service provides enterprise-grade analytics with advanced dashboards, predictive modeling, and real-time insights. We offer executive dashboards and integration with 200+ enterprise systems.";
    }
    
    if (text.includes('data automation') || text.includes('automation')) {
      return "Our Data Automation service automates data entry, forms processing, and email management. We achieve 90% time savings, 99% accuracy improvement, and 5x productivity increase.";
    }
    
    if (text.includes('document management') || text.includes('document')) {
      return "Our Document Management service provides secure digital repositories with enterprise-grade security, smart capture automation, and collaborative workflows. We ensure compliance with regulatory standards.";
    }
    
    return "I'm here to help! You can ask me about our services, pricing, demos, or contact information. What would you like to know?";
  };

  // Welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hello! Welcome to intellisync-ioa. I'm your AI assistant. How can I help you today?");
      }, 500);
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, { text, sender: 'bot', timestamp: new Date() }]);
    setIsTyping(false);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { text, sender: 'user', timestamp: new Date() }]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue;
    addUserMessage(userMessage);
    setInputValue('');
    setIsTyping(true);
    
    // Fast response
    setTimeout(() => {
      const response = getResponse(userMessage);
      addBotMessage(response);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleQuickAction = (action) => {
    const actions = {
      pricing: "Tell me about pricing",
      features: "What features do you offer?",
      demo: "I want a demo",
      contact: "How can I contact you?"
    };

    const message = actions[action];
    addUserMessage(message);
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getResponse(message);
      addBotMessage(response);
    }, 600);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="chatbot-info">
                <h3>intellisync-ioa AI Assistant</h3>
                <span className="status">🤖 Fast & Responsive</span>
              </div>
              <button 
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`message ${message.sender}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="message-content">
                      <p>{message.text}</p>
                      <span className="message-time">{formatTime(message.timestamp)}</span>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    className="message bot typing"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="message-content">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="chatbot-quick-actions">
              <button onClick={() => handleQuickAction('pricing')}>
                💰 Pricing
              </button>
              <button onClick={() => handleQuickAction('features')}>
                ⚡ Features
              </button>
              <button onClick={() => handleQuickAction('demo')}>
                🎯 Demo
              </button>
              <button onClick={() => handleQuickAction('contact')}>
                📞 Contact
              </button>
            </div>

            {/* Live Chat Button */}
            <div className="chatbot-livechat-btn-wrapper">
              <button className="chatbot-livechat-btn" onClick={onOpenLiveChat}>
                💬 Live Chat with Human
              </button>
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask me anything about intellisync-ioa..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="send-button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
