import React from 'react';
import './CreatorBackground.css';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

function CreatorBackground(props) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dduc2ulov'
    }
  });
  const backgroundPic = cld.image(props.creatorData.backgroundPic);
  backgroundPic.resize(fill().width(2000).height(350)); 
  return (
    <div className='backgroundPic'>
        <AdvancedImage cldImg={backgroundPic}/>
    </div>
  );
}

export default CreatorBackground;
