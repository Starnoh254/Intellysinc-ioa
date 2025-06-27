import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Predefined responses for common queries
  const responses = {
    greeting: [
      "Hello! Welcome to IntelliSync. How can I help you today?",
      "Hi there! I'm your IntelliSync assistant. What can I do for you?",
      "Welcome! I'm here to help with any questions about our services."
    ],
    pricing: [
      "We offer flexible pricing plans starting from $29/month. Would you like me to show you our pricing page?",
      "Our pricing varies based on your needs. We have Starter, Professional, and Enterprise plans.",
      "I'd be happy to discuss pricing options. We offer competitive rates with no hidden fees."
    ],
    features: [
      "IntelliSync offers Business Intelligence, Data Automation, Document Management, and System Integrations.",
      "Our key features include real-time analytics, automated workflows, secure document storage, and seamless integrations.",
      "We specialize in office automation solutions. Our main features are BI dashboards, data processing, and API integrations."
    ],
    contact: [
      "You can reach our support team at support@intellisync.com or call us at +254-700-000-000.",
      "For immediate assistance, call us at +254-700-000-000. For general inquiries, email us at info@intellisync.com",
      "Our customer support is available 24/7. Call us or send an email - we'll get back to you within 2 hours."
    ],
    demo: [
      "Absolutely! I can schedule a demo for you. What's your preferred date and time?",
      "Great choice! Our demos typically last 30 minutes and cover all our key features.",
      "I'd love to show you IntelliSync in action! Let me know your availability."
    ],
    default: [
      "I'm not sure I understand. Could you rephrase that or ask about our services, pricing, or contact info?",
      "I'm still learning! Try asking about our features, pricing, or how to get in touch.",
      "I didn't catch that. You can ask me about our services, pricing, demos, or contact information."
    ]
  };

  // Welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(responses.greeting[Math.floor(Math.random() * responses.greeting.length)]);
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

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('plan')) {
      return responses.pricing[Math.floor(Math.random() * responses.pricing.length)];
    }
    
    if (message.includes('feature') || message.includes('service') || message.includes('what')) {
      return responses.features[Math.floor(Math.random() * responses.features.length)];
    }
    
    if (message.includes('contact') || message.includes('support') || message.includes('help')) {
      return responses.contact[Math.floor(Math.random() * responses.contact.length)];
    }
    
    if (message.includes('demo') || message.includes('trial') || message.includes('test')) {
      return responses.demo[Math.floor(Math.random() * responses.demo.length)];
    }
    
    return responses.default[Math.floor(Math.random() * responses.default.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addUserMessage(inputValue);
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getBotResponse(inputValue);
      addBotMessage(response);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
                <h3>IntelliSync Assistant</h3>
                <span className="status">Online</span>
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
              <button onClick={() => {
                addUserMessage("Tell me about pricing");
                setInputValue('');
                setIsTyping(true);
                setTimeout(() => {
                  addBotMessage(responses.pricing[Math.floor(Math.random() * responses.pricing.length)]);
                }, 1000);
              }}>
                💰 Pricing
              </button>
              <button onClick={() => {
                addUserMessage("What features do you offer?");
                setInputValue('');
                setIsTyping(true);
                setTimeout(() => {
                  addBotMessage(responses.features[Math.floor(Math.random() * responses.features.length)]);
                }, 1000);
              }}>
                ⚡ Features
              </button>
              <button onClick={() => {
                addUserMessage("I want a demo");
                setInputValue('');
                setIsTyping(true);
                setTimeout(() => {
                  addBotMessage(responses.demo[Math.floor(Math.random() * responses.demo.length)]);
                }, 1000);
              }}>
                🎯 Demo
              </button>
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type your message..."
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