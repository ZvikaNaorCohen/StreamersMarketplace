import React from 'react';
import './CreatorBio.css';
import profilePic from '../images/revX.png'
import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import {fill} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import {Gravity} from "@cloudinary/url-gen/qualifiers";
import {AutoFocus} from "@cloudinary/url-gen/qualifiers/autoFocus";


function CreatorBio(id) {
    var creatorName = "Symfuhny";
    var creatorAboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi nec commodo mollis, sem neque consectetur elit, vel cursus felis enim sed quam. Donec eget tellus tortor.";
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dduc2ulov'
        }
    });
    const myVideo = cld.video('samples/sea-turtle');
    // Apply the transformation.
    myVideo.resize(fill().width(500).height(250)
    .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces())))) // Crop the video, focusing on the faces.
    .roundCorners(byRadius(20));    // Round the corners.

    return (
    <div className="creator-bio-container">
      <div>
        <div className="creator-bio-header">
            <img src={profilePic} alt="creator Profile" />
            <h1>{creatorName}</h1>
        </div>
        <div className="creator-bio-content">
            <h2>About Me</h2>
            <p>{creatorAboutMe}</p>
        </div>
      </div>
      <div className='creator-video'>
        <AdvancedVideo cldVid={myVideo} controls autoPlay/>
      </div>
    </div>
  );
}

export default CreatorBio;