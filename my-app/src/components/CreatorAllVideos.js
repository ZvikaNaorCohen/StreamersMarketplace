import React from 'react';
import CreatorVideo from './CreatorVideo';
import "./CreatorAllVideos.css";

function CreatorAllVideos({ creatorVideos, creatorId }) {
  return (
    <div className="all-videos">
      {creatorVideos.videosArr.map((video, index) => (
        <CreatorVideo
          key={index}
          title={video[0]}
          thumbnail={video[1]}
          index={index}
          creatorId={creatorId}
        />
      ))}
    </div>
  );
}

export default CreatorAllVideos;
