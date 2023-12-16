// src/ChatRoom.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your Socket.io server URL

const ChatRoom = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Cleanup the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message.trim() !== '') {
      // Emit a message event to the server
      socket.emit('message', { username, message });
      setMessage('');
    }
  };

  return (
    <div>
      <div>
        <h2>Welcome, {username}!</h2>
      </div>
      <div>
        <div>
          {messages.map((msg, index) => (
            <div key={index}>
              <strong>{msg.username}:</strong> {msg.message}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
