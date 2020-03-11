<template lang="pug">
  include ../../tools/mixins
  // begin .map
  +b.listeners
    +e.title Слушатели: {{ listeners.length }}
    +e('l-map').map(:zoom="3" :center="[61.698653, 99.505405]" style="height: 350px; width: 100%")
      l-tile-layer(:url="url" :attribution="attribution")
      l-marker(v-for="(m, i) of markers" :key="i" :lat-lng="[m.location.lat, m.location.lon]" :icon="icon")
        l-popup
          | IP адрес: {{ m.ip }}
          br
          | Страна: {{ m.location.country }}
          br
          | Город: {{ m.location.city }}
          br
          | Время: {{ now - m.connectedAt | toHHMMSS }}
          br
          | UserAgent: {{ m.agent }}
    +e.table-wrapper
      +e.header-table
        +e('table').table(cellspacing="0")
          +e('thead').table-head
            +e('tr').table-row
              +e('th').table-col._type_head IP адрес
              +e('th').table-col._type_head Время
              +e('th').table-col._type_head UserAgent
              +e('th').table-col._type_head Метоположение
          +e('tbody').table-body
            +e('tr').table-row(v-for="l of listeners" :key="l.id")
              +e('td').table-col {{ l.ip }}
              +e('td').table-col {{ now - l.connectedAt | toHHMMSS }}
              +e('td').table-col {{ l.agent }}
              +e('td').table-col(v-if="l.location") {{ l.location.country }}, {{ l.location.city }}
              +e('td').table-col(v-else) Неизвестно
      +e.body-table
        +e.body-table-inner
          +e('table').table(cellspacing="0")
            +e('tbody').table-body
              +e('tr').table-row(v-for="l of listeners" :key="l.id")
                +e('td').table-col {{ l.ip }}
                +e('td').table-col {{ now - l.connectedAt | toHHMMSS }}
                +e('td').table-col {{ l.agent }}
                +e('td').table-col(v-if="l.location") {{ l.location.country }}, {{ l.location.city }}
                +e('td').table-col(v-else) Неизвестно
  // end .map
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import { icon } from 'leaflet';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { Listeners } from '@/apollo/schema';
import { toHHMMSS } from '@/tools/filters';
import { State } from 'vuex-class';

@Component({
  name: 'map',
  components: {
    LMap,
    LMarker,
    LTileLayer,
    LPopup,
  },
  filters: {
    toHHMMSS,
  },
})
export default class StatsListeners extends Vue {
  @State now!: number;

  url = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';
  // url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  icon = icon({
    iconUrl: '/img/leaflet/marker-icon.png',
    iconSize: [22, 35],
    iconAnchor: [11, 35],
    popupAnchor: [0, -25],
  });
  listeners: Listeners[] = [];
  fetchListenersTimeout!: number;

  get markers() {
    return this.listeners.filter(({ location }) => !!location);
  }

  created() {
    this.fetchListeners();
    this.fetchListenersTimeout = window.setInterval(this.fetchListeners, 4000);
  }

  beforeDestroy() {
    clearInterval(this.fetchListenersTimeout);
  }

  async fetchListeners() {
    try {
      const response: ApolloQueryResult<{
        getListeners: Listeners[];
      }> = await this.$apollo.query({
        query: gql`
          query {
            getListeners {
              id
              icecastId
              mount
              ip
              agent
              connectedAt
              disconnectedAt
              location {
                country
                city
                lat
                lon
              }
            }
          }
        `,
      });
      this.listeners = response.data.getListeners;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>

<style lang="stylus" src="./listeners.styl" />
