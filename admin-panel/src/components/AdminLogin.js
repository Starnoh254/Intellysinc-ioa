import React, { useState } from 'react';

const ADMIN_PASSWORD = 'admin123'; // TODO: Move to env/config in production

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('admin_logged_in', 'true');
      setError('');
      onLogin();
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div style={{ maxWidth: 320, margin: '80px auto', padding: 24, boxShadow: '0 2px 12px #0001', borderRadius: 8, background: '#fff' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 12, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ width: '100%', padding: 10, borderRadius: 4, background: '#0078d4', color: '#fff', border: 'none', fontWeight: 600 }}>Login</button>
        {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      </form>
    </div>
  );
} 