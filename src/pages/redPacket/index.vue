<template>
  <div class="container">
    <div class="list-c">
      <div class="item" v-for="(item, index) in itemList" :key="index">
        <div class="item-t">
          <div class="t-l">
            <span class="s-t">{{item.title}}</span>
            <span class="s-b">{{item.valid_time_desc}}</span>
          </div>
          <div class="t-r">
            <span class="s-t">￥<span>{{item.amount}}</span></span>
            <span class="s-b">{{item.price_limit}}</span>
          </div>
        </div>
        <div class="item-m">
          <sep-line></sep-line> 
        </div>
        <span class="item-b">{{item.use_limits}}</span>
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
import {redPacket} from './data'

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
  },
  mounted() {
    this.itemList = redPacket.data.coupon_list
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
            color: $mtRed-color;
          }
          .s-b {
            font-size: 24rpx;
            color: $textDarkGray-color;
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
            color: $mtRed-color;
            span {
              font-size: 60rpx;
              color: $mtRed-color;
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
