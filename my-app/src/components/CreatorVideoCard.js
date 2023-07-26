import React, { useEffect, useState } from 'react';
import './CreatorVideoCard.css';
import { useNavigate } from 'react-router-dom';

function CreatorVideoCard(props) {
  const navigate = useNavigate();
  console.log(props.item.body);

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="card">
      <div className="card-image">
        <a onClick={() => handleClick(`/video/${props.item.id}`)}><img src={props.item.body.thumbnailURL} /></a>
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
