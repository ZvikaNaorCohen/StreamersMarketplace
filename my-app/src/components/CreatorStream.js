import React from 'react';
import './CreatorStream.css';
import ChatBox from './ChatBox';

const CreatorStream = () => {
  return (
    <div className="creator-stream-container">
      <div className="video-container">
        <iframe src="https://player.vimeo.com/video/336012190"></iframe>
      </div>
      <div className="chat-container">
        <ChatBox />
      </div>
    </div>
  );
}

export default CreatorStream;
