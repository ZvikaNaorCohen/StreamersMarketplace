import React from 'react';
import './SingleVideoPage.css';
import { getLoggedInUser } from './globals';
import { AdvancedVideo, AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";


const SingleVideoPage = (props) => {

const cld = new Cloudinary({
    cloud: {
        cloudName: 'dduc2ulov'
    }
});
const loggedInUser = getLoggedInUser();
const myVideo = cld.video(props.creatorData.videoLink);
const title = props.creatorData.title;
console.log('LoggedInUser:', loggedInUser);


if (loggedInUser === "113220831741527471440" ||
    loggedInUser === "105133534616865924894" || 
    loggedInUser === "115857857235822341241" || 
    loggedInUser === "101506400040155830899" ||
    loggedInUser === "116458516760319176266" || 
    loggedInUser === "103939648540764412957") { 
  return (
    <div className="creator-video-container">
      <div className="title">
      <h2>{title}</h2>
    </div>
      <AdvancedVideo cldVid={myVideo} controls autoPlay />
    </div>
  );
}
else{
  return(
    <h3>You are not allowed to view this page!</h3>
  );
}
}

export default SingleVideoPage;
