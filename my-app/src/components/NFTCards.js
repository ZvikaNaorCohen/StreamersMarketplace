import React from "react";
import CardItem from "./NFTCardItem";
import "./NFTCards.css";
import pic from "../images/NFTpageImages/doge.jpg";
let NFTname = "Doge";

const Card = ({ title, image }) => {
  return (
    <div className="cards">
      <div className="card__container">
        <div className="card__wrapper">
          <ul className="card__item">
            <CardItem src={image} text={title} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;