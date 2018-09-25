<template>
  <div class="container">
    <div class="header-c">
      <div class="header">
        <div class="h-l">
          <img :src="contentData.pic_url">
        </div>
        <div class="h-r">
          <div class="r-t">
            <span class="t-l">{{contentData.min_price_tip}}</span>
            <div class="s-l"></div>
            <span class="t-m">{{contentData.delivery_time_tip}}</span>
            <div class="s-r"></div>
            <span class="t-r">{{contentData.distance}}</span>
          </div>
          <span class="r-m">公告：{{contentData.bulletin}}</span>
          <div class="r-b">
            <span class="b-l">减</span>
            <span class="b-r">满35减22；满65减40；满100减48</span>
            <i class="icon mt-arrow-right-o"></i>
          </div>
        </div>
      </div>
       <div class="cate-c">
         <span class="c-l">菜单</span>
         <span class="c-m">评价</span>
         <span class="c-r">商家</span>
         <div class="line"></div>
       </div>
    </div>
    <div class="list-c">
      <scroll-view class="list-l" :scroll-y="true">
        <div class="l-item" v-for="(item, index) in foods" :key="index">
          <img :src="item.icon" v-if="item.icon.length > 0">
          <span>{{item.name}}</span>
        </div>
      </scroll-view>
      <scroll-view class="list-r" :scroll-y="true">
        <div class="section">
          <span class="title">{{tagName}}</span>
        </div>
        <div class="item-list" v-for="(item, index) in spus" :key="index">
          <div class="item">
            <div class="item-l">
              <img :src="item.picture">
            </div>
            <div class="item-r">
              <span class="title">{{item.name}}</span>
              <span class="sub-title">{{item.description}}</span>
              <span class="sale-num">{{item.month_saled_content}} {{item.praise_content}}</span>
              <div class="r-t">
                <span class="price">￥{{item.min_price}}</span>
                <div class="sku">
                  <span>选规格</span>
                </div>
              </div>
              <div class="tags-c">
                <img class="tags" :src="itm.picture_url" v-for="(itm, idx) in item.product_label_picture_list" :key="idx">
              </div>
            </div>
          </div>
        </div>
      </scroll-view>
    </div>
    <div class="footer-c">
      <div class="c-t">
        <span>满35减22；满65减40；满100减48</span>
      </div>
      <div class="c-m">
        <div class="m-l">
          <span class="l-l">另需配送费￥8</span>
          <div class="l-m"></div>
          <span class="l-r">支持自取</span>
        </div>
        <div class="m-r" @click="orderClick">
          <span>80元起送</span>
        </div>
      </div>
      <div class="cart-c">
        <img mode='widthFix' src="http://ovyjkveav.bkt.clouddn.com/18-9-25/77715001.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import {shoppingCart} from './data'

