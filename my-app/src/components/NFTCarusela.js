import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NFTCarusela.css";
import CreatorItemCard from "./CreatorItemCard";

const NFTCarusela = ({ title, cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} nft-carusela__arrow nft-carusela__arrow--next`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} nft-carusela__arrow nft-carusela__arrow--prev`}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M15.41 7.41L10.83 12L15.41 16.59L14 18L8 12L14 6L15.41 7.41Z" />
        </svg>
      </div>
    );
  }
  
  let creatorItemCards;
  if (cards.length > 5)
  {
    creatorItemCards = cards.splice(5).filter(item => item.body.ownedBy == null).map((item) => (
      <CreatorItemCard item={item} />
    ));
  }
  else 
  {
    creatorItemCards = cards.filter(item => item.body.ownedBy == null).map((item) => (
      <CreatorItemCard item={item} />
    ));
  }

  return (
    <div className="nft-carusela">
      <h2 className="nft-carusela-title">{title}</h2>
      <div className="nft-items">{creatorItemCards}</div>
    </div>
  );
};

export default NFTCarusela;