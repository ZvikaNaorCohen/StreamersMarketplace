import React from 'react';
import { useParams } from 'react-router-dom';
import CreatorHeader from '../components/CreatorHeader';


function CreatorProfile() {
  var slug = useParams();
  return (
    <>
        <CreatorHeader id={slug}/>
    </>
  );
}

export default CreatorProfile;
