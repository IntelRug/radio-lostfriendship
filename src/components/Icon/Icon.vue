<template>
  <svg
    :class="className"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title v-if="title">{{ title }}</title>
    <use
      :xlink:href="iconPath"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

  @Component({
    name: 'Icon',
  })
export default class Icon extends Vue {
    @Prop({ type: String, required: true }) name!: string;
    @Prop({ type: String, default: null }) title!: string;

    get iconPath() {
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }
      return icon.url;
    }

    get className() {
      return `icon icon_${this.name}`;
    }
}
</script>
