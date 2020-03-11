<template lang="pug">
  include ../../tools/mixins
  // begin .tile
  +b.tile
    slot
  // end .tile
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Tile extends Vue {}
</script>

<style lang="stylus" src="./tile.styl" />
