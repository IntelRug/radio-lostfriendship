<template lang="pug">
  include ../../tools/mixins
  // begin .ad
  +b.ad
    +e('p').text
      = 'Join our Discord: '
      +e('a').link(:href='discordLink') {{ discordLink }}
  // end .ad
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ad',
})
export default class Ad extends Vue {
  private discordLink: string = 'https://discord.gg/tFEEYzm';
}
</script>

<style lang="stylus" src="./ad.styl" />
