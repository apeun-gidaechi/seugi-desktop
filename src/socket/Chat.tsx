import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('wss://hoolc.me');

function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    socket.on('chat message', (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    socket.emit('chat message', message);
    setMessage('');
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input type="text" value={message} onChange={handleMessageChange} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
