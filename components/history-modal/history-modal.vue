<template>
  <!-- begin .history-modal-->
  <div class="history-modal">
    <ul class="history-modal__list">
      <li
        v-for="(track, i) in tracks"
        :key="i"
        class="history-modal__item"
        :title="`${track.artist_name} – ${track.track_title}`"
      >
        {{ i + 1 }}. {{ track.artist_name }} –
        {{ track.track_title }}
      </li>
    </ul>
  </div>
  <!-- end .history-modal-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { TracksHistoryItem } from '~/graphql/schema';

@Component({
  name: 'b-history-modal',
})
export default class HistoryModal extends Vue {
  get tracks(): TracksHistoryItem[] {
    return this.$accessor.player.tracksHistory || [];
  }
}
</script>

<style lang="stylus" src="./history-modal.styl" />
