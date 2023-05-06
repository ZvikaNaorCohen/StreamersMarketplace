import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import NFTHeader from "../components/NFTHeader";
import NFTImg from "../images/NFTpageImages/doge.jpg";
import NFTCarusela from "../components/NFTCarusela";

const item = {
  title: "Doge",
  image: NFTImg,
  creatorName: "Someone",
  NFTDescription: "This is a description about a very special doge.",
  Price: "0.35",
};

const cards = [
  {
    title: "Card 1",
    image:
      "https://images.pexels.com/photos/14905759/pexels-photo-14905759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Card 2",
    image:
      "https://images.pexels.com/photos/14343389/pexels-photo-14343389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Card 3",
    image:
      "https://images.pexels.com/photos/15636474/pexels-photo-15636474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Card 4",
    image:
      "https://images.pexels.com/photos/15140108/pexels-photo-15140108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Card 5",
    image:
      "https://images.pexels.com/photos/15784886/pexels-photo-15784886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Card 6",
    image:
      "https://images.pexels.com/photos/16083380/pexels-photo-16083380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];      
      

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
      <NFTCarusela title={`More from ${item.creatorName}`} cards={cards} />
    </>
  );
}

export default Item;
