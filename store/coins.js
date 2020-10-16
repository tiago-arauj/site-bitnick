// state
export const state = () => ({
  coins: {
    BTC: null,
    USD: null,
    OGK: null,
    ETH: null
  },
  balance: null
});

// getters
export const getters = {
  btc: state => state.coins.BTC,
  usd: state => state.coins.USD,
  ogk: state => state.coins.OGK,
  eth: state => state.coins.ETH,
  balance: state => state.balance,
};

// mutations
export const mutations = {
  SET_COINS(state, coins) {
    state.coins.BTC = coins.BTC;
    state.coins.USD = coins.USD;
    state.coins.OGK = coins.OGK;
    state.coins.ETH = coins.ETH;
  },
  SET_BALANCE(state, balance) {
    state.balance = balance;
  },
};
