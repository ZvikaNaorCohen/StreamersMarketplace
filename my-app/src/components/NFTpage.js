import React from "react";
import "../App.css";
import NFTHeader from "./NFTHeader";
import NFTDetails from "./NFTDetails";

// const Container = styled.div`
//   height: 100vh;
//   background-color: black;
//   /* scroll-snap-type: y mandatory; */
//   scroll-behavior: smooth;
//   overflow-y: auto;
// `;

function NFTpage(id) {
  return (
    <>
      <NFTHeader id={id} />
      {/* <NFTDetails id={id} /> */}
    </>
  );
}

export default NFTpage;
