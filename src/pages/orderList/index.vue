<template>
  <div class="container">
    <div class="list-c">
      <div class="item" v-for="(item, index) in orderList" :key="index">
        <div class="shop-info" @click="headerClick">
          <img :src="item.poi_pic">
          <span class="shop-name">{{item.poi_name}}</span>
          <i class="icon mt-arrow-right-o"></i>
          <span class="order-status">{{item.status_description}}</span>
        </div>
        <div class="googs-c" @click="orderDetail">
          <div class="goods" v-for="(itx, idx) in item.product_list" :key="idx">
            <span class="s-l">{{itx.product_name}}</span>
            <span class="s-r">x{{itx.product_count}}</span>
          </div>
        </div>
        <div class="price">
          <span class="count">共{{item.product_list.length}}件商品，实付</span>
          <span class="amount">￥{{item.total}}</span>
        </div>
        <div class="bottom-c" @click="headerClick">
          <div class="btn">
            <span>再来一单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {orderList} from './data'

export default {
  data() {
    return {
      orderList: [],
    }
  },
  methods: {
    headerClick() {
      wx.navigateTo({url: '/pages/shoppingCart/main'})
    },
    orderDetail() {
      wx.navigateTo({url: '/pages/orderDetail/main'})
    }
  },
  mounted() {
    this.orderList = orderList.data.digestlist
  }
}
</script>

<style lang="scss" scoped>
.container {
  .list-c {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      flex-direction: column;
      background-color: white;
      margin-top: 20rpx;
      .shop-info {
        display: flex;
        height: 120rpx;
        background-color: white;
        align-items: center;
        border-bottom: 2rpx solid $spLine-color;
        margin-left: 30rpx;
        margin-bottom: 10rpx;
        img {
          width: 80rpx;
          height: 80rpx;
        }
        .shop-name {
          font-size: 32rpx;
          color: $textBlack-color;
          margin-left: 10rpx;
          font-weight: bold;
        }
        i {
          font-size: 28rpx;
          color: $textGray-color;
          margin-left: 10rpx;
          flex: 1;
        }
        .order-status {
          font-size: 28rpx;
          color: $textDarkGray-color;
          display: flex;
          margin-right: 20rpx;
        }
      }
      .googs-c {
        display: flex;
        background-color: white;
        flex-direction: column;
        .goods {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-left: 120rpx;
          margin-right: 20rpx;
          .s-l {
            font-size: 28rpx;
            color: $textDarkGray-color;
            padding: 10rpx 0;
          }
          .s-r {
            font-size: 24rpx;
            color: $textBlack-color;
          }
        }
      }
      .price {
        display: flex;
        margin: 20rpx;
        justify-content: flex-end;
        .count {
          font-size: 24rpx;
          color: $textDarkGray-color;
        }
        .amount {
          font-size: 24rpx;
          color: $textBlack-color;
          font-weight: bold;
        }
      }
      .bottom-c {
        display: flex;
        margin-left: 30rpx;
        border-top: 2rpx solid $spLine-color;
        align-items: center;
        background-color: white;
        justify-content: flex-end;
        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2rpx solid $spLine-color;
          margin: 20rpx;
          border-radius: 4rpx;
          span {
            font-size: 28rpx;
            color: $textBlack-color;
            margin: 16rpx 24rpx;
          }
        }
      }
    }
  }
}
</style>
