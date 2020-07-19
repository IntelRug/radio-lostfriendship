<template>
  <!-- begin .form-error-->
  <div
    class="form-error"
    :class="{
      'form-error_width_full': widthFull,
      'form-error_with_margin': margin,
    }"
  >
    <p v-for="(error, i) of errors" :key="i" class="form-error__text">
      – {{ error }}
    </p>
  </div>
  <!-- end .form-error-->
</template>

<style lang="stylus" src="./form-error.styl" />

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-form-error',
})
export default class FormError extends Vue {
  @Prop({ type: Array, default: () => [] }) errors!: string[];
  @Prop({ type: Boolean }) widthFull!: boolean;
  @Prop({ type: Boolean }) margin!: boolean;
}
</script>
