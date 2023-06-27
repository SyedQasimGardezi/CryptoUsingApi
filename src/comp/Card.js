import React from "react";
import "./card.css";
import BookmarkList from "./BookmarkList";
export default function Card({ src, name, rank, price, cap, symbol }) {
  function addToList() {
    <BookmarkList />;
  }
  return (
    <div className="card">
      <img className="image" src={src} alt="Coin Icon" />
      <div className="details">
        <div className="hard-details">
          <h1>Name:</h1>
          <h1>Symbol:</h1>
          <h1>Market Cap:</h1>
          <h1>Price:</h1>
          <h1>Rank:</h1>
        </div>
        <div className="api-details">
          <h1 className="name">{name}</h1>
          <h1 className="symbol">{symbol}</h1>
          <h1 className="cap">{cap}</h1>
          <h1 className="price">${price}</h1>
          <h1 className="rank">{rank}</h1>
        </div>
      </div>
      <button class="btn" onClick={addToList}>
        Add to List
      </button>
    </div>
  );
}
