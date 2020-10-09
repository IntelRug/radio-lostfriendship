<template>
  <!-- begin .player-->
  <div class="player">
    <audio ref="audio" hidden="hidden" src="/silence.mp3"></audio>
    <div class="player__header">
      <h1 class="player__title">{{ station.name }}</h1>
      <span class="player__listeners-counter">
        <svg-icon class="player__icon" name="people_alt" />
        {{ listenersCount }}
      </span>
      <a :href="station.playlists.m3u" class="player__download-playlist">
        <svg-icon class="player__icon" name="m3u" />
      </a>
    </div>
    <div class="player__meta">
      <img v-if="!isLiveStream" :src="artwork" class="player__meta-artwork" />
      <div class="player__meta-text">
        <div class="player__meta-title">{{ track.title }}</div>
        <div class="player__meta-artist">
          {{ track.artist }}
        </div>
        <div v-if="!isLiveStream" class="player__progress">
          <b-slider :value="progress" :duration="track.duration" with-time />
        </div>
      </div>
    </div>
    <div class="player__controls">
      <div class="player__control">
        <button class="player__play-button" @click="play">
          <svg-icon v-if="playing" name="pause_circle_filled" />
          <svg-icon v-else name="play_circle_filled" />
        </button>
      </div>
      <div class="player__control player__quality-selector">
        <b-select
          :items="station.mounts.map(({ name }) => name)"
          :value="streamOrderId"
          @input="selectStream"
        />
      </div>
      <div class="player__control player__volume-slider">
        <b-volume-slider
          :volume="volume"
          :muted="muted"
          @update:volume="setVolume"
          @update:muted="setMuted"
        />
      </div>
    </div>
  </div>
  <!-- end .player-->
</template>

<script lang="ts">
import { Component, Ref, Vue, Watch } from 'nuxt-property-decorator';
import BButton from '~/components/button/button.vue';
import BSlider from '~/components/slider/slider.vue';
import BVolumeSlider from '~/components/volume-slider/volume-slider.vue';
import BSelect from '~/components/select/select.vue';
import {
  CurrentPlaying,
  CurrentPlayingTrack,
  GetGeneralDataQuery,
} from '~/graphql/schema';

@Component({
  name: 'b-player',
  components: { BSelect, BVolumeSlider, BSlider, BButton },
})
export default class Player extends Vue {
  @Ref() audio!: HTMLAudioElement;

  playing = false;

  get station(): GetGeneralDataQuery['getStation'] {
    return this.$accessor.player.station;
  }

  get streamId(): number {
    return this.$accessor.player.streamId;
  }

  get streamOrderId(): number {
    const index = this.station.mounts.findIndex(
      // eslint-disable-next-line eqeqeq
      ({ id }) => this.streamId == id,
    );
    return index === -1 ? 0 : index;
  }

  get stream(): string {
    return this.station.mounts[this.streamOrderId]?.url || '';
  }

  get playingData(): CurrentPlaying {
    return this.$accessor.player.playingData;
  }

  get track(): CurrentPlayingTrack {
    return this.$accessor.player.track;
  }

  get artwork(): string {
    return this.$accessor.player.artwork;
  }

  get progress(): number {
    return this.$accessor.player.progress;
  }

  get volume(): number {
    return this.$accessor.player.volume;
  }

  get muted(): boolean {
    return this.$accessor.player.muted;
  }

  get listenersCount(): number {
    return this.playingData.listenersCount;
  }

  get isLiveStream(): boolean {
    return this.$accessor.player.playingData.live.isLive;
  }

  @Watch('playing')
  async onPlayingStateChanged(playing: boolean) {
    await this.$nextTick();
    if (playing) {
      this.audio.src = `${this.stream}?t=${Date.now()}`;
      this.audio.load();
      await this.audio.play();
    } else {
      this.audio.pause();
      this.audio.src = '/silence.mp3';
      this.audio.load();
    }
  }

  mounted() {
    this.audio.addEventListener('volumechange', () =>
      this.setVolume(this.audio.volume),
    );
    this.audio.addEventListener('pause', () => (this.playing = false));
    this.audio.addEventListener('play', () => (this.playing = true));
    this.audio.volume = this.volume;
    this.audio.muted = this.muted;
  }

  @Watch('volume')
  onVolumeChanged(volume: number) {
    this.audio.volume = volume;
  }

  @Watch('muted')
  onMutedChanged(muted: boolean) {
    this.audio.muted = muted;
  }

  @Watch('streamId')
  async onStreamIdChanged() {
    if (this.playing) {
      this.playing = false;
      await this.$nextTick();
      this.playing = true;
    }
  }

  play() {
    this.playing = !this.playing;
  }

  async selectStream(id: number) {
    this.$accessor.player.SET_STREAM_ID(this.station.mounts[id].id);
    if (this.playing) {
      this.playing = false;
      await this.$nextTick();
      this.playing = true;
    }
  }

  setVolume(volume: number) {
    this.$accessor.player.SET_VOLUME(volume);
  }

  setMuted() {
    this.$accessor.player.SET_MUTED(!this.muted);
  }
}
</script>

<style lang="stylus" src="./player.styl" />
