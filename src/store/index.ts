import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    now: Math.floor(Date.now() / 1000),
  },
  mutations: {
    updateNow(state) {
      state.now = Math.floor(Date.now() / 1000);
    },
  },
  actions: {
    updateNow({ commit }) {
      setInterval(() => commit('updateNow'), 500);
    },
  },
  modules: {},
});
