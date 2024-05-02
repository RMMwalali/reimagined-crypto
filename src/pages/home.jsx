import { useEffect } from "react";
import api from "../store/api";
import { Link } from "react-router-dom";
import Header from "../components/header";
import ListItems from "../components/listItems";
import "../components/listItem.css"

export default function home() {
  const store = api();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      <header className="home-search">
        <div className="width">
          <div className="home-search-input">
            <input
              type="text"
              placeholder="SEARCH"
              value={store.query}
              onChange={store.setQuery}
            />
          </div>
        </div>
      </header>
      <div className="home-cryptos">
        <div className="width">
          <h2> {!store.searched ? 'TRENDING COINS' : 'YOUR RESULTS'}</h2>
          <div className="crypto-header">
            <span className="crypto-label"></span>
            <span className="crypto-label">Name</span>
            <span className="crypto-label">Symbol</span>
            <span className="crypto-label">Market Cap</span>
            <span className="crypto-label">Price Change</span>
            <span className="crypto-label">Price (USD)</span>
          </div>
          {store.coins.map((coin) => {
            return <ListItems key={coin.id} coin={coin} />;
          })}
        </div>
      </div>
    </div>
  );
}
