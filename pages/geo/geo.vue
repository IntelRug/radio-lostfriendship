<template>
  <!-- begin .list-->
  <div class="geo">
    <div class="geo__controls">
      <span class="geo__listeners-count">
        Listeners: {{ listeners.length }}
      </span>
    </div>
    <div class="geo__map">
      <l-map
        v-if="ready"
        class="map"
        :zoom="3"
        :center="[61.698653, 99.505405]"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker
          v-for="(m, i) of markers"
          :key="i"
          :lat-lng="[m.location.lat, m.location.lon]"
          :icon="icon"
        >
          <l-popup>
            IP адрес: {{ m.ip }}
            <br />
            Страна: {{ m.location.country }}
            <br />
            Город: {{ m.location.city }}
            <br />
            Время: {{ (now / 1000 - m.connectedAt) | toHHMMSS }}
            <br />
            UserAgent: {{ m.agent }}
          </l-popup>
        </l-marker>
      </l-map>
    </div>
    <div class="geo__table">
      <div class="geo__table-thead">
        <div class="geo__table-tr">
          <span class="geo__table-th">IP Address</span>
          <span class="geo__table-th">Mount</span>
          <span class="geo__table-th">Time</span>
          <span class="geo__table-th">User Agent</span>
          <span class="geo__table-th">Location</span>
        </div>
      </div>
      <div class="geo__table-tbody">
        <div v-for="(l, i) of listeners" :key="i" class="geo__table-tr">
          <span class="geo__table-td">{{ l.ip }}</span>
          <span class="geo__table-td">{{ l.mount }}</span>
          <span class="geo__table-td">
            {{ (now / 1000 - l.connectedAt) | toHHMMSS }}
          </span>
          <span class="geo__table-td" :title="l.agent">{{ l.agent }}</span>
          <span
            class="geo__table-td"
            :title="l.location.country + ',' + l.location.city"
          >
            {{ l.location.country }}, {{ l.location.city }}
          </span>
        </div>
        <div v-if="listeners.length === 0" class="geo__table-tr">
          <span class="geo__table-td">–</span>
          <span class="geo__table-td">–</span>
          <span class="geo__table-td">–</span>
          <span class="geo__table-td">–</span>
          <span class="geo__table-td">–</span>
        </div>
      </div>
    </div>
  </div>
  <!-- end .geo-->
</template>

<script lang="ts">
import { Component, Vue, State } from 'nuxt-property-decorator';
import { toHHMMSS } from '~/tools/filters';
import { ExecutionResult } from '~/types/apollo';
import { GetListenersQuery, Listener } from '~/graphql/schema';
import getListeners from '~/graphql/queries/getListeners.graphql';

@Component({
  head: {
    htmlAttrs: {
      class: ['page_mobile_no_background'],
    },
  },
  filters: { toHHMMSS },
})
export default class ListPage extends Vue {
  @State now!: number;

  ready = false;
  url =
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';
  // url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  attribution =
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  markerIcon: any;
  listeners: Listener[] = [];
  fetchListenersInterval!: number;

  get markers() {
    return this.listeners.filter(({ location }) => !!location);
  }

  get icon() {
    return this.markerIcon || null;
  }

  async mounted() {
    this.markerIcon = this.$L.icon({
      iconUrl: '/img/leaflet/marker-icon.png',
      iconSize: [22, 35],
      iconAnchor: [11, 35],
      popupAnchor: [0, -25],
    });
    await this.fetchListeners();
    this.ready = true;
    this.fetchListenersInterval = window.setInterval(this.fetchListeners, 5000);
  }

  async fetchListeners() {
    try {
      const {
        data,
      }: ExecutionResult<GetListenersQuery> = await this.$apollo.query({
        query: getListeners,
      });

      if (!data) return;
      this.listeners = data.getListeners;
    } catch (e) {}
  }

  beforeDestroy() {
    window.clearInterval(this.fetchListenersInterval);
  }
}
</script>

<style lang="stylus" src="./geo.styl" />
