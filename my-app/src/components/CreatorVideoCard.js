import React from 'react';
import './CreatorItemCard.css';
import { useNavigate } from 'react-router-dom';

function CreatorVideoCard(props) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="card">
      <div className="card-image"></div>
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
