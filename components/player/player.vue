<template>
  <!-- begin .player-->
  <div class="player">
    <div class="player__slider">
      <b-slider :value="0.3" />
    </div>
    <div class="player__controls player__controls_position_left">
      <button class="player__button">
        <svg-icon class="player__button-icon" name="play_arrow" title="play" />
      </button>
      <div class="player__duration">
        0:00 / 5:31
      </div>
    </div>
    <div class="player__controls player__controls_position_center">
      <img class="player__artwork" src="/artwork.jpg" alt="artwork" />
      <div class="player__metadata">
        <div class="player__metadata-title">
          Together, Against The Sisters (feat. Celica Soldream)
        </div>
        <div class="player__metadata-artist">Jyc Row & PrinceWhateverer</div>
      </div>
      <div class="player__voting">
        <button class="player__button">
          <svg-icon
            class="player__button-icon"
            name="thumb_down_outline"
            title="vote_down"
          />
        </button>
        <button class="player__button player__button_type_active">
          <svg-icon
            class="player__button-icon"
            name="thumb_up"
            title="vote_up"
          />
        </button>
      </div>
    </div>
    <div class="player__controls player__controls_position_right">
      <div class="player__volume-slider">
        <b-volume-slider :volume="0.3" />
      </div>
      <div class="player__button">
        <svg-icon class="player__button-icon" name="more_vert" />
      </div>
    </div>
  </div>
  <!-- end .player-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BButton from '~/components/button/button.vue';
import BSlider from '~/components/slider/slider.vue';
import BVolumeSlider from '~/components/volume-slider/volume-slider.vue';

@Component({
  name: 'b-player',
  components: { BVolumeSlider, BSlider, BButton },
})
export default class Player extends Vue {}
</script>

<style lang="stylus" src="./player.styl" />
