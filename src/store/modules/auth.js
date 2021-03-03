import api from '../../api/google-photos';
import qs from 'qs';
import { router } from '../../main';
const state = {
  token: window.localStorage.getItem('auth_token')
};

const getters = {
  isLoggedIn: state => !!state.token,
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash){
    const query = qs.parse(hash.replace('#', ''));

    commit('setToken', query.access_token);
    window.localStorage.setItem('auth_token', query.access_token);
    router.push('/');
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('auth_token');
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
