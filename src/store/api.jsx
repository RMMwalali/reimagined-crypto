import { create } from "zustand";
import axios from "axios";
import debounce from "../helpers/debounce";

const api = create((set) => ({
  coins: [],
  trending: [],
  query: "",
  searched: false,

  setQuery: (e) => {
    set({ query: e.target.value });
    api.getState().searchCoins();
  },

  searchCoins: debounce(async () => {
    const { query, trending } = api.getState();

    if (query.length > 2) {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );

      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.name,
          image: coin.large,
          id: coin.id,
        };
      });

      set({ coins, searched: true });
    } else {
      set({ coins: trending, searched: false });
    }
  }, 500),

  fetchCoins: async () => {
    const [res, btcRes] = await Promise.all([
      axios.get("https://api.coingecko.com/api/v3/search/trending"),
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
      ),
    ]);

    const btcPrice = btcRes.data.bitcoin.usd;
    console.log(btcPrice);

    const coins = res.data.coins.map((coin) => {
      return {
        id: coin.item.id,
        name: coin.item.name,
        image: coin.item.large,
        symbol: coin.item.symbol.toUpperCase(),
        priceBtc: coin.item.price_btc.toFixed(10),
        priceUsd: (coin.item.price_btc * btcPrice).toFixed(10),
        marketCap: coin.item.data.market_cap,
        priceChange: coin.item.data.price_change_percentage_24h.usd,
      };
    });

    console.log(coins);

    set({ coins, trending: coins });
  },
}));

export default api;
