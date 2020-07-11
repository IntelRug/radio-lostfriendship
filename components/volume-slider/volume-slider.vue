<template>
  <!-- begin .volume-slider -->
  <div class="volume-slider">
    <button class="player__button volume-slider__button" @click="mute">
      <svg-icon
        :class="[
          'volume-slider__icon',
          { 'volume-slider__icon_type_muted': syncedMuted },
        ]"
        :name="`volume_${syncedMuted ? 'off' : 'up'}`"
      />
    </button>
    <div class="volume-slider__slider">
      <b-slider :value.sync="syncedVolume" interactive />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import BSlider from '~/components/slider/slider.vue';
@Component({
  name: 'b-volume-slider',
  components: { BSlider },
})
export default class VolumeSlider extends Vue {
  @PropSync('volume', { required: true, type: Number }) syncedVolume!: number;
  @PropSync('muted', { default: false, type: Boolean }) syncedMuted!: boolean;

  mute() {
    this.syncedMuted = !this.syncedMuted;
  }

  up() {
    this.syncedVolume = 1;
  }
}
</script>

<style lang="stylus" src="./volume-slider.styl" />
