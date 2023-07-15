import React from 'react';
import './CreatorItems.css';
import CreatorItemCard from './CreatorItemCard';

function CreatorItems(props) {
  const creatorItemCards = props.creatorItems.filter(item => item.body.ownedBy == null).map(item => (<CreatorItemCard item={item}/>))
  return (
    <>
        <h2>Items on sale</h2>
        <div className="items-grid-container">
        {creatorItemCards}
        </div>
    </>
  );
}

export default CreatorItems;
