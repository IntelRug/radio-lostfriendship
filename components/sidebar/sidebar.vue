<template>
  <!-- begin .sidebar-->
  <div class="sidebar">
    <router-link
      v-for="(item, i) of items"
      :key="i"
      :to="item.href"
      class="sidebar__item sidebar__item_type_disabled"
    >
      <svg-icon :name="item.icon" class="sidebar__item-icon" />
      <span class="sidebar__item-text">{{ item.text }}</span>
    </router-link>
  </div>
  <!-- end .sidebar-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-sidebar',
})
export default class Sidebar extends Vue {
  items = [
    {
      href: '/',
      icon: 'home_outlined',
      text: 'Home',
    },
    {
      href: '/geo',
      icon: 'explore_outlined',
      text: 'Geo',
    },
    {
      href: '/charts',
      icon: 'insert_chart_outlined',
      text: 'Charts',
    },
    {
      href: '/playlist',
      icon: 'playlist_play',
      text: 'Playlist',
    },
  ];
}
</script>

<style lang="stylus" src="./sidebar.styl" />
