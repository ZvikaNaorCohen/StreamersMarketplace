import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import NFTHeader from "../components/NFTHeader";
import NFTImg from "../images/NFTpageImages/doge.jpg";
import NFTCarusela from "../components/NFTCarusela";

import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";


function Item() {
  let { slug } = useParams();
  const [creatorItem, setCreatorItem] = useState(null);
  const [creatorData, setCreatorData] = useState(null);
  const [creatorItems, setCreatorItems] = useState(null);

  
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
          `http://localhost:5000/creator/${creatorItem.creator}`
        );
        setCreatorData(creatorRes.data);
      } catch (error) {
        console.error(error);
      }

      try {
        const itemsRes = await axios.get(
          `http://localhost:5000/creator/${creatorItem.creator}/items`
        );
        setCreatorItems(itemsRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  });

  if (!creatorItem || !creatorData || !creatorItems) {
    return <div>Loading...</div>;
  }

  const cloudName = "dduc2ulov";
  const itemPic = new Cloudinary({
    cloud: {
      cloudName: cloudName,
    },
  }).image(creatorItem.image);
  itemPic.resize(fill().width(450).height(450));

  

  return (
    <>
      <NFTHeader
        title={creatorItem.title}
        image={itemPic}
        creator={creatorData}
        creatorID={creatorItem.creator}
        NFTDescription={creatorItem.description}
        Price={creatorItem.price}
      />
      <NFTCarusela
        title={`More from ${creatorData.displayName}`}
        cards={creatorItems}
      />
    </>
  );
}

export default Item;
