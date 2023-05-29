import React, { useEffect, useState } from 'react';
import './CreatorVideoCard.css';
import { useNavigate } from 'react-router-dom';

function CreatorVideoCard(props) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'} />
      </div>
      <div className="card-content">
        <h3>{props.item.body.title}</h3>
        <div className="card-footer">
          <div className="card-buy">
            <a onClick={() => handleClick(`/video/${props.item.id}`)}>View Video</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorVideoCard;
