<template>
  <!-- begin .button-->
  <div class="button">
    <slot />
  </div>
  <!-- end .button-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-button',
})
export default class Button extends Vue {}
</script>

<style lang="stylus" src="./button.styl" />
