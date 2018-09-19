<template>
  <div class="container">
    <div class="header-c">
      <img src="" alt="">
      <div class="info-c">
        <span class="name">光强</span>
        <span class="phone">15214313256</span>
      </div>
    </div>
    <div class="list-c" @click="itemClick">
      <div class="item" v-for="(item, index) in itemList" :key="index" :data-index="index">
        <div class="item-l">
          <i class="icon qb-icon-down-arrow-s"></i>
          <span>{{item}}</span>
        </div>
        <i class="icon qb-icon-down-arrow-s"></i>
      </div>
    </div>
    <div class="btn">退出账号</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: ['美团红包', '商家代金券', '我的地址', '邀请有奖', '客服中心', '帮助和反馈', '协议和说明']
    }
  },
  methods: {
    itemClick(e) {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .header-c {
    display: flex;
    align-items: center;
    height: 200rpx;
    background-color: #FFD26B;
    img {
      width: 120rpx;
      height: 120rpx;
      border-radius: 60rpx;
      background-color: maroon;
      margin-left: 30rpx
    }
    .info-c {
      display: flex;
      flex-direction: column;
      margin-left: 30rpx;
      .name {
        font-size: 32rpx;
        color: $textBlack-color;
        font-weight: bold;
      }
      .phone {
        font-size: 28rpx;
        color: $textBlack-color;
      }
    }
  }
  .list-c {
    display: flex;
    flex-direction: column;
    margin-top: 20rpx;
    background-color: white;
    .item {
      display: flex;
      align-items: center;
      height: 88rpx;
      border-bottom: 2rpx solid $spLine-color;
      padding: 0 20rpx;
      .item-l {
        display: flex;
        flex: 1;
        i {
          font-size: 32rpx;
          color: $textGray-color;
        }
        span {
          font-size: 32rpx;
          color: $textBlack-color;
          margin-left: 30rpx;
        }
      }
      i {
        font-size: 28rpx;
        color: $textGray-color;
      }
    }
    .item:last-child {
      border-bottom: 0rpx solid $spLine-color;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88rpx;
    background-color: white;
    margin-top: 20rpx;
    color: $textBlack-color;
    font-size: 32rpx;
  }
}
</style>
