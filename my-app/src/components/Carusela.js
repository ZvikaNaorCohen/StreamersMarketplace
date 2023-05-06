import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carusela.css"


const Carusela = ({ title, cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
        className={`${className} carusela__arrow carusela__arrow--next`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} carusela__arrow carusela__arrow--prev`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L10.83 12L15.41 16.59L14 18L8 12L14 6L15.41 7.41Z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="carusela">
      <h2 className="carusela__title">{title}</h2>
      <div className="carusela__slider">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index}>
              <Card {...card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carusela;
