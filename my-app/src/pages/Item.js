import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import NFTHeader from "../components/NFTHeader";
import NFTImg from "../images/NFTpageImages/doge.jpg";

const item = {
  title: "Doge",
  image: NFTImg,
  creatorName: "Someone",
  NFTDescription: "This is a description about a very special doge.",
  Price: "0.35",
};

function Item() {
  const { id } = useParams();

  return (
    <>
      <NFTHeader
        title={item.title}
        image={item.image}
        creatorName={item.creatorName}
        NFTDescription={item.NFTDescription}
        Price={item.Price}
      />
    </>
  );
}

export default Item;
