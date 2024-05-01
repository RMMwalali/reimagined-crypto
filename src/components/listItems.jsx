import { Link } from "react-router-dom";

export default function ListItems({ coin }) {
  return (
    <div className="home-crypto">
      <Link to={`/${coin.id}`}>
        <span className="home-crypto-image">
          <img src={coin.image} />
        </span>
              <span className="home-crypto-name">{coin.name}</span>
              <span>{coin.symbol}</span>
              <span>{coin.marketCap}</span>
              <span>{coin.priceChange}</span>
        <span className="home-crypto-prices">
                  <span className="home-crypto-usd">{coin.priceUsd}$</span>
              </span>
              
      </Link>
      </div>
      
  );
}
