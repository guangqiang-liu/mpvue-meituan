<template>
  <div class="line-c" :style="containerStyle">
    <div class="l" :style="semicircleStyle"></div>
    <div class="line" :style="lineStyle"></div>
    <div class="r" :style="semicircleStyle"></div>
  </div>
</template>

<script>
import { jointStyle } from "@/utils/style";

export default {
  name: "sep-line",
  props: {
    semicircleColor: {
      type: String,
      default: '#F9F9F9'
    },
    lineColor: {
      type: String,
      default: '#EAEAEA'
    },
    marginTop: {
      type: String,
      default: '12rpx'
    }
  },
  computed: {
    semicircleStyle() {
      let style = {};
      style["background-color"] = this.semicircleColor
      return jointStyle(style);
    },
    lineStyle() {
      let style = {};
      style["border-top"] = `2rpx dashed ${this.lineColor}`
      return jointStyle(style);
    },
    containerStyle() {
      let style = {};
      style["margin-top"] = this.marginTop
      return jointStyle(style);
    }
  }
};
</script>

<style lang="scss" scoped>

.line-c {
  display: flex;
  align-items: center;
  height: 40rpx;
  background-color: white;
  justify-content: space-between;
  width: 100%;
  .l {
    width: 20rpx;
    height: 40rpx;
    border-radius: 0 20rpx 20rpx 0;
  }
  .line {
    flex: 1;
    height: 2rpx;
    margin: 0 12rpx;
  }
  .r {
    width: 20rpx;
    height: 40rpx;
    border-radius: 20rpx 0 0 20rpx;
  }
}
</style>