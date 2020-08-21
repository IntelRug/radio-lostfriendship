<template>
  <!-- begin .tile-->
  <div class="tile">
    <slot />
  </div>
  <!-- end .tile-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-tile',
})
export default class Tile extends Vue {}
</script>

<style lang="stylus" src="./tile.styl" />
