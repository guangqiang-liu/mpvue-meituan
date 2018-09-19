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
          <div class="b-r">
            <span>去使用</span>
            <i class="icon qb-icon-down-arrow-s"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom" @click="expiredClick">
      <span class="s-l">没有更多商家代金券了</span>
      <span class="s-m">|</span>
      <span class="s-r">查看过期券</span>
      <span class="s-arrow">>></span>
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
  methods: {
    expiredClick() {
      wx.navigateTo({url: '/pages/expiredCoupon/main'})
    }
  }
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
            color: $textBlack-color;
          }
          .s-m {
            font-size: 24rpx;
            color: #50B8AC;
            padding: 6rpx 10rpx;
            border: 2rpx solid #50B8AC;
            width: 100rpx;
            text-align: center;
            margin: 10rpx 0;
          }
          .s-b {
            font-size: 24rpx;
            color: $textDarkGray-color;
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
            color: #E14130;
            span {
              font-size: 76rpx;
              color: #E14130;
            }
          }
          .s-b {
            font-size: 24rpx;
            color: $textDarkGray-color;
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
          color: $textDarkGray-color;
          flex: 1;
        }
        .b-r {
          display: flex;
          margin-left: 40rpx;
          span {
            font-size: 24rpx;
            color: #F54748;
          }
          i {
            font-size: 24rpx;
            color: #F54748;
            margin-left: 20rpx;
          }
        }
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
