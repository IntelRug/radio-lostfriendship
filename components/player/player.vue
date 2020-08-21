<template>
  <!-- begin .player-->
  <div class="player">
    <audio hidden="hidden"></audio>
    <div class="player__header">
      <h1 class="player__title">Radio Lost Friendship</h1>
      <span class="player__listeners-counter">
        <svg-icon class="player__icon" name="people_alt" />
        6
      </span>
      <a
        href="/playlist/LostFriendshipRadio.m3u"
        class="player__download-playlist"
      >
        <svg-icon class="player__icon" name="m3u" />
      </a>
    </div>
    <div class="player__meta">
      <img
        src="https://radio.lostfriendship.net/artwork/513.png"
        class="player__meta-artwork"
      />
      <div class="player__meta-text">
        <div class="player__meta-title">Melon Drop Theme</div>
        <div class="player__meta-artist">EnergyTone</div>
        <div class="player__progress">
          <b-slider :value="0.4" with-time />
        </div>
      </div>
    </div>
    <div class="player__controls">
      <div class="player__control">
        <button class="player__play-button">
          <svg-icon name="play_circle_filled" />
        </button>
      </div>
      <div class="player__control player__quality-selector">
        <b-select v-model="qualityTitleIndex" :items="qualities.titles" />
      </div>
      <div class="player__control player__volume-slider">
        <b-volume-slider :volume="0.7" />
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
import BSelect from '~/components/select/select.vue';

@Component({
  name: 'b-player',
  components: { BSelect, BVolumeSlider, BSlider, BButton },
})
export default class Player extends Vue {
  qualities = {
    titles: ['320 kbit/s', '256 kbit/s', '128 kbit/s', '64 kbit/s'],
    indexes: [320, 256, 128, 64],
  };

  qualityTitleIndex = 0;
}
</script>

<style lang="stylus" src="./player.styl" />
