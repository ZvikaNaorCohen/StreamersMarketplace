import React from "react";
import "./Card.css"
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import { useNavigate } from 'react-router-dom';


const Card = (props) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dduc2ulov'
    }
  });

  const profilePic = cld.image(props.creator.body.profilePic); 
  profilePic.resize(fill().width(250).height(250));
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };


  return (
    <div className="card"  onClick={() => handleClick(`/creator/${props.creator.id}`)}>
      <div className="card__image">
        <AdvancedImage cldImg={profilePic}/>
      </div>
      {/* <img src={image} alt={props.creator.body.displayName} className="card__image" /> */}
      <h3 className="card__title">{props.creator.body.displayName}</h3>
      <p className="card__description">{props.creator.body.description}</p>
    </div>
  );
};

export default Card;
