<template>
  <!-- begin .list-->
  <div class="geo">
    <div class="geo__controls">
      <span class="geo__listeners-count">Listeners: 7</span>
    </div>
    <div class="geo__map">
      <l-map
        class="map"
        :zoom="3"
        :center="[61.698653, 99.505405]"
        @ready="ready = true"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker
          v-for="(m, i) of markers"
          :key="i"
          :lat-lng="[m.location.lat, m.location.lon]"
          :icon="icon"
        >
          <l-popup v-if="ready">
            IP адрес: {{ m.ip }}
            <br />
            Страна: {{ m.location.country }}
            <br />
            Город: {{ m.location.city }}
            <br />
            Время: {{ (Date.now() / 1000 - m.connectedAt) | toHHMMSS }}
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
          <span class="geo__table-td">{{ l.connectedFor | toHHMMSS }}</span>
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
import { Component, Vue } from 'nuxt-property-decorator';
import { toHHMMSS } from '~/tools/filters';

type Listeners = {
  id: number;
  icecastId: number;
  mount: string;
  ip: string;
  connectedFor: number;
  agent?: string | null;
  connectedAt: number;
  disconnectedAt?: number | null;
  location?: Location | null;
};

type Location = {
  country: string;
  city: string;
  lat: number;
  lon: number;
};

@Component({
  filters: { toHHMMSS },
})
export default class ListPage extends Vue {
  ready = false;
  url =
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';
  // url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  attribution =
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  markerIcon: any;
  listeners: Listeners[] = [
    {
      id: 29027,
      icecastId: 2941061,
      mount: '320',
      ip: '37.146.135.38',
      agent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.101 YaBrowser/20.7.0.894 Yowser/2.5 Yptp/1.21 Safari/537.36',
      connectedAt: 1594633126,
      connectedFor: 37201,
      disconnectedAt: null,
      location: {
        country: 'Россия',
        city: 'Архангельск',
        lat: 64.4777,
        lon: 40.4998,
      },
    },
    {
      id: 29038,
      icecastId: 2986773,
      mount: '320',
      ip: '188.233.31.18',
      agent: 'BASS/2.4',
      connectedAt: 1594654370,
      connectedFor: 15957,
      disconnectedAt: null,
      location: {
        country: 'Россия',
        city: 'Волгоград',
        lat: 48.8047,
        lon: 44.5858,
      },
    },
    {
      id: 29051,
      icecastId: 3002700,
      mount: '320',
      ip: '37.193.226.190',
      agent: 'WinampMPEG/5.66, Ultravox/2.1',
      connectedAt: 1594662031,
      connectedFor: 8296,
      disconnectedAt: null,
      location: {
        country: 'Россия',
        city: 'Новосибирск',
        lat: 55.041,
        lon: 82.9428,
      },
    },
    {
      id: 29053,
      icecastId: 3006192,
      mount: '320',
      ip: '121.234.39.178',
      agent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
      connectedAt: 1594663644,
      connectedFor: 6683,
      disconnectedAt: null,
      location: {
        country: 'Китай',
        city: 'Unknown',
        lat: 34.7725,
        lon: 113.7266,
      },
    },
  ];

  get markers() {
    return this.listeners.filter(({ location }) => !!location);
  }

  get icon() {
    return this.markerIcon || null;
  }

  mounted() {
    this.markerIcon = this.$L.icon({
      iconUrl: '/img/leaflet/marker-icon.png',
      iconSize: [22, 35],
      iconAnchor: [11, 35],
      popupAnchor: [0, -25],
    });
  }
}
</script>

<style lang="stylus" src="./geo.styl" />
