import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(), 300); // Wait for animation to complete
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getToastStyles = () => {
    const baseStyles = {
      position: 'fixed',
      top: '100px',
      right: '20px',
      zIndex: 9999,
      padding: '12px 20px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '500',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      maxWidth: '300px',
      wordWrap: 'break-word'
    };

    switch (type) {
      case 'success':
        return { ...baseStyles, backgroundColor: '#28a745' };
      case 'error':
        return { ...baseStyles, backgroundColor: '#dc3545' };
      case 'warning':
        return { ...baseStyles, backgroundColor: '#ffc107', color: '#212529' };
      default:
        return { ...baseStyles, backgroundColor: '#667eea' };
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={getToastStyles()}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast; 