// import React from 'react';
// import { useParams } from "react-router-dom";
// import NFTpage from '../components/NFTpage';

// function Item() {
//   var slug = useParams();
//   return (
//     <>
//       <NFTpage id={slug} />
//     </>
//   );
// }

// export default Item;

// works up

// import React from "react";
// import { useParams } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import NFTHeader from "../components/NFTHeader";

// const items = [
//   {
//     title: "Doge",
//     image: "../images/NFTpageImages/doge.jpg",
//     creatorName: "Someone",
//     NFTDescription: "This is a description about a very special doge.",
//     price: "0.35",
//   },
// ];

// function Item() {
//   const { id } = useParams();
//   const item = items[id];
//   return (
//     <>
//       <NFTHeader
//         title={item.title}
//         image={item.image}
//         creatorName={item.creatorName}
//         NFTDescription={item.NFTDescription}
//         price={item.price}
//       />
//     </>
//   );
// }

// export default Item;

import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import NFTHeader from "../components/NFTHeader";

let item = [
  {
    title: "Doge",
    image: "../images/NFTpageImages/doge.jpg",
    creatorName: "Someone",
    NFTDescription: "This is a description about a very special doge.",
    Price: "0.35",
  },
];

function Item() {
  var slug = useParams();
  return (
    <>
      <NFTHeader/>
       {/* <NFTCarusela /> */}
    </>
  );
}

export default Item;