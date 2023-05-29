import React from 'react';
import './SingleVideoPage.css';

const SingleVideoPage = (props) => {
  return (
    <div className="creator-video-container">
      <iframe
        src={props.creatorData.videoLink}
        className="video-frame"
        title="Embedded Video"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default SingleVideoPage;
