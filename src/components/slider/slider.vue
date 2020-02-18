<template lang="pug">
  include ../../tools/mixins
  // begin .seek-bar
  +b.slider(@mousedown='onMouseDown')
    +e.box
      +e.bg(ref='bg', :style="{width: valueSynced * 100 + '%'}")
        +e.seeker(ref='seeker', :class="{'seek-bar__seeker_active': pointerDown}")
  // end .seek-bar
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Ref,
  PropSync,
} from 'vue-property-decorator';


@Component({
  name: 'slider',
})
export default class Slider extends Vue {
  @PropSync('value', { default: 0 }) valueSynced!: number;
  @Ref() private bg!: HTMLElement;
  @Ref() private timestamp!: HTMLElement;

  private pointerDown: boolean = false;

  mounted() {
    document.addEventListener('mouseup', () => {
      this.pointerDown = false;
    });
    document.addEventListener('mousemove', (event) => {
      this.onMouseMove(event);
    });
  }

  static getPosition(elem: HTMLElement | null, event: MouseEvent) {
    if (elem !== undefined && elem !== null && event !== undefined) {
      const prefix = elem.getBoundingClientRect().left;
      let pointE = (((event.pageX - prefix) / elem.clientWidth));
      if (pointE < 0) {
        pointE = 0;
      } else if (pointE > 1) {
        pointE = 1;
      }
      return pointE;
    }
    return 0;
  }

  onMouseDown(event: MouseEvent) {
    this.pointerDown = true;
    this.valueSynced = Slider.getPosition(this.bg.parentElement, event);
  }

  onMouseMove(event: MouseEvent) {
    if (this.pointerDown) {
      this.valueSynced = Slider.getPosition(this.bg.parentElement, event);
    }
  }
}

</script>
<style lang="stylus" src="./slider.styl" />
