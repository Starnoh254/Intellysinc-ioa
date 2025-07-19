import React, { useState } from 'react';
import EditProfile from './EditProfile';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.3)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const cardStyle = {
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

const avatarStyle = {
  width: 90,
  height: 90,
  borderRadius: '50%',
  marginBottom: 18,
  objectFit: 'cover',
  border: '2px solid #eee',
};

const ProfileCard = ({ user, onClose }) => {
  const [editing, setEditing] = useState(false);
  if (!user) return null;
  if (editing) return <EditProfile onClose={() => setEditing(false)} />;
  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={cardStyle} onClick={e => e.stopPropagation()}>
        <button style={closeBtnStyle} onClick={onClose} aria-label="Close">×</button>
        <img
          src={user.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.email)}`}
          alt="Avatar"
          style={avatarStyle}
        />
        <h2 style={{ margin: '0 0 8px' }}>{user.name || user.displayName || 'No Name'}</h2>
        <div style={{ color: '#666', marginBottom: 12 }}>{user.email}</div>
        {/* Add more profile fields as needed */}
      </div>
    </div>
  );
};

export default ProfileCard; 