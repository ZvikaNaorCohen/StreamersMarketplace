import React from 'react';
import './CreatorHeader.css';
import CreatorBackground from './CreatorBackground.js'
import CreatorBio from './CreatorBio.js'

function CreatorHeader(props) {
  return (
    <>
      <CreatorBackground creatorData={props.creatorData}/>
      <CreatorBio creatorData={props.creatorData} creatorID={props.creatorID}/>
    </>
  );
}

export default CreatorHeader;
