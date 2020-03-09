<template lang="pug">
  include ../../tools/mixins
  // begin .volume-slider
  +b.volume-slider
    +e('button').button(@click="mute")
      +e('icon').icon(:name='`volume_${this.syncedMuted ? \'off\' : \'up\'}`')
    +e.slider
      slider(:value.sync='syncedVolume')
    // +e('button').up-button(@click="up")
      +e('icon').icon(name='volume_up')
  // end .volume-slider
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import Icon from '@/components/icon/icon.vue';
import Slider from '@/components/slider/slider.vue';
@Component({
  components: { Icon, Slider },
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
