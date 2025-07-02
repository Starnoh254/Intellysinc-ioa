import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { io } from 'socket.io-client';
import '../styles/LiveChatWidget.css';

// Allow parent to control open/close via ref
const LiveChatWidget = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const socketRef = useRef(null);
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev)
  }));

  useEffect(() => {
    // Connect to Socket.IO server with error handling
    try {
      socketRef.current = io('http://localhost:5000', {
        timeout: 5000,
        forceNew: true
      });
      
      socketRef.current.on('connect', () => {
        console.log('Connected to chat server');
        socketRef.current.emit('user join');
      });
      
      socketRef.current.on('connect_error', (error) => {
        console.log('Chat server connection failed:', error.message);
        // Add a fallback message when server is not available
        setMessages([{
          text: "Chat server is currently unavailable. Please contact us via email or phone.",
          sender: 'admin',
          timestamp: new Date()
        }]);
      });
      
      socketRef.current.on('chat message', (msg) => {
        setMessages((prev) => [...prev, { ...msg, sender: msg.sender || 'admin', timestamp: new Date() }]);
        // Play sound if message is from admin
        if (msg.sender === 'admin' && audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      });
      
      return () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
        }
      };
    } catch (error) {
      console.log('Failed to initialize chat:', error);
      // Add a fallback message
      setMessages([{
        text: "Chat is currently unavailable. Please contact us via email or phone.",
        sender: 'admin',
        timestamp: new Date()
      }]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const msg = { text: inputValue, sender: 'user', timestamp: new Date() };
    setMessages((prev) => [...prev, msg]);
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

  return (
    <>
              <audio ref={audioRef} src="./notification.mp3" preload="auto" />
      {isOpen && (
        <div className="livechat-container">
          <div className="livechat-header">
            <span>Live Support</span>
            <button className="livechat-close" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="livechat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`livechat-message ${msg.sender}`}>
                <div className="livechat-message-content">
                  <p>{msg.text}</p>
                  <span className="livechat-message-time">{formatTime(msg.timestamp)}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="livechat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
});

export default LiveChatWidget; 