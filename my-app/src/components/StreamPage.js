import React from 'react';
import './StreamPage.css';
import ChatBox from './ChatBox';

// instead of link, need to do props.creatorData.videoLink

const StreamPage = (props) => {
  return (
    <div className="creator-stream-container">
      <div className="video-container">
        <iframe src={props.creatorData.videoLink}></iframe>
      </div>
      <div className="chat-container">
        <ChatBox />
      </div>
    </div>
  );
}

export default StreamPage;
