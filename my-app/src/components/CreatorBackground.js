import React from 'react';
import './CreatorBackground.css';
import backgroundPic from '../images/arsenal.jpg'

function CreatorBackground(UserId) {
  return (
    <div className='backgroundPic'>
        <img src={backgroundPic} height="350"/>
    </div>
  );
}

export default CreatorBackground;
