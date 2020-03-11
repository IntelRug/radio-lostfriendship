<template lang="pug">
  include ../../tools/mixins
  // begin .chat
  +b.chat
    +e('a').link(:href='link', target='_blank')
      icon(name='open_in_new')
    +e('iframe').iframe(:src='link')
  // end .chat
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/icon/icon.vue';
@Component({
  components: { Icon },
})
export default class Chat extends Vue {
  link = 'https://lfradio.chatovod.ru/';
}
</script>

<style lang="stylus" src="./chat.styl" />
