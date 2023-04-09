import React from "react";
import "./NFTStats.css";

const Stats = () => {
  let itemsAmount = 100;
  let itemsOwned = 50;
  let markedAsFavorite = 1;
  let category = "meme";

  return (
    <div className="stats">
      <div className="stats__amount">
        <h3>{itemsAmount} Items</h3>
      </div>
      <div className="stats__owned">
        <h3>{itemsOwned} Owned</h3>
      </div>
      <div className="stats__favs">
        <h3>{markedAsFavorite} Marked as favorite</h3>
      </div>
      <div className="stats__category">
        <h3>{category} category</h3>
      </div>
    </div>
  );
};

export default Stats;
