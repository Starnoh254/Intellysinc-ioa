import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import '../styles/LiveChatWidget.css';

const ADMIN_PASSWORD = 'admin123'; // Change as needed

const AdminLiveChat = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({}); // { userId: [msg, ...] }
  const [inputValue, setInputValue] = useState('');
  const socketRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!loggedIn) return;
    socketRef.current = io('http://localhost:5000');
    socketRef.current.emit('admin join');
    socketRef.current.on('user list', (userList) => {
      setUsers(userList);
    });
    socketRef.current.on('user joined', (userId) => {
      setUsers((prev) => [...prev, userId]);
    });
    socketRef.current.on('user left', (userId) => {
      setUsers((prev) => prev.filter((id) => id !== userId));
      setMessages((prev) => {
        const copy = { ...prev };
        delete copy[userId];
        return copy;
      });
      if (selectedUser === userId) setSelectedUser(null);
    });
    socketRef.current.on('chat message', (msg) => {
      if (!msg.userId) return;
      setMessages((prev) => {
        const prevMsgs = prev[msg.userId] || [];
        return { ...prev, [msg.userId]: [...prevMsgs, msg] };
      });
      // Play sound if message is from user
      if (msg.sender === 'user' && audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, [loggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || !selectedUser) return;
    const msg = { text: inputValue, sender: 'admin', userId: selectedUser, timestamp: new Date() };
    setMessages((prev) => {
      const prevMsgs = prev[selectedUser] || [];
      return { ...prev, [selectedUser]: [...prevMsgs, msg] };
    });
    socketRef.current.emit('chat message', msg);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!loggedIn) {
    return (
      <div className="livechat-container" style={{ right: 400, bottom: 100 }}>
        <audio ref={audioRef} src="/notification.mp3" preload="auto" />
        <div className="livechat-header">Admin Login</div>
        <form style={{ padding: 16 }} onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', marginBottom: 12 }}
          />
          <button type="submit" className="livechat-input-btn">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="livechat-container" style={{ right: 400, bottom: 100, width: 400, maxWidth: '95vw', display: 'flex', flexDirection: 'row' }}>
      <audio ref={audioRef} src="/notification.mp3" preload="auto" />
      <div style={{ width: 120, borderRight: '1px solid #eee', background: '#f7fafd', padding: 8 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Users</div>
        {users.length === 0 && <div style={{ color: '#888' }}>No users</div>}
        {users.map((userId) => (
          <div
            key={userId}
            onClick={() => setSelectedUser(userId)}
            style={{
              padding: '6px 8px',
              marginBottom: 4,
              borderRadius: 6,
              background: selectedUser === userId ? '#e3f1ff' : 'transparent',
              cursor: 'pointer',
              fontSize: 13
            }}
          >
            {userId.slice(-6)}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="livechat-header">Live Chat (Admin)</div>
        <div className="livechat-messages" style={{ minHeight: 200, maxHeight: 320 }}>
          {selectedUser && messages[selectedUser] ? (
            messages[selectedUser].map((msg, idx) => (
              <div key={idx} className={`livechat-message ${msg.sender}`}>
                <div className="livechat-message-content">
                  <p>{msg.text}</p>
                  <span className="livechat-message-time">{formatTime(msg.timestamp)}</span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ color: '#888', padding: 16 }}>Select a user to chat</div>
          )}
        </div>
        <div className="livechat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={!selectedUser}
          />
          <button onClick={handleSendMessage} disabled={!selectedUser}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLiveChat; 