<template>
  <div class="main">
    <div class="main__player">
      <b-tile class="tile_padding_medium tile_borders_top">
        <b-player />
      </b-tile>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BPlayer from '~/components/player/player.vue';
import BTile from '~/components/tile/tile.vue';

@Component({
  components: { BTile, BPlayer },
})
export default class MainPage extends Vue {}
</script>

<style lang="stylus" src="./main.styl"></style>
