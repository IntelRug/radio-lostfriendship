<template>
  <!-- begin .button-->
  <component
    :is="tag"
    class="button"
    :class="{
      button_size_small: small,
      button_size_medium: medium || (!small && !large),
      button_size_large: large,
      button_display_block: block,
      button_width_full: widthFull,
      button_type_active: active,
      button_no_wrap: noWrap,
      button_with_margin: margin,
    }"
    :disabled="disabled"
    :to="to"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
  <!-- end .button-->
</template>

<style lang="stylus" src="./button.styl" />

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-button',
})
export default class Button extends Vue {
  @Prop({ default: 'button', type: String }) tag!: string;
  @Prop({ type: Boolean }) small!: boolean;
  @Prop({ type: Boolean }) medium!: boolean;
  @Prop({ type: Boolean }) large!: boolean;
  @Prop({ type: Boolean }) block!: boolean;
  @Prop({ type: Boolean }) widthFull!: boolean;
  @Prop({ type: Boolean }) active!: boolean;
  @Prop({ type: Boolean }) disabled!: boolean;
  @Prop({ type: Boolean }) noWrap!: boolean;
  @Prop({ type: Boolean }) margin!: boolean;
  @Prop() to!: any;
}
</script>
