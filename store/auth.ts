/* eslint-disable no-shadow,@typescript-eslint/no-unused-vars */
import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';

export const namespaced = true;

export const state = () => ({
  userId: null as number | null,
  loggedIn: false as boolean,
});

export type AuthState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_USER_ID: (_state, payload: number | null) => (_state.userId = payload),
  SET_LOGGED_IN: (_state, payload: boolean) => (_state.loggedIn = payload),
});

export const getters = getterTree(state, {});

export const actions = actionTree(
  { state, mutations, getters },
  {
    nuxtServerInit({ commit }, { app }: Context) {
      const id = app.$cookies.get('user_id');
      const token = app.$cookies.get('apollo-token');

      if (id) commit('SET_USER_ID', parseInt(id, 10));
      if (token) commit('SET_LOGGED_IN', true);
    },
  },
);
