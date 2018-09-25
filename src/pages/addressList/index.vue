<template>
  <div class="container">
    <div class="list-c">
      <div class="item" v-for="(item, index) in itemList" :key="index">
        <div class="i-l">
          <span class="address">广中西路运城路 1111号 1栋</span>
          <div class="user-info">
            <span class="s-l">刘光强</span>
            <span class="s-m">先生</span>
            <span class="s-r">15214313256</span>
          </div>
        </div>
        <i class="icon mt-edit-o"></i>
      </div>
    </div>
    <div class="add-btn" @click="addClick">
      <i class="icon mt-add-o"></i>
      <span>新增收货地址</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [1, 2, 3, 4]
    }
  },
  methods: {
    addClick() {
      wx.navigateTo({url: '/pages/addAddress/main'})
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
      align-items: center;
      justify-content: space-between;
      background-color: white;
      padding: 30rpx;
      border-top: 2rpx solid $spLine-color;
      .i-l {
        display: flex;
        flex-direction: column;
        .address {
          font-size: 32rpx;
          color: $textBlack-color;
        }
        .user-info {
          display: flex;
          margin-top: 10rpx;
          .s-l {
            font-size: 32rpx;
            color:  $textGray-color;
          }
          .s-m {
            font-size: 32rpx;
            color:  $textGray-color;
            margin-left: 20rpx;
          }
          .s-r {
            font-size: 32rpx;
            color:  $textGray-color;
            margin-left: 60rpx;
          }
        }
      }
      i{
        font-size: 32rpx;
        color: $textBlack-color;
      }
    }
  }
  .add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88rpx;
    background-color: white;
    border-top: 2rpx solid  $spLine-color;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    i {
      font-size: 32rpx;
      color: $theme-color;
    }
    span {
      font-size: 28rpx;
      color: $textBlack-color;
      margin-left: 10rpx;
    }
  }
}
</style>
