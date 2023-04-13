import React from 'react';
import { useParams } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import NFTpage from '../components/NFTpage';

function Item() {
  var slug = useParams();
  return (
    <>
      <NFTpage id={slug} />
    </>
  );
}

export default Item;