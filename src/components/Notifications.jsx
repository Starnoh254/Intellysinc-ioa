import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../services/notificationService';

export default function Notifications({ token }) {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    fetchNotifications(token)
      .then(setNotifications)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={() => setOpen(o => !o)} style={{ fontSize: 20, background: 'none', border: 'none', cursor: 'pointer' }}>
        🔔
        {notifications.length > 0 && (
          <span style={{ color: 'red', fontWeight: 'bold', marginLeft: 4 }}>{notifications.filter(n => !n.read).length}</span>
        )}
      </button>
      {open && (
        <div style={{ position: 'absolute', right: 0, top: 30, background: '#fff', border: '1px solid #ccc', borderRadius: 6, minWidth: 300, zIndex: 100 }}>
          <div style={{ padding: 10, borderBottom: '1px solid #eee', fontWeight: 600 }}>Notifications</div>
          {loading && <div style={{ padding: 10 }}>Loading...</div>}
          {error && <div style={{ color: 'red', padding: 10 }}>{error}</div>}
          {!loading && notifications.length === 0 && <div style={{ padding: 10 }}>No notifications</div>}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {notifications.map(n => (
              <li key={n.id} style={{ padding: 10, borderBottom: '1px solid #eee', background: n.read ? '#f9f9f9' : '#e6f7ff' }}>
                <div style={{ fontWeight: 600 }}>{n.title}</div>
                <div style={{ fontSize: 14 }}>{n.message}</div>
                <div style={{ fontSize: 12, color: '#888' }}>{n.createdAt && new Date(n.createdAt.seconds * 1000).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 