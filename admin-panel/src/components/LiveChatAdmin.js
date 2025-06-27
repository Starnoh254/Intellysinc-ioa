import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';

export default function LiveChatAdmin() {
  const [socket, setSocket] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({}); // { userId: [msg, ...] }
  const [input, setInput] = useState('');
  const [connected, setConnected] = useState(false);
  const messagesEndRef = useRef();

  useEffect(() => {
    const s = io(SOCKET_URL);
    setSocket(s);
    s.on('connect', () => {
      setConnected(true);
      s.emit('admin join');
    });
    s.on('user list', userIds => setUsers(userIds));
    s.on('user joined', userId => setUsers(u => [...u, userId]));
    s.on('user left', userId => setUsers(u => u.filter(id => id !== userId)));
    s.on('chat message', msg => {
      setMessages(m => ({
        ...m,
        [msg.userId]: [...(m[msg.userId] || []), msg]
      }));
      if (msg.userId !== selectedUser) {
        // Optionally: play notification sound or highlight
      }
    });
    return () => s.disconnect();
  }, [selectedUser]);

  const handleSelectUser = userId => setSelectedUser(userId);

  const handleSend = e => {
    e.preventDefault();
    if (!input.trim() || !selectedUser) return;
    const msg = { text: input, sender: 'admin', userId: selectedUser };
    socket.emit('chat message', msg);
    setMessages(m => ({
      ...m,
      [selectedUser]: [...(m[selectedUser] || []), { ...msg, timestamp: new Date() }]
    }));
    setInput('');
  };

  useEffect(() => {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedUser]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 12px #0001', display: 'flex', minHeight: 500 }}>
      <div style={{ width: 200, borderRight: '1px solid #eee', paddingRight: 16 }}>
        <h3>Active Users</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map(userId => (
            <li key={userId}>
              <button onClick={() => handleSelectUser(userId)} style={{ background: selectedUser === userId ? '#0078d4' : '#eee', color: selectedUser === userId ? '#fff' : '#222', border: 'none', borderRadius: 4, padding: '6px 12px', marginBottom: 6, width: '100%', textAlign: 'left', cursor: 'pointer' }}>{userId.slice(0, 8)}</button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, paddingLeft: 24, display: 'flex', flexDirection: 'column' }}>
        <h3>Live Chat</h3>
        {selectedUser ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'auto', border: '1px solid #eee', borderRadius: 4, padding: 12, marginBottom: 12, background: '#fafbfc' }}>
              {(messages[selectedUser] || []).map((msg, idx) => (
                <div key={idx} style={{ marginBottom: 8, textAlign: msg.sender === 'admin' ? 'right' : 'left' }}>
                  <span style={{ background: msg.sender === 'admin' ? '#0078d4' : '#eee', color: msg.sender === 'admin' ? '#fff' : '#222', borderRadius: 4, padding: '6px 12px', display: 'inline-block', maxWidth: '70%' }}>{msg.text}</span>
                  <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>{msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : ''}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
              <input value={input} onChange={e => setInput(e.target.value)} style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }} placeholder="Type a message..." />
              <button type="submit" style={{ background: '#0078d4', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 24px', fontWeight: 600, cursor: 'pointer' }}>Send</button>
            </form>
          </div>
        ) : (
          <div style={{ color: '#888', marginTop: 32 }}>Select a user to view and respond to their chat.</div>
        )}
      </div>
    </div>
  );
} 