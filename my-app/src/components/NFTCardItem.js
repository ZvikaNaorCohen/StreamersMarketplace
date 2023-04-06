import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <figure className="cards__item__frame">
            <img src={props.src} alt="NFT" className="card__item__pic" />
          <div className="card__item__info">
            <h5 className="card__item__text">{props.text}</h5>
          </div>
        </figure>
      </li>
    </>
  );
}

export default CardItem;

{
  /* <figure className="card__item__details__frame">
  <figure className="card__item__name">
    {props.name}
    <figure className="card__item__amount"> {props.amout} Items </figure>
    <figure className="card__item__owned"> {props.owned} Owners </figure>
    <figure className="card__item__category"> {props.category} </figure>
  </figure>
</figure>; */
}
