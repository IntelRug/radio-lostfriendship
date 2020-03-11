<template lang="pug">
  include ../../tools/mixins
  +content('_page_admin')
    +e.listeners
      stats-listeners
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/components/content/content.styl';
import StatsListeners from '@/components/listeners/listeners.vue';

@Component({
  components: {
    StatsListeners,
  },
})
export default class Admin extends Vue {}
</script>

<!-- <style lang="stylus" src="./admin.styl" /> -->
