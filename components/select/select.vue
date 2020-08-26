<template>
  <!-- begin .select-->
  <div class="select">
    <button
      ref="button"
      class="select__title"
      @focus="focus"
      @blur="blur"
      @mousedown="mousedown"
    >
      {{ title }}
    </button>
    <transition>
      <ul v-show="focused" class="select__list">
        <li
          v-for="(item, i) in items"
          v-show="item !== title"
          :key="i"
          class="select__item"
          @mousedown.prevent="select(i)"
        >
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
  <!-- end .select-->
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-select',
})
export default class Select extends Vue {
  @Prop({ type: Array, default: () => [] }) items!: string[];
  @Prop({ type: [Number, String], default: 0 }) value!: number | string;

  @Ref() button!: HTMLButtonElement;

  focused: boolean = false;

  get index() {
    return typeof this.value === 'string'
      ? parseInt(this.value)
      : this.value || 0;
  }

  get title() {
    return this.items && this.items[this.index]
      ? this.items[this.index]
      : 'EMPTY';
  }

  focus() {
    this.focused = true;
  }

  blur() {
    this.focused = false;
    this.button.blur();
  }

  mousedown(e: MouseEvent) {
    if (!this.focused) return this.button.focus();
    e.preventDefault();
    this.button.blur();
  }

  select(i: number) {
    this.$emit('input', i);
    this.button.blur();
  }
}
</script>

<style lang="stylus" scoped>
.v-enter-active,
.v-leave-active
  transition all .2s

.v-enter,
.v-leave-to
  margin 8px 0
  opacity 0
</style>
<style lang="stylus" src="./select.styl" />
