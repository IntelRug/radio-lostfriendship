<template>
  <div class="page__main">
    <div class="page__header" />
    <div class="page__content">
      <div class="content">
        <div class="grid__container">
          <div class="grid__group">
            <div class="grid__col grid__col_size_12">
              <nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page__player">
      <b-player />
    </div>
  </div>
</template>
<script lang="ts">
import '~/assets/stylus/normalize.styl';
import '~/assets/stylus/grid.styl';
import '~/assets/stylus/global.styl';
import '~/assets/stylus/colors.styl';
import { Component, Vue } from 'nuxt-property-decorator';
import BPlayer from '~/components/player/player.vue';
@Component({
  components: { BPlayer },
})
export default class Default extends Vue {}
</script>
<style lang="stylus" src="./default.styl" />
