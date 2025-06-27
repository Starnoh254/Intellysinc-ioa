import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/AdminAccess.css';

const AdminAccess = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Simple admin password (in production, this should be handled server-side)
  const ADMIN_PASSWORD = 'admin123';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        // Store admin session (in production, use proper JWT tokens)
        localStorage.setItem('adminAuthenticated', 'true');
        navigate('/admin/blog');
      } else {
        setError('Invalid password. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="admin-access">
      <motion.div 
        className="admin-login-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="login-header">
          <h1>Admin Access</h1>
          <p>Enter your credentials to access the blog management system</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              disabled={isLoading}
            />
          </div>

          {error && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}

          <button 
            type="submit" 
            className="login-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Authenticating...' : 'Access Admin Panel'}
          </button>
        </form>

        <div className="login-footer">
          <p>Demo Password: <code>admin123</code></p>
          <button 
            onClick={() => navigate('/')}
            className="back-btn"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminAccess; 