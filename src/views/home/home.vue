<template lang="pug">
  include ../../tools/mixins
  +b.home
    +e.player
      tile.tile_paddings_medium.tile_borders_top
        player
    +e.chat
      chat
    +e.ad
      tile.tile_paddings_small.tile_borders_bottom
        ad
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/components/content/content.styl';
import Ad from '@/components/ad/ad.vue';
import Player from '@/components/player/player.vue';
import Icon from '@/components/icon/icon.vue';
import Tile from '@/components/tile/tile.vue';
import Chat from '@/components/chat/chat.vue';

@Component({
  components: {
    Chat,
    Tile,
    Player,
    Icon,
    Ad,
  },
})
export default class Home extends Vue {}
</script>
<style lang="stylus" src="./home.styl" />
