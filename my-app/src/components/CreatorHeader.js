import React from 'react';
import './CreatorHeader.css';
import CreatorBackground from './CreatorBackground.js'
import CreatorBio from './CreatorBio.js'
import CreatorItems from './CreatorItems.js'

function CreatorHeader(id) {
  return (
    <>
      <CreatorBackground id={id}/>
      <CreatorBio id={id}/>
      <CreatorItems id={id}/>
    </>
  );
}

export default CreatorHeader;
