<template>
  <div class="container">
    <div class="content">
      <div class="search-c">
        <div class="search-bar">
          <i class="icon mt-search-o"></i>
          <input placeholder="请输入城市名称查询" placeholder-style="font-size: 24rpx" @input="search"/>
          <div class="cancle" v-if="keyword" @click="cancle">
            <i class="icon qb-icon-cancle-o"></i>
          </div>
        </div>
        <span class="search-btn" @click="search">搜索</span>
      </div>
      <span class="title">热门搜索</span>
      <div class="line-t"></div>
      <div class="tag-list">
        <div class="tag" v-for="(item, index) in hotList" :key="index">
          <span>{{item.label_name}}</span>
        </div>
      </div>
      <div class="line-m"></div>
      <div class="history-c">
        <div class="header">
          <span>历史搜索</span>
          <i class="icon mt-trash-o"></i>
        </div>
        <div class="line-b"></div>
        <div class="history-list">
          <div class="item" v-for="(item, index) in historyList" :key="index">
            <span>{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {searchData} from './data'
export default {
  data() {
    return {
      hotList: [],
      historyList: ['麻辣烫', '麦当劳', '小炒肉', '奶茶']
    }
  },
  mounted() {
    this.hotList = searchData.data.data.labels
    // this.historyList = searchData.data.data.searchHotLabelWithTgtStid.searchHotLabelList
  }

}
</script>

<style lang="scss" scoped>
.container {
  .content {
    background-color: white;
    display: flex;
    flex-direction: column;
    .search-c {
      display: flex;
      background-color: white;
      align-items: center;
      margin-top: 20rpx;
      .search-bar {
        align-items: center;
        justify-content: center;
        display: flex;
        flex: 1;
        background-color: #f6f6f6;
        height: 60rpx;
        border-radius: 8rpx;
        padding-left: 20rpx;
        margin-left: 30rpx;
        i {
          margin-right: 20rpx;
          color: #999999;
          font-size: 32rpx;
        }
        input {
          display: flex;
          flex: 1;
          width: 100%;
          font-size: 28rpx;
          height: 32rpx;
          margin-top: 5rpx;
        }
        .cancle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50rpx;
          height: 60rpx;
          margin-left: 20rpx;
          i {
            color: #999999;
            font-size: 40rpx;
          }
        }
      }
      .search-btn {
        width: 100rpx;
        height: 60rpx;
        color: $theme-color;
        font-size: 24rpx;
        line-height: 60rpx;
        text-align: center;
      }
    }
    .title {
      font-size: 24rpx;
      color: $textDarkGray-color;
      margin: 30rpx;
    }
    .line-t {
      height: 2rpx;
      background-color: $spLine-color;
      margin-left: 30rpx;
    }
    .tag-list {
      display: flex;
      margin: 30rpx;
      flex-wrap: wrap;
      margin-bottom: 0;
      .tag {
        width: 120rpx;
        height: 50rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2rpx solid $spLine-color;
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        span {
          font-size: 20rpx;
          color: $textBlack-color;
        }
      }
    }
    .line-m {
      height: 20rpx;
      background-color: $page-bgcolor;
    }
    .history-c {
      display: flex;
      background-color: white;
      flex-direction: column;
      .header {
        display: flex;
        align-items: center;
        padding: 20rpx 30rpx;
        span {
          display: flex;
          flex: 1;
          font-size: 24rpx;
          color: $textDarkGray-color;
        }
        i {
          font-size: 32rpx;
          color: $textDarkGray-color;
        }
      }
      .line-b {
        height: 2rpx;
        background-color: $spLine-color;
        margin-left: 30rpx;
      }
      .history-list {
        display: flex;
        background-color: white;
        margin: 30rpx;
        flex-wrap: wrap;
        margin-bottom: 0;
        .item {
          width: 120rpx;
          height: 50rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2rpx solid $spLine-color;
          margin-right: 20rpx;
          margin-bottom: 20rpx;
          span {
            font-size: 20rpx;
            color: $textBlack-color;
          }
        }
      }
    }
  }
}
</style>
