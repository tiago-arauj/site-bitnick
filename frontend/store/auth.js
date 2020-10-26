import Cookies from 'js-cookie'

// state
export const state = () => ({
  user: null,
  token: null,
});

// getters
export const getters = {
  user: state => state.user,
  check: state => state.user !== null,
  admin: state => state.user !== null && state.user.role === 'admin'
};

// mutations
export const mutations = {
  SET_USER(state, user) {
    state.user = typeof user === 'object' ? user : JSON.parse(user);
  },

  LOGOUT(state) {
    state.user = null;
  },
};

// actions
export const actions = {
  saveUser({commit, dispatch}, data) {
    //Concatenando objeto
    data.user.hash = data.hash;
    data.user.token = data.token;

    commit('SET_USER', data.user);
    Cookies.set('ogk_user', data.user, {expires: 1/24});
  },

  async logout({commit}) {
    Cookies.remove('ogk_user');
    commit('LOGOUT');
  },
};
