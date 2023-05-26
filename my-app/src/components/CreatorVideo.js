import React from 'react';
import "./CreatorVideo.css";
import { Link } from 'react-router-dom';

function CreatorVideo({ title, thumbnail, index, creatorId }) {
  const videoUrl = `http://localhost:3000/video/${creatorId}/videos/${index}`;

  return (
    <div className="video-card">
      <Link to={videoUrl}>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default CreatorVideo;
