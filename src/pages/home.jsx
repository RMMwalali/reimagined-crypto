import { useEffect } from "react";
import api from "../store/api";
import { Link } from "react-router-dom";
import Header from "../components/header";
import ListItems from "../components/listItems";

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
          <h2> {!store.searched? 'TRENDING COINS': 'YOUR RESULTS'}</h2>
          {store.coins.map((coin) => {
            return <ListItems key={coin.id} coin={coin} />;
          })}
        </div>
      </div>
    </div>
  );
}
