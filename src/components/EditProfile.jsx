import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import apiService from '../services/apiService';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.3)',
  zIndex: 1100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const formStyle = {
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
  padding: '2rem',
  minWidth: 320,
  maxWidth: '90vw',
  textAlign: 'center',
  position: 'relative',
};

const closeBtnStyle = {
  position: 'absolute',
  top: 12,
  right: 12,
  background: 'none',
  border: 'none',
  fontSize: 22,
  cursor: 'pointer',
  color: '#888',
};

const avatarGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  justifyContent: 'center',
  marginBottom: 16,
};

const avatarOptionStyle = (selected) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  border: selected ? '3px solid #0078d4' : '2px solid #eee',
  cursor: 'pointer',
  objectFit: 'cover',
  boxShadow: selected ? '0 0 8px #0078d4' : 'none',
  transition: 'border 0.2s, box-shadow 0.2s',
});

const AVATAR_OPTIONS = [
  '/public/images/avatar1.png',
  '/public/images/avatar2.png',
  '/public/images/avatar3.png',
  '/public/images/avatar4.png',
  '/public/images/avatar5.png',
  '/public/images/avatar6.png',
  '/public/images/avatar7.png',
  '/public/images/avatar8.png',
];

const EditProfile = ({ onClose }) => {
  const { user, setUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const updated = await apiService.request(`/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, avatarUrl }),
      });
      setUser({ ...user, name, avatarUrl });
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <form style={formStyle} onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
        <button style={closeBtnStyle} onClick={onClose} type="button" aria-label="Close">×</button>
        <h2>Edit Profile</h2>
        <div style={avatarGridStyle}>
          {AVATAR_OPTIONS.map((url, idx) => (
            <img
              key={url}
              src={url}
              alt={`Avatar ${idx + 1}`}
              style={avatarOptionStyle(avatarUrl === url)}
              onClick={() => setAvatarUrl(url)}
            />
          ))}
        </div>
        <div style={{ margin: '16px 0' }}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginBottom: 12 }}
            required
          />
          <input
            type="url"
            value={avatarUrl}
            onChange={e => setAvatarUrl(e.target.value)}
            placeholder="Avatar URL (optional)"
            style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ marginTop: 8, padding: '8px 20px', borderRadius: 8, background: '#0078d4', color: '#fff', border: 'none', fontWeight: 600 }}>
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default EditProfile; 