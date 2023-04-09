import React from "react";
import styled from "styled-components";
import Stats from "./NFTStats";
import pic from "../images/NFTpageImages/img-9.jpg";
import "./NFTDetails.css";

const NFTpageDetails = () => {
  var NFTName = "Doge";
  var creatorName = "someone"
  var NFTDescription = "This doge is very special";

  return (
    <div className="nft-details-container">
      <h1 className="nft-name"> {NFTName} </h1>
      <div className="nft-details-header">
        <h2 className="creator-name">by {creatorName}</h2>
        <img src={pic} alt="creator Profile" className="nft-profile-img" />
      </div>
      <Stats />

      <div className="nft-description">
        <p>{NFTDescription}</p>
      </div>
    </div>
  );
};

export default NFTpageDetails;
