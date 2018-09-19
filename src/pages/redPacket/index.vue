<template>
  <div class="container">
    <div class="list-c">
      <div class="item" v-for="(item, index) in itemList" :key="index">
        <div class="item-t">
          <div class="t-l">
            <span class="s-t">狂欢月专属红包</span>
            <span class="s-b">有效期至2018.09.19</span>
          </div>
          <div class="t-r">
            <span class="s-t">￥<span>4</span></span>
            <span class="s-b">满20可用</span>
          </div>
        </div>
        <div class="item-m">
          <sep-line></sep-line> 
        </div>
        <span class="item-b">限仅限外卖狂欢月部分指定商品可用，微信小程序，非到店自取</span>
      </div>
    </div>
    <div class="bottom" @click="expiredClick">
      <span class="s-l">没有更多有效券了</span>
      <span class="s-m">|</span>
      <span class="s-r">查看无效券</span>
      <span class="s-arrow">>></span>
    </div>
  </div>
</template>

<script>
import sepLine from "@/components/sep-line";

export default {
  data() {
    return {
      itemList: [1, 2, 3, 4]
    }
  },
   computed: {
    
  },
  components: {
    sepLine
  },
  methods: {
    expiredClick() {
      wx.navigateTo({url: '/pages/expiredRedPacket/main'})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .list-c {
    display: flex;
    flex-direction: column;
    background-color: $page-bgcolor;
    .item {
      display: flex;
      height: 250rpx;
      background-color: white;
      margin: 0 30rpx;
      flex-direction: column;
      margin-top: 20rpx;
      border-radius: 8rpx;
      .item-t {
        display: flex;
        margin: 0 40rpx;
        .t-l {
          display: flex;
          flex-direction: column;
          background-color: white;
          margin-top: 30rpx;
          flex: 1;
          .s-t {
            font-size: 38rpx;
            color: #F43C3F;
          }
          .s-b {
            font-size: 28rpx;
            color: $textBlack-color;
            margin-top: 10rpx;
          }
        }
        .t-r {
          display: flex;
          flex-direction: column;
          background-color: white;
          margin-top: 10rpx;
          .s-t {
            font-size: 32rpx;
            color: #F43C3F;
            span {
              font-size: 60rpx;
              color: #F43C3F;
            }
          }
          .s-b {
            font-size: 28rpx;
            color: $textBlack-color;;
          }
        }
      }
      .item-m {
        display: flex;
        width: 100%;
      }
      .item-b {
        font-size: 20rpx;
        color: $textGray-color;
        margin: 20rpx 40rpx;
        height: 30rpx;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
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
    .s-m {
      font-size: 24rpx;
      color: $textDarkGray-color;
      margin: 0 20rpx;
    }
    .s-r {
      font-size: 24rpx;
      color: $textBlack-color;
    }
    .s-arrow {
      font-size: 24rpx;
      color: $textDarkGray-color;
      margin-left: 20rpx;
    }
  }
}
</style>
