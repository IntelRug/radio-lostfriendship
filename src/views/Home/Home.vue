<template lang="pug">
  include ../../tools/mixins
  +b.content
    +e.player
      // begin .player
      +b.player
        audio(ref='audio', hidden)
        +e.header
          +e('h1').title
            | Lost Friendship Radio
          +e('span').listeners
            icon(name='person_outline')
            | {{ listeners }}
          +e('a').playlist(href='/playlist/RadioLostFriendship.m3u')
            | M3U
        +e.meta
          +e.meta-title(v-html='title')
          +e.meta-artist(v-html='artist')
          +e.progress(v-if="type !== 'livestream'")
            +e.progress-time
              | {{ progress | toHHMMSS }}
            +e.progress-background
              +e.progress-color(:style="{width: progressInPercents + '%'}")
            +e.progress-time
              | {{ duration | toHHMMSS }}
        +e.controls
          +e('button').play-button(@click='play')
            icon(:name="(isPlaying ? 'pause' : 'play') + '_circle_filled'")
          +e.stream-selection(ref='selection')
            +e('button').dropdown-button(@click='dropdown = !dropdown')
              | {{ source.name }}
            +e('ul').dropdown(:class="{'player__dropdown_active': dropdown}")
              +e('li').dropdown-item(v-for='(stream) of streams.filter(s => s.name !== source.name)', :key='stream.id', @click='selectStream(stream.id)')
                | {{ stream.name }}
          +e.volume
            icon(name='volume_mute')
            +e.volume-slider
              seek-bar(:value='volume', @update:value='setVolume')
            icon(name='volume_up')
        // end .player
    +e.chat
      +e('a').open-link(href='https://lfradio.chatovod.ru', target='_blank')
        icon(name='open_in_new')
      iframe(src='https://lfradio.chatovod.ru/')
    +e.ad
      ad
</template>

<script lang="ts">
import {
  Component, Ref, Vue, Watch,
} from 'vue-property-decorator';
import axios from 'axios';
import moment from 'moment-timezone';
import Cookies from 'js-cookie';
import ILiveInfo from '@/types/ILiveInfo';
import SeekBar from '@/components/SeekBar/SeekBar.vue';
import Ad from '@/components/Ad/Ad.vue';
import IIcecastStats from '@/types/IcecastStats';
import Icon from '@/components/Icon/Icon.vue';

@Component({
  components: {
    Icon, Ad, SeekBar,
  },
  filters: {
    toHHMMSS(time: string | number) {
      const secs = parseFloat(String(time));
      const hours: number = Math.floor(secs / (60 * 60));
      let minutes: number | string = Math.floor((secs - (hours * 60 * 60)) / 60);
      let seconds: number | string = Math.floor(secs - (minutes * 60) - (hours * 60 * 60));

      if (seconds < 10) { seconds = `0${seconds}`; }
      if (hours && minutes < 10) { minutes = `0${minutes}`; }
      return `${hours ? `${hours}:` : ''}${minutes}:${seconds}`;
    },
  },
})
export default class Home extends Vue {
  private liveInfo: ILiveInfo | null = null;
  private icecastStats: IIcecastStats | null = null;
  private now: number = 0;
  private getLiveInfoInterval!: number;
  private nowInterval!: number;
  private isPlaying: boolean = false;
  private streams: {id: number, name: string, url: string, offset: number}[] = [
    {
      id: 1,
      name: '320 KBIT/S MP3',
      url: 'https://radio.lostfriendship.net/320',
      offset: 10,
    },
    {
      id: 2,
      name: '128 KBIT/S MP3',
      url: 'https://radio.lostfriendship.net/128',
      offset: 10,
    },
    {
      id: 3,
      name: '64 KBIT/S OGG',
      url: 'https://radio.lostfriendship.net/64',
      offset: 5,
    },
  ];
  private selectedStreamId: number = 1;
  private dropdown: boolean = false;
  private volume: number = 0.5;

  @Ref() audio!: HTMLAudioElement;
  @Ref() selection!: HTMLDivElement;

  @Watch('track')
  ontrackChanged() {
    setTimeout(() => {
      this.getMetadata();
    }, 5 * 1000);
  }

  @Watch('isPlaying')
  async onPlayingStateChanged(val: boolean) {
    await this.$nextTick();
    if (val) {
      this.audio.src = `${this.source.url}?t=${Date.now()}`;
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.audio.src = '/silence.mp3';
      this.audio.load();
    }
  }

  @Watch('volume')
  async onVolumeChanged(val: number) {
    this.audio.volume = val;
    Cookies.set('volume', String(val), { expires: 3650 });
  }

  get track() {
    if (this.liveInfo) {
      if (this.liveInfo.current.endsAt - this.now <= -this.source.offset) {
        return 'next';
      }
      if (this.liveInfo.current.startsAt - this.now > -this.source.offset) {
        return 'previous';
      }
    }
    return 'current';
  }

  get type() {
    if (this.liveInfo) {
      return this.liveInfo[this.track].type;
    }
    return 'track';
  }

