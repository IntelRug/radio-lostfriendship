<template>
  <!-- begin .chat-->
  <div class="chat">
    <a :href="link" class="chat__link">
      <svg-icon name="open_in_new" />
    </a>
    <iframe class="chat__iframe" :src="link" frameborder="0" />
  </div>
  <!-- end .chat-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-chat',
})
export default class Chat extends Vue {
  link: string = 'https://lfradio.chatovod.ru';
}
</script>

<style lang="stylus" src="./chat.styl" />
