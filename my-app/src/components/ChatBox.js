import React, { useState } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      name,
      message,
    };
    setMessages([...messages, newMessage]);
    setName('');
    setMessage('');
  }

  return (
    <div className="chat-box-container">
      <div className="message-box">
        {messages.map((message, index) => (
          <div key={index}>
            <span className="message-name">{message.name}: </span>
            <span className="message-text">{message.message}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBox;
