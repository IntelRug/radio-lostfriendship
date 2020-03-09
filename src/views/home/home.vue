<template lang="pug">
  include ../../tools/mixins
  +content
    +e.player
      player
    +e.chat
      +e('a').open-link(href='https://lfradio.chatovod.ru', target='_blank')
        icon(name='open_in_new')
      iframe(src='https://lfradio.chatovod.ru/')
    +e.ad
      ad
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Ad from '@/components/ad/ad.vue';
import Player from '@/components/player/player.vue';
import Icon from '@/components/icon/icon.vue';
import '@/components/content/content.styl';

@Component({
  components: {
    Player,
    Icon,
    Ad,
  },
})
export default class Home extends Vue {}
</script>
<style lang="stylus" src="./home.styl" />
