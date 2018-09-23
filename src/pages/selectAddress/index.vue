<template>
  <div class="container">
    <div class="header-c">
      <div class="header-l">
        <i class="icon mt-location-o" :style="{color: '#434343', 'font-size': 38 + 'rpx'}"></i>
        <span>上海市</span>
        <i class="icon mt-arrow-right-o" :style="{color: '#434343', 'font-size': 28 + 'rpx'}"></i>
      </div>
      <div class="header-r">
        <div class="search-bar">
          <i class="icon mt-search-o"></i>
          <input placeholder="请输入收货地址" @input="search"/>
          <div class="cancle" v-if="keyword" @click="cancle">
            <i class="icon qb-icon-cancle-o"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="location-c">
      <span class="c-l">上海市闵行区漕河泾开发区</span>
      <div class="c-r">
        <i class="icon mt-relocation-o"></i>
        <span>重新定位</span>
      </div>
    </div>
    <div class="my-address">
      <div class="header">
        <i class="icon mt-myhome-o"></i>
        <span>我的收获地址</span>
      </div>
      <div class="list-c">
        <div class="item" v-for="(item, index) in myAddressList" :key="index">
          <span class="i-t">上海市闵行区 漕河泾开发区</span>
          <div class="i-b">
            <span class="b-l">刘光强</span>
            <span class="b-m">先生</span>
            <span class="b-r">15214313256</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <span>展开全部4个地址</span>
        <i class="icon mt-arrow-down-o"></i>
      </div>
    </div>
    <div class="nearby-address">
      <div class="header">
        <i class="icon mt-location-o"></i>
        <span>附近地址</span>
      </div>
      <div class="list-c">
        <div class="item" v-for="(item, index) in myAddressList" :key="index">
          <span>上海市闵行区 漕河泾开发区</span>
        </div>
      </div>
    </div>
    <div class="footer-c" @click="addAddress">
      <i class="icon mt-add-o"></i>
      <span>新增收货地址</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myAddressList: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  methods: {
    addAddress() {
       wx.navigateTo({url: '/pages/addAddress/main'})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .header-c {
    display: flex;
    align-items: center;
    height: 100rpx;
    background-color: white;
    padding: 0 30rpx;
    border-bottom: 2rpx solid $spLine-color;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .header-l {
      display: flex;
      align-items: center;
      span {
        font-size: 28rpx;
        color: $textBlack-color;
        margin: 0 10rpx;
      }
    }
    .header-r {
      display: flex;
      align-items: center;
      flex: 1;
      .search-bar {
        align-items: center;
        justify-content: center;
        display: flex;
        flex: 1;
        background-color: #f6f6f6;
        height: 70rpx;
        border-radius: 8rpx;
        padding-left: 20rpx;
        margin-left: 30rpx;
        i {
          margin-right: 10rpx;
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
    }
  }
  .location-c {
    display: flex;
    align-items: center;
    height: 88rpx;
    background-color: white;
    padding: 0 30rpx;
    border-bottom: 2rpx solid $spLine-color;
    margin-top: 100rpx;
    .c-l {
      font-size: 32rpx;
      color: $textBlack-color;
      flex: 1;
    }
    .c-r {
      display: flex;
      align-items: center;
      i {
        font-size: 32rpx;
        color: $theme-color;
      }
      span {
        font-size: 28rpx;
        color: $theme-color;
        margin-left: 10rpx;
      }
    }
  }
  .my-address {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-bottom: 2rpx solid $spLine-color;
    padding-top: 30rpx;
    .header {
      display: flex;
      align-items: center;
      padding: 10rpx 30rpx;
      background-color: white;
      i {
        font-size: 28rpx;
        color: $textDarkGray-color;
      }
      span {
        font-size: 28rpx;
        color: $textDarkGray-color;
        margin-left: 20rpx;
      }
    }
    .list-c {
      display: flex;
      flex-direction: column;
      margin-left: 70rpx;
      margin-right: 20rpx;
      .item {
        display: flex;
        flex-direction: column;
        height: 120rpx;
        background-color: white;
        justify-content: center;
        border-bottom: 2rpx solid $spLine-color;
        .i-t {
          font-size: 32rpx;
          color: $textBlack-color;
          
        }
        .i-b {
          display: flex;
          align-items: center;
          margin-top: 10rpx;
          .b-l {
            font-size: 24rpx;
            color: $textDarkGray-color;
          }
          .b-m {
            font-size: 24rpx;
            color: $textDarkGray-color;
            margin-left: 20rpx;
          }
          .b-r {
            font-size: 24rpx;
            color: $textDarkGray-color;
            margin-left: 60rpx;
          }
        }
      }
    }
    .footer {
      display: flex;
      align-items: center;
      height: 88rpx;
      margin-left: 70rpx;
      span {
        font-size: 28rpx;
        color: $textDarkGray-color;
      }
      i {
        font-size: 32rpx;
        color: $textDarkGray-color;
        margin-left: 10rpx;
      }
    }
  }
  .nearby-address {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-top: 30rpx;
    margin-bottom: 88rpx;
    .header {
      display: flex;
      align-items: center;
      padding: 10rpx 30rpx;
      i {
        font-size: 38rpx;
        color: $textDarkGray-color;
      }
      span {
        font-size: 28rpx;
        color: $textDarkGray-color;
        margin-left: 20rpx;
      }
    }
    .list-c {
      display: flex;
      flex-direction: column;
      margin-left: 70rpx;
      margin-right: 20rpx;
      background-color: magenta;
      .item {
        display: flex;
        flex-direction: column;
        height: 88rpx;
        background-color: white;
        justify-content: center;
        border-bottom: 2rpx solid $spLine-color;
        span {
          font-size: 32rpx;
          color: $textBlack-color;
        }
      }
      .item:last-child {
        border-bottom: 0rpx solid $spLine-color;
      }
    }
  }
  .footer-c {
    display: flex;
    align-items: center;
    height: 88rpx;
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    justify-content: center;
    border-top: 2rpx solid $spLine-color;
    i {
      font-size: 32rpx;
      color: $theme-color;
    }
    span {
      font-size: 28rpx;
      color: $textBlack-color;
      margin-left: 20rpx;
    }
  }
}
</style>
