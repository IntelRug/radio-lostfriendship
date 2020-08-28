/* eslint-disable no-shadow,@typescript-eslint/no-unused-vars */
import { Context } from '@nuxt/types';
import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import Cookies from 'universal-cookie';
import { ExecutionResult } from '~/types/apollo';
import {
  CalendarEvent,
  CurrentPlaying,
  CurrentPlayingTrack,
  GetGeneralDataQuery,
} from '~/graphql/schema';
import GetGeneralData from '~/graphql/queries/generalData.graphql';
import { RootState } from '~/store/index';

export const namespaced = true;

export const state = () => ({
  playingDataState: null as CurrentPlaying | null,
  calendarEventsState: [] as CalendarEvent[],
  streamId: 1 as number,
  volume: 0.5 as number,
  muted: false as boolean,
});

export type PlayerState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_PLAYING_DATA: (_state, payload: CurrentPlaying) =>
    (_state.playingDataState = payload),

  SET_CALENDAR_EVENTS: (_state, payload: CalendarEvent[]) =>
    (_state.calendarEventsState = payload),

  SET_STREAM_ID: (_state, payload: number) => {
    if (process.client && _state.streamId !== payload)
      new Cookies().set('stream_id', payload);
    _state.streamId = payload;
  },

  SET_VOLUME(_state, payload: number) {
    if (payload > 1) payload = 1;
    else if (payload < 0) payload = 0;

    if (process.client && _state.volume !== payload)
      new Cookies().set('volume', payload);
    _state.volume = payload;
  },

  SET_MUTED: (_state, payload: boolean) => (_state.muted = payload),
});

export const getters = getterTree(state, {
  playingData: (_state, _getters): CurrentPlaying =>
    _state.playingDataState || {
      previous: _getters.playingDataTrack('previous'),
      current: _getters.playingDataTrack('current'),
      next: _getters.playingDataTrack('next'),
      listenersCount: 0,
    },

  playingDataTrack: (_state) => {
    return (name: 'previous' | 'current' | 'next'): CurrentPlayingTrack =>
      (_state.playingDataState && _state.playingDataState[name]) || {
        id: 0,
        title: 'Unknown',
        artist: 'Unknown',
        name: 'Unknown - Unknown',
        startsAt: 0,
        endsAt: 0,
        length: 0,
        type: 'track',
        hasArtwork: false,
      };
  },

  track: (_state, _getters) =>
    _getters.playingDataTrack(_getters.trackType) as CurrentPlayingTrack,

  trackType: (
    _state,
    _getters,
    _rootState: RootState,
  ): 'next' | 'current' | 'previous' => {
    if (_getters.playingData.current.type === 'track') {
      if (_getters.playingData.current.endsAt - _rootState.now <= 0)
        return 'next';
      if (_getters.playingData.current.startsAt - _rootState.now > 0)
        return 'previous';
    }
    return 'current';
  },

  artwork: (_state, _getters): string => {
    if (_getters.track.hasArtwork) {
      return `https://radio.lostfriendship.net/artwork/${_getters.track.id}.png`;
    }
    return '/img/player/disc.svg';
  },

  progress: (_state, _getters, _rootState: RootState): number => {
    if (
      _getters.playingData?.current.type === 'track' &&
      _getters.track.length
    ) {
      let duration =
        1 -
        (_getters.track.endsAt - _rootState.now) /
          (_getters.track.length * 1000);
      if (duration) {
        if (duration > _getters.track.length) {
          duration = _getters.track.length;
        } else if (duration < 0) {
          duration = 0;
        }
        return duration;
      }
    }
    return 0;
  },
});

export const actions = actionTree(
  {
    state,
    mutations,
    getters,
  },
  {
    async nuxtServerInit({ state, commit, dispatch }, context: Context) {
      const streamId = context.app.$cookies.get('stream_id');
      const volume = context.app.$cookies.get('volume');

      if (streamId)
        commit('SET_STREAM_ID', parseInt(streamId, 10) || state.streamId);
      if (volume) commit('SET_VOLUME', parseFloat(volume) || state.volume);
      await dispatch('getGeneralData', context);
    },

    nuxtClientInit({ dispatch }, context) {
      setInterval(
        async () => await dispatch('getGeneralData', context),
        10 * 1000,
      );
    },

    async getGeneralData({ commit }, context: Context) {
      const apollo = context?.app.apolloProvider?.defaultClient;
      if (!apollo) return;

      const {
        data,
        errors,
      }: ExecutionResult<GetGeneralDataQuery> = await apollo.query({
        query: GetGeneralData,
      });

      if (errors || !data || !data.getCurrentPlaying) return;

      commit('SET_PLAYING_DATA', data.getCurrentPlaying);
      commit('SET_CALENDAR_EVENTS', data.getCalendarEvents);
    },
  },
);
