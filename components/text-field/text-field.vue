<template>
  <!-- begin .text-field-->
  <label
    :for="id"
    class="text-field"
    :class="{
      'text-field_type_active': active,
      'text-field_width_full': widthFull,
      'text-field_with_margin': margin,
      'text-field_with_icon': icon,
    }"
  >
    <input
      :id="id"
      ref="input"
      :value="value"
      :type="type"
      class="text-field__input"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @keydown="$emit('keydown', $event)"
      @keyup="$emit('keyup', $event)"
      @keypress="$emit('keypress', $event)"
    />
    <svg-icon v-if="icon" class="text-field__icon" :name="icon" />
  </label>
  <!-- end .text-field-->
</template>

<style lang="stylus" src="./text-field.styl" />

<script lang="ts">
import { Component, Prop, Vue, Ref } from 'nuxt-property-decorator';

@Component({
  name: 'b-text-field',
})
export default class TextField extends Vue {
  @Prop({ type: String, required: true }) id!: string;
  @Prop({ type: String, default: 'text' }) type!: string;
  @Prop({ type: String }) placeholder!: string;
  @Prop({ type: String }) value!: string;
  @Prop({ type: Boolean }) active!: boolean;
  @Prop({ type: Boolean }) disabled!: boolean;
  @Prop({ type: Boolean }) widthFull!: boolean;
  @Prop({ type: String }) icon!: string;
  @Prop({ type: Boolean }) margin!: boolean;

  @Ref() input!: HTMLInputElement;

  focus() {
    this.input.focus();
  }
}
</script>
