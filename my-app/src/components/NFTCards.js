import React from "react";
import CardItem from "./NFTCardItem";
import "./Cards.css";
import pic from "./NFTpageImages/doge.jpg";
let NFTname = "Doge";

function Cards() {
  return (
    <div className="cards">
      <div className="card__container">
        <div className="card__wrapper">
          <ul className="card__item">
            <CardItem src={pic} text={NFTname} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
