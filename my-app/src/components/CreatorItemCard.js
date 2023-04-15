import React from 'react';
import './CreatorItemCard.css';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

function CreatorItemCard(props) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dduc2ulov'
    }
  });
  const image = cld.image(props.item.image);
  image.resize(fill().width(2000).height(350)); 
  return (
    <div className="card">
      <div className="card-image">
      <AdvancedImage cldImg={image}/>
      </div>
      <div className="card-content">
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
        <div className="card-footer">
          <div className="card-price">
            <span>{props.item.price}</span>
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