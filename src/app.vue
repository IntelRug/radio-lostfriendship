<template lang="pug">
  .page__wrapper
    .page__content
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
}
</script>

<style lang="stylus" src="app.styl" />
