import React from 'react';
import './CreatorVideos.css';
import CreatorVideoCard from './CreatorVideoCard';

function CreatorVideos(props) {
  const creatorItemCards = props.creatorVideos.map((item) => (<CreatorVideoCard key={item.id} item={item}/>))
  return (
    <>
        <h2>All Creator's Videos</h2>
        <div className="items-grid-container">
        {creatorItemCards}
        </div>
    </>
  );
}

export default CreatorVideos;
