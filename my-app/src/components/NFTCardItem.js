import React from "react";
import { AdvancedImage } from "@cloudinary/react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <figure className="cards__item__frame">
          <AdvancedImage cldImg={props.src} className="card__item__pic" />
          <div className="card__item__info">
            <h5 className="card__item__text">{props.text}</h5>
          </div>
        </figure>
      </li>
    </>
  );
}

export default CardItem;
