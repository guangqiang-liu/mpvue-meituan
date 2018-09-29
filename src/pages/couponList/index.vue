<template>
  <div class="container">
    <div class="list-c">
      <div class="item" v-for="(item, index) in couponList" :key=index @click="itemClick">
        <div class="item-t">
          <img class="top-l" :src="item.poi_url">
          <div class="top-m">
            <span class="s-t">{{item.title}}</span>
            <span class="s-m">互斥券</span>
            <span class="s-b">{{item.valid_time_desc}}</span>
          </div>
          <div class="top-r">
            <span class="s-t">￥<span>{{item.money}}</span></span>
            <span class="s-b">{{item.price_limit}}</span>
          </div>
        </div>
        <div class="item-m">
          <sep-line></sep-line> 
        </div>
        <div class="item-b">
          <span class="b-l">{{item.use_rule}}</span>
          <div class="b-r">
            <span>去使用</span>
            <i class="icon mt-arrow-right-o"></i>
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
import {couponList} from './data'

export default {
  data() {
    return {
      couponList: []
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
    },
    itemClick() {
      wx.navigateTo({url: '/pages/shoppingCart/main'})
    }
  },
  mounted() {
    this.couponList = couponList.data.poi_coupon_info_list
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
            font-size: 20rpx;
            color: #50B8AC;
            border: 2rpx solid #50B8AC;
            width: 80rpx;
            text-align: center;
            margin: 10rpx 0;
          }
          .s-b {
            font-size: 20rpx;
            color: $textDarkGray-color;
          }
        }
        .top-r {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          margin-right: 20rpx;
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
        display: flex;
        margin: 20rpx;
        align-items: center;
        .b-l {
          font-size: 20rpx;
          color: $textDarkGray-color;
          flex: 1;
        }
        .b-r {
          display: flex;
          margin-left: 40rpx;
          span {
            font-size: 20rpx;
            color: $mtRed-color;
          }
          i {
            font-size: 24rpx;
            color: $mtRed-color;
            margin-left: 10rpx;
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
