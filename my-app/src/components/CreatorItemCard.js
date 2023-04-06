import React from 'react';
import './CreatorItemCard.css';
import code from '../images/code.jpg'

function CreatorItemCard(id) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={code} />
      </div>
      <div className="card-content">
        <h3>Item</h3>
        <p>A creator's NFT</p>
        <div className="card-footer">
          <div className="card-price">
            <span>0.35</span>
            <span>ETH</span>
          </div>
          <div className="card-buy">
            <a href="">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorItemCard;