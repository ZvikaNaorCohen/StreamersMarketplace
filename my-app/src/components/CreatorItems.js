import React from 'react';
import './CreatorItems.css';
import CreatorItemCard from './CreatorItemCard';

function CreatorItems(id) {
  return (
    <>
        <h2>Items on sale</h2>
        <div className="items-grid-container">
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        <CreatorItemCard id={id}/>
        </div>
    </>
  );
}

export default CreatorItems;