  get title() {
    if (this.liveInfo) {
      if (this.type === 'livestream' && this.icecastStats && this.icecastStats.source && this.icecastStats.source) {
        return this.icecastStats.source![0].title.split('-')[1];
        // return this.liveInfo[this.track].name.split('-')[0];
      }
      return this.liveInfo[this.track].metadata.track_title || 'Unknown title';
    }
    return 'Unknown title';
  }

  get artist() {
    if (this.liveInfo) {
      if (this.type === 'livestream' && this.icecastStats && this.icecastStats.source && this.icecastStats.source) {
        return this.icecastStats.source![0].title.split('-')[0];
        // return 'LiveStream';
      }
      return this.liveInfo[this.track].metadata.artist_name || 'Unknown artist';
    }
    return 'Unknown artist';
  }

  get duration() {
    if (this.liveInfo) {
      return this.liveInfo[this.track].endsAt - this.liveInfo[this.track].startsAt || 0;
    }
    return 0;
  }

  get progress() {
    if (this.liveInfo) {
      const progress: number = (this.now - this.liveInfo[this.track].startsAt) - this.source.offset;
      if (progress < 0) {
        return 0;
      }
      if (progress >= this.duration) {
        return this.duration;
      }
      return progress || 0;
    }
    return 0;
  }

  get progressInPercents() {
    return 100 / this.duration * this.progress;
  }

  get source() {
    return this.streams.find(s => s.id === this.selectedStreamId)!;
  }

  get listeners() {
    if (this.icecastStats && Array.isArray(this.icecastStats.source)) {
      return this.icecastStats.source.reduce((acc, { listeners }) => (acc + (listeners || 0)), 0);
    }
    return 0;
  }

  created() {
    this.getMetadata();
    this.getLiveInfoInterval = setInterval(this.getMetadata, 10000);
    this.nowInterval = setInterval(() => { this.now = Math.floor(Date.now() / 1000); }, 500);
  }

  mounted() {
    document.onclick = (e: any) => {
      if (!this.selection.contains(e.target)) {
        this.dropdown = false;
      }
    };
    this.audio.volume = this.volume;
    this.audio.onpause = () => { this.isPlaying = false; };
    this.audio.onplay = () => { this.isPlaying = true; };
    this.getCookies();
  }

  beforeDestroy() {
    clearInterval(this.getLiveInfoInterval);
    clearInterval(this.nowInterval);
  }

  getCookies() {
    this.volume = parseFloat(Cookies.get('volume') || '0.5');
    this.selectedStreamId = parseInt(Cookies.get('stream_id') || '1', 10);
  }

  async getMetadata() {
    try {
      const response = await axios.get('https://radio.lostfriendship.net/live-info');
      const response2 = await axios.get('https://radio.lostfriendship.net/icecast-stats');
      this.liveInfo = response.data;
      this.icecastStats = response2.data ? response2.data.icestats : null;
      if (this.liveInfo) {
        const zone = 'Europe/London';
        this.liveInfo.previous.startsAt = moment.tz(this.liveInfo.previous.starts, 'YYYY-MM-DD HH-mm-ss', zone).unix();
        this.liveInfo.current.startsAt = moment.tz(this.liveInfo.current.starts, 'YYYY-MM-DD HH-mm-ss', zone).unix();
        this.liveInfo.next.startsAt = moment.tz(this.liveInfo.next.starts, 'YYYY-MM-DD HH-mm-ss', zone).unix();
        this.liveInfo.previous.endsAt = moment.tz(this.liveInfo.previous.ends, 'YYYY-MM-DD HH-mm-ss', zone).unix();
        this.liveInfo.current.endsAt = moment.tz(this.liveInfo.current.ends, 'YYYY-MM-DD HH-mm-ss', zone).unix();
        this.liveInfo.next.endsAt = moment.tz(this.liveInfo.next.ends, 'YYYY-MM-DD HH-mm-ss', zone).unix();
        if (this.liveInfo.previous.type === 'track') {
          this.liveInfo.previous.metadata.seconds = moment.duration(this.liveInfo.previous.metadata.length).asSeconds();
        }
        if (this.liveInfo.current.type === 'track') {
          this.liveInfo.current.metadata.seconds = moment.duration(this.liveInfo.current.metadata.length).asSeconds();
        }
        if (this.liveInfo.next.type === 'track') {
          this.liveInfo.next.metadata.seconds = moment.duration(this.liveInfo.next.metadata.length).asSeconds();
        }
      }
      // eslint-disable-next-line no-empty
    } catch (e) { }
  }

  play() {
    this.isPlaying = !this.isPlaying;
  }

  async selectStream(id: number) {
    this.selectedStreamId = id;
    Cookies.set('stream_id', String(id), { expires: 3650 });
    this.dropdown = false;
    if (this.isPlaying) {
      this.isPlaying = false;
      await this.$nextTick();
      await this.$nextTick();
      this.isPlaying = true;
    }
  }

  setVolume(value: number) {
    this.volume = value;
  }
}
</script>
<style lang="stylus" src="./Home.styl" />
