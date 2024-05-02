import React from "react";
import { Link } from "react-router-dom";
import './listItem.css'; // Import the CSS file

export default function ListItems({ coin }) {
  return (
    <div className="home-crypto">
      <Link to={`/${coin.id}`}>
        <span className="home-crypto-image">
          <img src={coin.image} />
        </span>
        <span className="home-crypto-name">{coin.name}</span>
        <span className="home-crypto-symbol">{coin.symbol}</span>
        <span className="home-crypto-marketCap">{coin.marketCap}</span>
        <span className="home-crypto-priceChange">{coin.priceChange}%</span>

        <span className="home-crypto-prices">
          <span className="home-crypto-usd">{coin.priceUsd}$</span>
        </span>
      </Link>
    </div>
  );
}
