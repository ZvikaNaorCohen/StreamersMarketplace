import React from "react";
import { Link } from "react-router-dom";
import Stats from "./NFTStats";
import creatorProfileImg from "../images/NFTpageImages/img-9.jpg";
import "./NFTDetails.css";

const NFTpageDetails = ({ NFTName, creatorName, NFTDescription }) => {
  return (
    <div className="nft-details-container">
      <h1 className="nft-name"> {NFTName} </h1>
      <div className="nft-details-header">
        <h2 className="creator-name">
          by{" "}
          <Link to={`/creator/${creatorName}`} className="creator-link">
            {creatorName}{" "}
          </Link>
        </h2>
        <Link to={`/creator/${creatorName}`}>
          <img
            src={creatorProfileImg}
            alt="creator Profile"
            className="nft-profile-img"
          />
        </Link>
      </div>
      <Stats />
      <div className="nft-description">
        <p>{NFTDescription}</p>
      </div>
    </div>
  );
};

export default NFTpageDetails;
