import React from "react";
import "../App.css";
import NFTHeader from "./NFTHeader";
// import NFTCarusela from "./NFTCarusela";

let item = [
  {
    title: "Doge",
    image: "../images/NFTpageImages/doge.jpg",
    creatorName: "Someone",
    NFTDescription: "This is a description about a very special doge.",
    Price: "0.35",
  },
];

function NFTpage(id) {
  return (
    <>
      <NFTHeader id={id} />
      {/* <NFTCarusela /> */}
    </>
  );
}

export default NFTpage;

// import React from "react";
// import "../App.css";
// import NFTHeader from "./NFTHeader";

// const items = [
//   {
//     title: "Doge",
//     image: "../images/NFTpageImages/doge.jpg",
//     creatorName: "Someone",
//     NFTDescription: "This is a description about a very special doge.",
//     price: "0.35",
//   },
// ];

// const NFTpage = ({id}) => {
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

// export default NFTpage;
