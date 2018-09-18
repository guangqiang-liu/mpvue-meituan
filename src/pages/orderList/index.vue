<template>
  <div class="container">
    <div class="list-c">
      <div class="item" v-for="(item, index) in itemList" :key="index">
        <div class="shop-info">
          <img src="" alt="">
          <span class="shop-name">正新汉堡.炸鸡(古美路店)</span>
          <i class="icon qb-icon-down-arrow-s"></i>
          <span class="order-status">订单完成</span>
        </div>
        <div class="googs-c">
          <div class="goods" v-for="(itx, idx) in goodsList" :key="idx">
            <span class="s-l">可乐(大杯)</span>
            <span class="s-r">x2</span>
          </div>
        </div>
        <div class="price">
          <span class="count">共3件商品，实付</span>
          <span class="amount">￥20.8</span>
        </div>
        <div class="bottom-c">
          <div class="btn">
            <span>再来一单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      goodsList: [1, 2, 3]
    }
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
          background-color: magenta;
        }
        .shop-name {
          font-size: 32rpx;
          color: $textBlack-color;
          margin-left: 10rpx;
        }
        i {
          font-size: 28rpx;
          color: $textGray-color;
          margin-left: 20rpx;
          flex: 1;
        }
        .order-status {
          font-size: 28rpx;
          color: $textGray-color;
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
            color: $textGray-color;
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
          color: $textGray-color;
        }
        .amount {
          font-size: 24rpx;
          color: $textBlack-color;
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
          span {
            font-size: 32rpx;
            color: $textBlack-color;
            margin: 16rpx 24rpx;
          }
        }
      }
    }
  }
}
</style>
