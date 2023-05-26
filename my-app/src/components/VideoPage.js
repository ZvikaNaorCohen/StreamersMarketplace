import React from 'react';
import "./VideoPage.css";

function VideoPage({ videoUrl }) {
  return (
    <div className="video-page">
      <video controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPage;
