import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './listItem.css'; // Import the CSS file

const ProtectedLink = ({ to, children }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      loginWithRedirect();
    } else {
      navigate(to);
    }
  };

  return (
    <Link to={to} onClick={handleNavigation}>
      {children}
    </Link>
  );
};

export default function ListItems({ coin }) {
  return (
    <div className="home-crypto">
      <ProtectedLink to={`/${coin.id}`}>
        <span className="home-crypto-image">
          <img src={coin.image} alt={`${coin.name} logo`} />
        </span>
        <span className="home-crypto-name">{coin.name}</span>
        <span className="home-crypto-symbol">{coin.symbol}</span>
        <span className="home-crypto-marketCap">{coin.marketCap}</span>
        <span className="home-crypto-priceChange">
          {Math.round(coin.priceChange * 100) / 100}%
        </span>
        <span className="home-crypto-prices">
          <span className="home-crypto-usd">$ {coin.priceUsd}</span>
        </span>
      </ProtectedLink>
    </div>
  );
}
