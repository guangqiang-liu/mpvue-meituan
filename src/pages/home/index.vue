<template>
  <div class="container">
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <div v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <div class="grid-c">
            <div class="item" v-for="(itx, idx) in item.items" :key="idx">
              <img class="item-img" src="">
              <span class="item-title">{{itx}}</span>
            </div>
          </div>
        </swiper-item>
      </div>
    </swiper>
    <div class="list-c">
      <div class="header">
        <i class="icon qb-icon-down-arrow-s"></i>
        <span>附近商家</span>
      </div>
      <div class="item" v-for="(item, index) in item" :key="index">
        <div class="item-l">
          <img src="">
        </div>
        <div class="item-r">
          <div class="r-t">
            <div class="t-l">
              <span class="tip">品牌</span>
              <span class="shop-name">店铺名称</span>
            </div>
            <div class="t-r">
              <div v-for="(itx, idx) in tips" :key="idx">保</div>
            </div>
          </div>
          <div class="r-m">
            <div class="m-l">
              <div class="star-c" v-for="(itx, idx) in tips" :key="idx">
                <img src="" alt="">
              </div>
              <span class="score">5.0</span>
              <span class="sale-num">月售1000单</span>
            </div>
            <div class="m-r">
              <div class="deliver">蜂鸟专送</div>
              <div class="on-time">准时达</div>
            </div>
          </div>
          <div class="r-b">
            <div class="b-l">
              <span>￥20元起送 / 配送费约￥5</span>
            </div>
            <div class="b-r">
              <span class="distance">1000公里</span>
              <span class="time">2小时30分支</span>
            </div>
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
      imgUrls: [
        {
          items: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        {
          items: [1, 2, 3, 4, 5, 6, 7, 8]
        }
      ],
      item: [1, 2, 3, 4, 5],
      tips: [1, 2, 3],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000
    };
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
  .swiper {
    width: 100%;
    height: 400rpx;
    background-color: white;
    .grid-c {
      width: 100%;
      height: 400rpx;
      background-color: orangered;
      flex-wrap: wrap;
      display: flex;
      .item {
        height: 50%;
        width: 25%;
        background-color: mediumaquamarine;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img {
          width: 100%;
          height: 100rpx;
          background-color: red;
        }
        span {
          font-size: 32rpx;
          color: $textDarkGray-color
        }
      }
    }
  }
  .list-c {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20rpx;
    background-color: white;
    .header {
      display: flex;
      height: 88rpx;
      background-color: maroon;
      align-items: center;
      i {
        font-size: 32rpx;
        color:  $textGray-color;
        margin-left: 20rpx;
      }
      span {
        font-size: 28rpx;
        color:  $textGray-color;
        margin-left: 20rpx;
      }
    }
    .item {
      display: flex;
      background-color: white;
      height: 208rpx;
      background-color: aqua;
      border-bottom: 2rpx solid $spLine-color;
      .item-l {
        width: 122rpx;
        height: 122rpx;
        margin: 0 20rpx;
        margin-top: (208 - 122) / 2 + rpx;
        img {
          width: 122rpx;
          height: 122rpx;
          background-color: orangered;
        }
      }
      .item-r {
        display: flex;
        flex-direction: column;
        background-color: brown;
        margin-top: (208 - 122) / 2 + rpx;
        width: 100%;
        margin-right: 20rpx;
        .r-t {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .t-l {
            display: flex;
            align-items: center;
            .tip {
              background-color: #FED450;
              color: $textBlack-color;
              font-size: 24rpx;
              text-align: center;
              border-radius: 6rpx;
              padding: 0 8rpx;
            }
            .shop-name {
              font-size: 32rpx;
              color: $textBlack-color;
              font-weight: bold;
              background-color: green;
              margin-left: 20rpx
            }
          }
          .t-r {
            display: flex;
            background-color: blueviolet;
            align-items: center;
            justify-content: space-around;
            div {
              font-size: 20rpx;
              color:  $textGray-color;
              width: 30rpx;
              height: 30rpx;
              border: 2rpx solid $spLine-color;
              margin-right: 5rpx;
              text-align: center;
            }
          }
        }
        .r-m {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #FED450;
          margin-top: 10rpx;
          .m-l {
            display: flex;
            align-items: center;
            .star-c {
              display: flex;
              align-items: center;
              img {
                width: 20rpx;
                height: 20rpx;
                background-color: orange;
                margin-left: 4rpx;
              }
            }
            .score {
              font-size: 20rpx;
              color: #FC6127;
              margin-left: 20rpx;
            }
            .sale-num {
              font-size: 20rpx;
              color: $textDarkGray-color;
              margin-left: 20rpx;
            }
          }
          .m-r {
            display: flex;
            align-items: center;
            .deliver {
              background-color: $theme-color;
              text-align: center;
              font-size: 20rpx;
              color: white;
              padding: 3rpx 6rpx;
              border-radius: 4rpx;
            }
            .on-time {
              text-align: center;
              font-size: 20rpx;
              color: $theme-color;
              border-radius: 4rpx;
              border: 2rpx solid $theme-color;
              margin-left: 20rpx;
              padding: 3rpx 6rpx;
            }
          }
        }
        .r-b {
          display: flex;
          align-items: center;
          background-color: orchid;
          justify-content: space-between;
          margin-top: 10rpx;
          .b-l {
            display: flex;
            align-items: center;
            span {
              font-size: 20rpx;
              color: $textDarkGray-color;
            }
          }
          .b-r {
            display: flex;
            align-items: center;
            .distance {
              font-size: 20rpx;
              color: $textDarkGray-color;
            }
            .time {
              font-size: 20rpx;
              color: $theme-color;
              margin-left: 20rpx;
            }
          }
        }
      }
    }
  }
}
</style>
