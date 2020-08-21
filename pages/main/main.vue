<template>
  <div class="main">
    <div class="main__player">
      <b-tile class="tile_padding_small tile_borders_top main__row">
        <a href="#" class="main__announcement">
          <span>27.08.2020</span> в <span>20:30</span> <sup>UTC+3</sup> –
          Гостевая рубрика с Midipon
        </a>
      </b-tile>
      <b-tile class="tile_padding_medium main__row">
        <b-player />
      </b-tile>
      <b-tile class="tile_padding_small tile_borders_bottom main__row">
        <b-player-buttons />
      </b-tile>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BPlayer from '~/components/player/player.vue';
import BTile from '~/components/tile/tile.vue';
import BPlayerButtons from '~/components/player-buttons/player-buttons.vue';

@Component({
  components: { BPlayerButtons, BTile, BPlayer },
})
export default class MainPage extends Vue {}
</script>

<style lang="stylus" src="./main.styl"></style>
