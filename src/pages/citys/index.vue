<template>
  <div class="container">
    <div class="header-c">
      <div class="header">
        <span>当前定位城市：</span>
        <span>当定位不正确时，请在城市列表中选择</span>
      </div>
      <div class="location-city">
        <span>上海</span>
        <i class="icon qb-icon-down-arrow-s"></i>
      </div>
      <div class="hot-c">
        <text>热门城市</text>
        <div class="hot-list">
          <div class="hot-name" v-for="(item, index) in hotList" :key="index">
            <span>{{item}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="city-list">
      <div class="city-group" v-for="(item, index) in hotList" :key="index">
        <span>A</span>
        <div class="group-list">
          <div class="city-name" v-for="(itx, idx) in groupList" :key="idx">
            <span>{{itx}}</span>
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
      count: "dadad",
      hotList: [1, 2, 3, 4, 5, 6, 7, 8],
      groupList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: $page-bgcolor;
  .header-c {
    width: 100%;
    height: auto;
    display: flex;
    background-color: $page-bgcolor;
    flex-direction: column;
    border-top: 2rpx solid $spLine-color;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100rpx;
      border-bottom: 2rpx solid $spLine-color;
      background-color: white;
      span {
        color: $textBlack-color;
        font-size: 28rpx;
        margin: 0 20rpx;
      }
    }
    .location-city {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20rpx;
      height: 88rpx;
      border-bottom: 2rpx solid $spLine-color;
      background-color: white;
      span {
        font-size: 32rpx;
        color: $theme-color
      }
      i {
        color: $textGray-color;
        font-size: 32rpx;
      }
    }
    .hot-c {
      display: flex;
      flex-direction: column;
      background-color: white;
      margin-top: 20rpx;
      text {
        margin: 20rpx 32rpx;
        font-size: 28rpx;
        color: $textBlack-color;
      }
      .hot-list {
        display: flex;
        flex-wrap: wrap;
        .hot-name {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80rpx;
          background-color: white;
          width: 25%;
          box-sizing: border-box;
          border-top: 2rpx solid $spLine-color;
          border-right: 2rpx solid $spLine-color;
          span {
            font-size: 32rpx;
            color: $theme-color
          }
        }
      }
    }
  }
  .city-list {
    display: flex;
    flex-direction: column;
    background-color: $page-bgcolor;
    margin-bottom: 20rpx;
    .city-group {
      display: flex;
      flex-direction: column;
      margin-top: 20rpx;
      background-color: white;
      span {
        margin: 20rpx 32rpx;
        font-size: 28rpx;
        color: $textBlack-color;
      }
      .group-list {
        display: flex;
        flex-wrap: wrap;
        background-color: $page-bgcolor;
        .city-name {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80rpx;
          background-color: white;
          width: 25%;
          box-sizing: border-box;
          border-top: 2rpx solid $spLine-color;
          border-right: 2rpx solid $spLine-color;
          span {
            font-size: 32rpx;
            color: $theme-color
          }
        }
      }
    }
  }
}
</style>
