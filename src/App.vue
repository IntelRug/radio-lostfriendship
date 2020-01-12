<template>
  <div class="page__wrapper">
    <div class="page__content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {

}
</script>

<style lang="stylus" src="./App.styl" />
