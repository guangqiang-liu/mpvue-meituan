<template>
  <div class="container">
    <div class="list-c">
      <div class="item" v-for="(item, index) in itemList" :key=index>
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
        </div>
        <img class="status-im" src="http://ovyjkveav.bkt.clouddn.com/18-9-26/49925456.jpg">
      </div>
    </div>
    <div class="bottom">
      <span class="s-l">没有更多过期商家代金券了</span>
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
    this.itemList = dataList.data.poi_coupon_info_list.reverse()
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
      position: relative;
      .item-t {
        display: flex;
        margin: 20rpx;
        img {
          width: 100rpx;
          height: 100rpx;
          border: 2rpx solid $textDarkGray-color;
        }
        .top-m {
          display: flex;
          flex-direction: column;
          margin-left: 20rpx;
          flex: 1;
          .s-t {
            font-size: 28rpx;
            color: $textDarkGray-color;
          }
          .s-m {
            font-size: 20rpx;
            color: $textDarkGray-color;
            border: 2rpx solid $textGray-color;
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
            color: $textDarkGray-color;
            span {
              font-size: 60rpx;
              color: $textDarkGray-color;
            }
          }
          .s-b {
            font-size: 20rpx;
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
      }
      .status-im {
        position: absolute;
        right: 30rpx;
        top: 80rpx;
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
    .s-l {
      font-size: 20rpx;
      color: $textBlack-color;
    }
  }
}
</style>
