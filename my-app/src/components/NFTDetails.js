import React from "react";
import { Link } from "react-router-dom";
import Stats from "./NFTStats";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";


import "./NFTDetails.css";

const NFTpageDetails = ({ NFTName, creator, creatorID, NFTDescription }) => {

  const cloudName = "dduc2ulov";
  const itemPic = new Cloudinary({
    cloud: {
      cloudName: cloudName,
    },
  }).image(creator.profilePic.image);
  itemPic.resize(fill().width(50).height(50));

  return (
    <div className="nft-details-container">
      <h1 className="nft-name"> {NFTName} </h1>
      <div className="nft-details-header">
        <h2 className="creator-name">
          by{" "}
          <Link to={`/creator/${creatorID}`} className="creator-link">
            {creator.displayName}{" "}
          </Link>
        </h2>
        <Link to={`/creator/${creatorID}`}>
          {/* Need to fix that or delete that */}
          <AdvancedImage cldImg={itemPic} className="nft-profile-img" />
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
