import React from "react";
import { Link, useHistory } from "react-router-dom"; // Import useHistory hook
import { useAuth0 } from "@auth0/auth0-react"; 
import './listItem.css'; 

export default function ListItems({ coin }) {
  const { isAuthenticated, loginWithRedirect } = useAuth0(); 
  const history = useHistory(); // Initialize useHistory hook

  const handleItemClick = () => {
    if (!isAuthenticated) {
      loginWithRedirect({
        redirectUri: window.location.href // Specify the current page as the redirect URI
      });
    } else {
      history.push(`/${coin.id}`); // Redirect to the next page if the user is already authenticated
    }
  };

  return (
    <div className="home-crypto">
      <Link to={`/${coin.id}`} onClick={handleItemClick}>
        <span className="home-crypto-image">
          <img src={coin.image} alt="coin logo" />
        </span>
        <span className="home-crypto-name">{coin.name}</span>
        <span className="home-crypto-symbol">{coin.symbol}</span>
        <span className="home-crypto-marketCap">{coin.marketCap}</span>
        <span className="home-crypto-priceChange">{Math.round(coin.priceChange * 100) / 100}%</span>
        <span className="home-crypto-prices">
          <span className="home-crypto-usd">$ {coin.priceUsd}</span>
        </span>
      </Link>
    </div>
  );
}
