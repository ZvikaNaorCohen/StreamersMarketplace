import React from "react";
import './NFTstats.css'
// let itemsAmount = 100;
// let itemsOwned = 50;
// let markedAsFavorite = 1;
// let category = 'meme'

const Stats = () => {
    return (
      <div className="stats">
        <div className="stats__amount">
          <h3>Items</h3>
        </div>
        <div className="stats__owned">
          <h3>Owned</h3>
        </div>
        <div className="stats__favs">
          <h3>Marked as favorite</h3>
        </div>
        <div className="stats__category">
          <h3>Category</h3>
        </div>
      </div>
    );
}

export default Stats