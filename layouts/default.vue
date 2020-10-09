<template>
  <div class="page__wrapper">
    <div class="page__header" />

    <div class="page__main">
      <!--      <div class="page__sidebar">-->
      <!--        <b-sidebar />-->
      <!--      </div>-->
      <div class="page__content">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import '~/assets/stylus/normalize.styl';
import '~/assets/stylus/grid.styl';
import '~/assets/stylus/global.styl';
import '~/assets/stylus/colors.styl';
import 'leaflet/dist/leaflet.css';
import { Component, Vue } from 'nuxt-property-decorator';
import BPlayer from '~/components/player/player.vue';
import BSidebar from '~/components/sidebar/sidebar.vue';

@Component({
  head() {
    return {
      title: this.$accessor.player.station.name || 'Radio',
    };
  },
  components: { BSidebar, BPlayer },
})
export default class Default extends Vue {}
</script>
<style lang="stylus" src="./default.styl" />
