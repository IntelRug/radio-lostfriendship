<template lang="pug">
  include ../../tools/mixins
  // begin .seek-bar
  +b.slider(ref="slider" @mousedown='onMouseDown' @touchstart="onMouseDown" @onmousewheel="")
    +e.box
      +e.bg(ref='bg', :style="{width: valueSynced * 100 + '%'}")
        +e.seeker(ref='seeker', :class="{'seek-bar__seeker_active': pointerDown}")
  // end .seek-bar
</template>

<script lang="ts">
import { Component, Vue, Ref, PropSync } from 'vue-property-decorator';

@Component({
  name: 'slider',
})
export default class Slider extends Vue {
  @PropSync('value', { default: 0 }) valueSynced!: number;
  @Ref() private slider!: HTMLElement;
  @Ref() private bg!: HTMLElement;
  @Ref() private timestamp!: HTMLElement;

  private pointerDown = false;

  mounted() {
    document.addEventListener('mouseup', () => {
      this.pointerDown = false;
    });
    document.addEventListener('touchend', () => {
      this.pointerDown = false;
    });
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('touchmove', this.onMouseMove);
    Slider.onWheel(this.slider, (e: any) => {
      const delta = e.deltaY || e.detail || e.wheelDelta;
      const newValue = this.valueSynced + (delta > 0 ? -0.05 : 0.05);
      if (newValue < 0) {
        this.valueSynced = 0;
      } else if (newValue > 1) {
        this.valueSynced = 1;
      } else {
        this.valueSynced = newValue;
      }
    });
  }

  static getPosition(elem: HTMLElement | null, event: MouseEvent | TouchEvent) {
    if (elem !== undefined && elem !== null && event !== undefined) {
      const prefix = elem.getBoundingClientRect().left;
      let pageX = 0;
      // @ts-ignore
      if (window.TouchEvent && event instanceof TouchEvent) {
        // eslint-disable-next-line prefer-destructuring
        pageX = event.touches[0].pageX;
      } else if (event instanceof MouseEvent) {
        // eslint-disable-next-line prefer-destructuring
        pageX = event.pageX;
      }
      let pointE = (pageX - prefix) / elem.clientWidth;
      if (pointE < 0) {
        pointE = 0;
      } else if (pointE > 1) {
        pointE = 1;
      }
      return pointE;
    }
    return 0;
  }

  onMouseDown(event: MouseEvent | TouchEvent) {
    this.pointerDown = true;
    this.valueSynced = Slider.getPosition(this.bg.parentElement, event);
  }

  onMouseMove(event: MouseEvent | TouchEvent) {
    if (this.pointerDown) {
      this.valueSynced = Slider.getPosition(this.bg.parentElement, event);
    }
  }

  static onWheel(elem: HTMLElement, handler: any) {
    if ('onwheel' in document) {
      // IE9+, FF17+
      elem.addEventListener('wheel', handler);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener('mousewheel', handler);
    } else {
      // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
      elem.addEventListener('MozMousePixelScroll', handler);
    }
  }
}
</script>

<style lang="stylus" src="./slider.styl" />
