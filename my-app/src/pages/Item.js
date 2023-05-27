import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import NFTHeader from "../components/NFTHeader";
import NFTImg from "../images/NFTpageImages/doge.jpg";
import NFTCarusela from "../components/NFTCarusela";
import CreatorItemCard from "../components/CreatorItemCard";

import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const item = {
  creatorName: "Someone",
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
  let { slug } = useParams();
  const [creatorItems, setCreatorItem] = useState(null);
  const [creatorData, setCreatorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsRes = await axios.get(`http://localhost:5000/item/${slug}`);
        setCreatorItem(itemsRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creatorRes = await axios.get(
          `http://localhost:5000/creator/${creatorItems.creator}`
        );
        setCreatorData(creatorRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  });

  if (!creatorItems || !creatorData) {
    return <div>Loading...</div>;
  }

  const cloudName = "dduc2ulov";
  const itemPic = new Cloudinary({
    cloud: {
      cloudName: cloudName,
    },
  }).image(creatorItems.image);
  itemPic.resize(fill().width(450).height(450));

  return (
    <>
      <NFTHeader
        title={creatorItems.title}
        image={itemPic}
        creator={creatorData}
        creatorID={creatorItems.creator}
        NFTDescription={creatorItems.description}
        Price={creatorItems.price}
      />
      <NFTCarusela title={`More from ${item.creatorName}`} cards={cards} />
    </>
  );
}

export default Item;
