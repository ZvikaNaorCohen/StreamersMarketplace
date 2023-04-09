// import React from "react";
// import styled from "styled-components";
// import Stats from "./NFTStats";
// import pic from "../images/NFTpageImages/img-9.jpg";
// import "./NFTDetails.css";

// const NFTpageDetails = () => {
//   var NFTName = "Doge";
//   var creatorName = "someone"
//   var NFTDescription = "This doge is very special";

//   return (
//     <div className="nft-details-container">
//       <h1 className="nft-name"> {NFTName} </h1>
//       <div className="nft-details-header">
//         <h2 className="creator-name">by {creatorName}</h2>
//         <img src={pic} alt="creator Profile" className="nft-profile-img" />
//       </div>
//       <Stats />
//       <div className="nft-description">
//         <p>{NFTDescription}</p>
//       </div>

//     </div>
//   );
// };

// export default NFTpageDetails;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Stats from "./NFTStats";
import pic from "../images/NFTpageImages/img-9.jpg";
import "./NFTDetails.css";

const NFTpageDetails = () => {
  const NFTName = "Doge";
  const creatorSlug = "someone"; // Replace with the actual creator's slug
  const NFTDescription = "This doge is very special";

  return (
    <div className="nft-details-container">
      <h1 className="nft-name"> {NFTName} </h1>
      <div className="nft-details-header">
        <h2 className="creator-name">
          by <Link to={`/creator/${creatorSlug}`} className="creator-link">{creatorSlug} </Link>
        </h2>
        <Link to={`/creator/${creatorSlug}`}>
          <img src={pic} alt="creator Profile" className="nft-profile-img" />
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
