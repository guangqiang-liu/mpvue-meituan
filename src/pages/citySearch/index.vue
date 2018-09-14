<template>
  <div class="container">
    <div class="search-bar">
      <input class="input" placeholder="输入学校、商务楼、地址" placeholder-style="font-size: 24rpx; color: #999999" auto-focus/>
      <button class="search-btn" bindtap="setDisabled">提交</button>
    </div>
    <div class="history-c">
      <text>搜索历史</text>
      <div class="history-list">
        <div class="item" v-for="(item, index) in list" :key="index">
          <span class="title">合川路</span>
          <span class="address">上海市闵行区</span>
        </div>
      </div>
    </div>
    <button class="clear-btn" bindtap="setDisabled">清空所有</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: $page-bgcolor;
  .search-bar {
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 20rpx;
    height: 240rpx;
    align-items: center;
    .input {
      height: 64rpx;
      margin: 32rpx;
      width: 85%;
      border: 2rpx solid $spLine-color;
      border-radius: 8rpx;
      padding: 0 32rpx;
    }
    .search-btn {
      width: 90%;
      height: 88rpx;
      background-color: rgba($color: #fff, $alpha: 1.0);
      color: white;
      border-radius: 8rpx;
      background-color: $theme-color;
    }
    .search-btn::after {
      border: 0;
    }
  }
  .history-c {
    display: flex;
    flex-direction: column;
    text {
      color: $textBlack-color;
      font-size: 28rpx;
      margin: 0 32rpx;
      background-color: $page-bgcolor;
      line-height: 60rpx;
      height: 60rpx;
    }
    .history-list {
      background-color: $page-bgcolor;
      display: flex;
      flex-direction: column;
      .item {
        height: 150rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        border-bottom: 2rpx solid $spLine-color;
        padding: 0 32rpx;
        .title {
          color: $textBlack-color;
          font-size: 32rpx
        }
        .address {
          color: $textGray-color;
          font-size: 20rpx;
          margin-top: 20rpx;
        }
      }
    }
  }
  .clear-btn {
    height: 96rpx;
    background-color: white;
    color: $textBlack-color;
    width: 100%;
  }
  .clear-btn::after {
    border: 0;
  }
}
</style>
