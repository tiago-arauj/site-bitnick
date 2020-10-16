import Cookies from 'js-cookie'

export const actions = {
  nuxtClientInit ({ commit }) {
    const user = Cookies.get('ogk_user');
    if (user) {
      commit('auth/SET_USER', user)
    }
  }
};
