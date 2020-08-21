<template>
  <!-- begin .player-buttons-->
  <div class="player-buttons">
    <div class="player-buttons__buttons-container">
      <router-link
        v-for="(button, i) in buttons"
        :key="i"
        class="player-buttons__button"
        :to="button.href"
      >
        {{ button.title }}
      </router-link>
    </div>
    <div class="player-buttons__links-container">
      <a
        v-for="(link, i) in links"
        :key="i"
        :href="link.href"
        class="player-buttons__link"
        :title="link.title"
      >
        <svg-icon :name="link.icon" />
      </a>
    </div>
  </div>
  <!-- end .player-buttons-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-player-buttons',
})
export default class PlayerButtons extends Vue {
  buttons = [
    { title: 'История', href: '#' },
    { title: 'Открыть чат', href: '#' },
    { title: 'Записи', href: '#' },
  ];
  links = [
    { title: 'Discord', icon: 'discord', href: '#' },
    { title: 'VK', icon: 'vk', href: '#' },
    { title: 'YouTube', icon: 'youtube', href: '#' },
  ];
}
</script>

<style lang="stylus" src="./player-buttons.styl" />
