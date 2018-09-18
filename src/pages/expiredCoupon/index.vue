<template>
  <div class="container">
    <div class="list-c">
      <div class="item" v-for="(item, index) in itemList" :key=index>
        <div class="item-t">
          <img class="top-l" src="" alt="">
          <div class="top-m">
            <span class="s-t">麻辣无双 (东兰路店)</span>
            <span class="s-m">互斥券</span>
            <span class="s-b">有效期至2018.09.01</span>
          </div>
          <div class="top-r">
            <span class="s-t">￥<span>32</span></span>
            <span class="s-b">满45可用</span>
          </div>
        </div>
        <div class="item-m">
          <sep-line></sep-line> 
        </div>
        <div class="item-b">
          <span class="b-l">不可与满减、折扣商品、第二份半价活动优惠同时享受。在线支付专享。</span>
        </div>
        <img class="status-im" src="" alt="">
      </div>
    </div>
    <div class="bottom">
      <span class="s-l">没有更多过期商家代金券了</span>
    </div>
  </div>
</template>

<script>
import sepLine from "@/components/sep-line";

export default {
  data() {
    return {
      itemList: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    
  },
  components: {
    sepLine
  },
}
</script>

<style lang="scss" scoped>
.container {
  .list-c {
    display: flex;
    flex-direction: column;
    background-color:  $page-bgcolor;
    .item {
      display: flex;
      flex-direction: column;
      margin: 0 30rpx;
      margin-top: 30rpx;
      background-color: white;
      border-radius: 10rpx;
      opacity: 0.6;
      position: relative;
      .item-t {
        display: flex;
        margin: 20rpx;
        img {
          width: 140rpx;
          height: 140rpx;
          background-color: aquamarine;
        }
        .top-m {
          display: flex;
          flex-direction: column;
          margin-left: 20rpx;
          flex: 1;
          .s-t {
            font-size: 32rpx;
            color: $textGray-color;
          }
          .s-m {
            font-size: 24rpx;
            color: $textGray-color;
            padding: 6rpx 10rpx;
            border: 2rpx solid $textGray-color;
            width: 100rpx;
            text-align: center;
            margin: 10rpx 0;
          }
          .s-b {
            font-size: 24rpx;
            color: $textGray-color;
          }
        }
        .top-r {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin-right: 20rpx;
          .s-t {
            font-size: 32rpx;
            color: $textGray-color;
            span {
              font-size: 76rpx;
              color: $textGray-color;
            }
          }
          .s-b {
            font-size: 24rpx;
            color: $textGray-color;
          }
        }
      }
      .item-m {
        display: flex;
        width: 100%;
      }
      .item-b {
        display: flex;
        margin: 20rpx;
        align-items: center;
        .b-l {
          font-size: 24rpx;
          color: $textGray-color;
          flex: 1;
        }
      }
      .status-im {
        position: absolute;
        right: 30rpx;
        top: 80rpx;
        width: 120rpx;
        height: 120rpx;
        background-color: aquamarine;
        border-radius: 60rpx;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    margin: 40rpx;
    justify-content: center;
    .s-l {
      font-size: 24rpx;
      color: $textBlack-color;
    }
  }
}
</style>
