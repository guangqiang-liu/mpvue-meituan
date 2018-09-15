<template>
  <div class="container">
    <div class="header">
      <div class="h-l">
        <img src="">
      </div>
      <div class="h-r">
        <div class="r-l">
          <span class="shop-name">演示效果</span>
          <span class="delivery">商家配送 / 分钟送达 / 配送费￥5</span>
          <span class="tip">公告：欢迎光临，用餐高峰请提前下单，谢谢</span>
        </div>
        <div class="r-r">
          <i class="icon qb-icon-down-arrow-s"></i>
        </div>
      </div>
    </div>
    <div class="cate-c">
    </div>
    <div class="list-c">
      <div class="list-l">
        <div class="l-item" v-for="(item, index) in leftList" :key="index">
          <span>热销榜</span>
        </div>
      </div>
      <div class="list-r">
        <div class="section-header">
          <span class="title">热销榜</span>
          <span class="sub-title">这是子标题</span>
        </div>
        <div class="list-item">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftList: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: $page-bgcolor;
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    align-items: center;
    height: 204rpx;
    background-color: orangered;
    .h-l {
      width: 136rpx;
      height: 136rpx;
      border-radius: 8rpx;
      margin-left: 20rpx;
      img {
        width: 136rpx;
        height: 136rpx;
        background-color: aquamarine;
        border-radius: 8rpx;
      }
    }
    .h-r {
      display: flex;
      height: 150rpx;
      justify-content: space-between;
      background-color: orange;
      margin: 20rpx;
      width: 100%;
      .r-l {
        display: flex;
        flex: 1;
        background-color: darkviolet;
        flex-direction: column;
        justify-content: space-around;
        .shop-name {
          color: white;
          font-size: 32rpx;
          font-weight: bold;
        }
        .delivery {
          color: white;
          font-size: 20rpx;
        }
        .tip {
          color: white;
          font-size: 20rpx;
        }
      }
      .r-r {
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          color: white;
          font-size: 32rpx;
        }
      }
    }
  }
  .cate-c {
    display: flex;
    height: 110rpx;
    background-color: darkgoldenrod;
  }
  .list-c {
    display: flex;
    background-color: magenta;
    height: 100%;
    .list-l {
      display: flex;
      flex-direction: column;
      background-color: dodgerblue;
      width: 180rpx;
      .l-item {
        display: flex;
        width: 100%;
        height: 132rpx;
        align-items: center;
        justify-content: center;
        background-color: darksalmon;
        border-bottom: 2rpx solid  $spLine-color;
        span {
          font-size: 32rpx;
          color: $textBlack-color;
        }
      }
    }
    .list-r {
      display: flex;
      flex-direction: column;
      flex: 1;
      background-color: hotpink;
      .section-header {
        display: flex;
        align-items: center;
        background-color: #F5F5F5;
        height: 98rpx;
        .title {
          margin-left: 20rpx;
          font-size: 32rpx;
          color: $textBlack-color;
          font-weight: bold;
        }
        .sub-title {
          margin-left: 20rpx;
          font-size: 24rpx;
          color: $textGray-color;
        }
      }
      .list-item {
        display: flex
      }
    }
  }
}
</style>
