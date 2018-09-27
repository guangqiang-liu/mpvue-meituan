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
        <img class="status" src="http://ovyjkveav.bkt.clouddn.com/18-9-25/44107642.jpg">
      </div>
    </div>
    <div class="bottom">
      <span class="s-l">没有更多无效红包了</span>
    </div>
  </div>
</template>

<script>
import sepLine from "@/components/sep-line";
import {dataList} from './data'

export default {
  data() {
    return {
      itemList: []
    }
  },
   computed: {
    
  },
  components: {
    sepLine
  },
  mounted() {
    this.itemList = dataList.data.coupon_list
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
      position: relative;
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
            color: $textGray-color;
          }
          .s-b {
            font-size: 24rpx;
            color: $textGray-color;
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
            color: $textGray-color;
            span {
              font-size: 60rpx;
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
        font-size: 20rpx;
        color: $textDarkGray-color;
        margin: 20rpx 40rpx;
        height: 30rpx;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .status {
        position: absolute;
        bottom: 50rpx;
        right: 40rpx;
        width: 120rpx;
        height: 120rpx;
        border-radius: 60rpx;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    margin: 40rpx;
    justify-content: center;
    span {
      font-size: 24rpx;
      color: $textBlack-color;
    }
  }
}
</style>
