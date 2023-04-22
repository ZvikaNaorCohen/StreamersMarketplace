import React from 'react';
import './CreatorItemCard.css';
import { useNavigate } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

function CreatorItemCard(props) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dduc2ulov'
    }
  });
  const image = cld.image(props.item.body.image);
  image.resize(fill().width(2000).height(350)); 
  console.log(props);
  return (
    <div className="card">
      <div className="card-image">
      <AdvancedImage cldImg={image}/>
      </div>
      <div className="card-content">
        <h3>{props.item.body.title}</h3>
        <p>{props.item.body.description}</p>
        <div className="card-footer">
          <div className="card-price">
            <span>{props.item.body.price}</span>
            <span>ETH</span>
          </div>
          <div className="card-buy">
            <a onClick={() => handleClick(`/item/${props.item.id}`)}>Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorItemCard;