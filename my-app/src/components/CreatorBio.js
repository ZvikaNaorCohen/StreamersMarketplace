import React from 'react';
import './CreatorBio.css';
import { AdvancedVideo, AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";


function CreatorBio(props) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dduc2ulov'
        }
    });
    const profilePic = cld.image(props.creatorData.profilePic);
    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    profilePic.resize(fill().width(250).height(250));
    const myVideo = cld.video(props.creatorData.introVideo);
    // Apply the transformation.
    myVideo.resize(fill().width(500).height(250)
        .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces())))) // Crop the video, focusing on the faces.
        .roundCorners(byRadius(20));    // Round the corners.

    const handleVideosClick = () => {
        window.location.href = `http://localhost:3000/creator/${props.creatorID}/videos`;
    };

    const handleStreamClick = () => {
        window.location.href = `http://localhost:3000/stream/${props.creatorID}/`;
    };

    return (
        <div className="creator-bio-container">
            <div>
                <div className="creator-bio-header">
                    <AdvancedImage cldImg={profilePic} />
                    <h1>{props.creatorData.displayName}</h1>
                </div>
                <div className="creator-bio-content">
                    <h2>About Me</h2>
                    <p>{props.creatorData.description}</p>

                    {/* Add "Videos" and "Stream" buttons */}
                    <button className="videos-button" onClick={handleVideosClick}>Videos</button>
                    <button className="stream-button" onClick={handleStreamClick}>Stream</button>
                </div>
            </div>
            <div className='creator-video'>
                <AdvancedVideo cldVid={myVideo} controls autoPlay />
            </div>
        </div>
    );
}

export default CreatorBio;