export default {
  data() {
    return {
      contentData: {},
      foods: [],
      spus: [],
      tagName: ''
    }
  },
  methods: {
    orderClick() {
      wx.navigateTo({url: '/pages/submitOrder/main'})
    }
  },
  mounted() {
    this.contentData = shoppingCart.data.poi_info
    this.foods = shoppingCart.data.food_spu_tags
    this.spus = this.foods[0].spus
    this.tagName = this.foods[0].name
  }
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
  background-color: $page-bgcolor;
  width: 100%;
  height: 100%;
  position: relative;
  .header-c {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .header {
      display: flex;
      height: 204rpx;
      align-items: center;
      background-color: #333;
      .h-l {
        width: 136rpx;
        height: 136rpx;
        border-radius: 8rpx;
        margin-left: 20rpx;
        img {
          width: 136rpx;
          height: 136rpx;
          border-radius: 8rpx;
        }
      }
      .h-r {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 20rpx;
        .r-t {
          display: flex;
          align-items: center;
          .t-l {
            font-size: 24rpx;
            color: white;
          }
          .s-l {
            margin: 0 20rpx;
            width: 2rpx;
            height: 30rpx;
            background-color: white;
          }
          .t-m {
            font-size: 24rpx;
            color: white;
          }
          .s-r {
            margin: 0 20rpx;
            width: 2rpx;
            height: 30rpx;
            background-color: white;
          }
          .t-r {
            font-size: 24rpx;
            color: white;
          }
        }
        .r-m {
          font-size: 24rpx;
          color: white;
          margin: 20rpx 0;
          line-height: 30rpx;
          height: 30rpx;
          overflow: hidden;
        }
        .r-b {
          display: flex;
          align-items: center;
          .b-l {
            width: 30rpx;
            height: 30rpx;
            background-color: #FF616D;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            font-size: 20rpx;
          }
          .b-r {
            font-size: 24rpx;
            color: white;
            flex: 1;
            margin-left: 20rpx;
          }
          i {
            font-size: 24rpx;
            color: white;
          }
        }
      }
    }
    .cate-c {
      display: flex;
      height: 70rpx;
      align-items: center;
      border-bottom: 2rpx solid $spLine-color;
      position: relative;
      .c-l {
        font-size: 32rpx;
        color: $textBlack-color;
        margin-left: 40rpx;
      }
      .c-m {
        font-size: 32rpx;
        color: $textBlack-color;
        margin-left: 80rpx;
      }
      .c-r {
        font-size: 32rpx;
        color: $textBlack-color;
        margin-left: 80rpx;
      }
      .line {
        position: absolute;
        width: 60rpx;
        height: 4rpx;
        background-color: $theme-color;
        left: 40rpx;
        bottom: 2rpx;
      }
    }
  }
  .list-c {
    display: flex;
    position: fixed;
    top: 284rpx;
    left: 0;
    right: 0;
    bottom: 200rpx;
    .list-l {
      display: flex;
      flex-direction: column;
      width: 160rpx;
      background-color: $page-bgcolor;
      .l-item {
        display: flex;
        width: 160rpx;
        align-items: center;
        justify-content: center;
        padding: 20rpx;
        box-sizing: border-box;
        border-bottom: 2rpx solid white;
        img {
          width: 30rpx;
          height: 30rpx;
          background-size: cover;
          border-radius: 15rpx;
        }
        span {
          font-size: 24rpx;
          color: $textBlack-color;
          margin-left: 10rpx;
        }
      }
    }
    .list-r {
      display: flex;
      flex-direction: column;
      flex: 1;
      .section {
        display: flex;
        height: 88rpx;
        align-items: center;
        margin-left: 20rpx;
        span {
          font-size: 28rpx;
          color: $textBlack-color;
        }
      }
      .item-list {
        display: flex;
        margin: 0 20rpx;
        flex-direction: column;
        .item {
          display: flex;
          margin-bottom: 30rpx;
          .item-l {
            img {
              width: 160rpx;
              height: 160rpx;
              background-size: cover;
            }
          }
          .item-r {
            display: flex;
            flex-direction: column;
            margin-left: 20rpx;
            justify-content: space-between;
            flex: 1;
            .title {
              font-size: 28rpx;
              color: $textBlack-color;
              font-weight: bold;
              overflow: hidden;
              line-height: 30rpx;
              height: 30rpx;
            }
            .sub-title {
              font-size: 20rpx;
              color: $textGray-color;
              line-height: 30rpx;
              overflow: hidden;
              height: 30rpx;
              margin-top: 10rpx;
            }
            .sale-num {
              font-size: 20rpx;
              color: $textGray-color;
              margin-top: 10rpx;
            }
            .r-t {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 10rpx;
              .price {
                font-size: 32rpx;
                color: red;
              }
              .sku {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: $theme-color;
                padding: 8rpx 12rpx;
                border-radius: 25rpx;
                span {
                  font-size: 20rpx;
                  color: $textBlack-color
                }
              }
            }
            .tags-c {
              display: flex;
              align-items: center;
              margin-top: 10rpx;
              img {
                width: 60rpx;
                height: 30rpx;
                background-size: cover;
              }
            }
          }
        }
      }
    }
  }
  .footer-c {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    height: 200rpx;
    background-color: #333;
    z-index: 990;
    width: 100%;
    .c-t {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50rpx;
      background-color: #FFEFD2;
      span {
        font-size: 24rpx;
        color: $textBlack-color;
      }
    }
    .c-m {
      display: flex;
      justify-content: center;
      height: 88rpx;
      margin-left: 120rpx;
      .m-l {
        display: flex;
        align-items: center;
        flex: 1;
        .l-l {
          font-size: 24rpx;
          color: $textDarkGray-color;
        }
        .l-m {
          width: 2rpx;
          height: 20rpx;
          background-color: $textDarkGray-color;
          margin: 0 20rpx;
        }
        .l-r {
          font-size: 24rpx;
          color: $textDarkGray-color;
        }
      }
      .m-r {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200rpx;
        height: 88rpx;
        background-color: #2F2F2F;
        span {
          font-size: 32rpx;
          color: $textDarkGray-color;
          font-weight: bold;
        }
      }
    }
    .cart-c {
      position: absolute;
      left: 20rpx;
      top: 30rpx;
      z-index: 991;
      img {
        width: 90rpx;
        height: 90rpx;
        background-size: cover;
      }
    }
  }
}
</style>
