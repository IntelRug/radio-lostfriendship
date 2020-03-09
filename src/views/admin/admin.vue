<template lang="pug">
  include ../../tools/mixins
  +content
    +e.map
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/components/content/content.styl';

@Component({})
export default class Home extends Vue {}
</script>

<style lang="stylus" src="./home.styl" />
