<template>
  <div class="container">
    <div class="content">
      <div class="header-c">
        <div class="header-l" @click="addressClick">
          <i class="icon mt-location-o" :style="{color: '#434343', 'font-size': 38 + 'rpx'}"></i>
          <span>上海市漕河泾开发区</span>
          <i class="icon mt-arrow-right-o" :style="{color: '#434343', 'font-size': 28 + 'rpx'}"></i>
        </div>
        <div class="header-r" @click="searchClick">
          <i class="icon mt-search-o"></i>
          <span>请输入收货地址</span>
        </div>
      </div>
      <swiper class="category-c" indicator-dots="true" indicator-color="#999" indicator-active-color="#FFC24A">
        <div v-for="(item, index) in categoryArr" :key="index">
          <swiper-item>
            <div class="grid-c">
              <div class="item" v-for="(itx, idx) in item.items" :key="idx" @click="categoryClick">
                <img class="item-img" :src="itx.url">
                <span class="item-title">{{itx.name}}</span>
              </div>
            </div>
          </swiper-item>
        </div>
      </swiper>
      <swiper class="ad-c" indicator-dots="true" indicator-color="#999" indicator-active-color="#FFC24A" autoplay="true">
        <block v-for="(item, index) in topBannerData" :key="index">
          <swiper-item>
            <img class="ad-img" :src="item.banner_pic_url">
          </swiper-item>
        </block>
      </swiper>
      <div class="b-banner">
        <div class="recommended" @click="categoryClick">
          <img :src="bottomBanner.banner_pic_url">
        </div>
        <div class="hot-sale">
          <div class="item" v-for="(item, index) in bottomBanner.products" :key="index" @click="shoppingCartClick">
            <div class="img-c">
              <img :src="item.picture">
              <div class="name-c">
                <span class="name">{{item.name}}</span>
              </div>
            </div>
            <span class="price">{{item.price}}</span>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="l"></div>
        <span class="m">附近商家</span>
        <div class="r"></div>
      </div>
      <div class="category-list">
        <div class="filter-bar">
          <div class="item" v-for="(item, index) in filterList" :key="index">
            <span>{{item.title}}</span>
            <i class="icon" :class="item.icon"></i>
          </div>
        </div>
        <div class="item-list">
          <div class="header">
            <div class="item" v-for="(item, index) in tags" :key="index">
              <span>{{item}}</span>
            </div>
          </div>
          <div class="item" v-for="(item, index) in shopsList" :key="index" @click="shoppingCartClick">
            <div class="item-l">
              <img :src="item.pic_url">
              <img class="tag" :src="item.poi_promotion_pic">
            </div>
            <div class="item-r">
              <div class="r-t">
                <span class="shop-name">{{item.name}}</span>
                <div class="t-c">
                  <div class="c-l">
                    <div class="l-l">
                      <i class="icon mt-star-s" v-for="(itx, idx) in stars" :key="idx"></i>
                    </div>
                    <span class="l-m">{{item.wm_poi_score}}</span>
                    <span class="l-r">{{item.month_sales_tip}}</span>
                  </div>
                  <div class="c-r">
                    <span class="r-l">{{item.delivery_time_tip}}</span>
                    <div class="r-m"></div>
                    <span class="r-r">{{item.distance}}</span>
                  </div>
                </div>
              </div>
              <div class="r-m">
                <span class="m-l">{{item.min_price_tip}}</span>
                <div class="m-m"></div>
                <span class="m-r">{{item.shipping_fee_tip}}</span>
                <div class="m-m"></div>
                <span class="m-r">{{item.average_price_tip}}</span>
              </div>
              <div class="r-b">
                <span class="b-l">支持自取</span>
                <span class="b-r">极速配送</span>
              </div>
              <div class="activity-c">
                <div class="ac-item" v-for="(itm, idx) in item.discounts2" :key="idx">
                  <div class="ac">
                    <img class="ac-l" :src="itm.icon_url">
                    <span class="ac-r">{{itm.info}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {queryHomeHeadCategory} from '@/action/action'
import {homeData} from './data'

export default {
  data() {
    return {
      categoryArr: [{items: []}, {items: []}],
      topBannerData: [],
      bottomBanner: {},
      shopsList: [],
      filterList: [
        {
          title: '综合排序',
          icon: 'mt-arrow-down-o'
        },
        {
          title: '销量最高'
        },
        {
          title: '速度最快'
        },
        {
          title: '筛选',
          icon: 'mt-filter-o'
        },
      ],
      tags: ['满减优惠', '点评高分', '新商家', '美团专送'],
      stars: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    categoryClick() {
      wx.navigateTo({url: '/pages/categoryList/main'})
    },
    addressClick() {
      wx.navigateTo({url: '/pages/selectAddress/main'})
    },
    searchClick() {
      wx.navigateTo({url: '/pages/searchList/main'})
    },
    shoppingCartClick() {
      wx.navigateTo({url: '/pages/shoppingCart/main'})
    }
  },
  mounted() {
    var categoryData = homeData.headData.data.primary_filter;
    categoryData.map((item, index) => {
      if (index < 10) {
        this.categoryArr[0].items.push(item)
      } else {
         this.categoryArr[1].items.push(item)
      }
    })
    this.topBannerData = homeData.topBannerData.data.top_banner_list
    this.bottomBanner = homeData.bannerData.data.rcmd_board_v9.mid_ad_banner.platinum_banner
    this.shopsList = homeData.homeList.data.poilist
  }
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    display: flex;
    flex-direction: column;
    position: relative;
    .header-c {
      display: flex;
      align-items: center;
      height: 80rpx;
      position: fixed;
      width: auto;
      padding: 0 30rpx;
      width: 100%;
      box-sizing: border-box;
      background-color: white;
      z-index: 999;
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
        background-color: $page-bgcolor;
        height: 60rpx;;
        border-radius: 30rpx;
        margin-left: 30rpx;
        align-items: center;
        i {
          color: $textDarkGray-color;
          font-size: 32rpx;
          margin-left: 20rpx;
        }
        span {
          color: $textDarkGray-color;
          font-size: 24rpx;
          margin-left: 10rpx;
        }
      }
    }
    .category-c {
      height: 360rpx;
      background-color: white;
      padding-top: 100rpx;
      .grid-c {
        height: 340rpx;
        flex-wrap: wrap;
        display: flex;
        .item {
          width: 20%;
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          img {
            width: 80rpx;
            height: 80rpx;
            border-radius: 40rpx;
          }
          span {
            font-size: 20rpx;
            color: $textBlack-color;
            margin-top: 10rpx;
          }
        }
      }
    }
    .ad-c {
      display: flex;
      height: 200rpx;
      background-color: white;
      margin: 20rpx;
      .ad-img {
        height: 200rpx;
        width: 100%;
        background-size: cover;
      }
    }
    .b-banner {
      display: flex;
      flex-direction: column;
      .recommended {
        display: flex;
        align-items: center;
        height: 160rpx;
        margin: 20rpx;
        margin-top: 0;
        img {
          height: 160rpx;
          width: 100%;
          background-size: cover;
        }
      }
      .hot-sale {
        display: flex;
        background-color: white;
        height: 160rpx;
        justify-content: space-between;
        margin: 0 20rpx;
        .item {
          display: flex;
          flex-direction: column;
          width: 160rpx;
          padding: 0 20rpx;
          height: 160;
          .img-c {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            img {
              width: 160rpx;
              height: 120rpx;
              border-radius: 8rpx;
            }
            .name-c {
              display: flex;
              align-items: center;
              position: absolute;
              height: 30rpx;
              bottom: 0;
              background: rgba($color: #000000, $alpha: 0.3);
              width: 160rpx;
              .name {
                font-size: 20rpx;
                color: white;
                margin: 0 10rpx;
                height: 30rpx;
                overflow: hidden;
              }
            }
          }
          .price {
            font-size: 24rpx;
            color: $mtRed-color;
            margin: 10rpx 0;
          }
        }
      }
    }
    .section {
      display: flex;
      align-items: center;
      margin: 20rpx;
      justify-content: center;
      box-sizing: border-box;
      .l {
        height: 2rpx;
        width: 60rpx;
        background-color: $textDarkGray-color;
      }
      .m {
        font-size: 32rpx;
        color: $textBlack-color;
        margin: 0 20rpx;
        font-weight: bold;
      }
      .r {
        height: 2rpx;
        width: 60rpx;
        background-color: $textDarkGray-color;
      }
    }
    .category-list {
      display: flex;
      flex-direction: column;
      .filter-bar {
        display: flex;
        align-items: center;
        padding: 0 20rpx;
        background-color: white;
        height: 70rpx;
        border-top: 2rpx solid $spLine-color;
        border-bottom: 2rpx solid $spLine-color;
        .item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          span {
            font-size: 24rpx;
            color: $textDarkGray-color;
          }
          i {
            font-size: 24rpx;
            color: $textDarkGray-color;
            margin-left: 10rpx;
          }
        }
        .item:first-child {
          span {
            color: $textBlack-color;
          }
        }
      }
      .item-list {
        display: flex;
        flex-direction: column;
        background-color: white;
        .header {
          display: flex;
          align-items: center;
          background-color: white;
          justify-content: space-around;
          .item {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #F8F8F8;
            flex: 1;
            margin-left: 20rpx;
            padding: 10rpx 0;
            span {
              font-size: 20rpx;
              color: $textDarkGray-color;
            }
          }
          .item:last-child {
            margin-right: 20rpx;
          }
        }
        .item {
          display: flex;
          background-color: white;
          margin: 20rpx;
          .item-l {
            display: flex;
            width: 160rpx;
            height: 120rpx;
            position: relative;
            img {
              width: 160rpx;
              height: 120rpx;
            }
            .tag {
              position: absolute;
              width: 100rpx;
              height: 60rpx;
            }
          }
          .item-r {
            margin-left: 20rpx;
            flex-direction: column;
            flex: 1;
            .r-t {
              display: flex;
              flex-direction: column;
              .shop-name {
                font-size: 28rpx;
                color: $textBlack-color;
                font-weight: bold;
              }
              .t-c {
                display: flex;
                align-items: center;
                margin-top: 10rpx;
                .c-l {
                  display: flex;
                  flex: 1;
                  .l-l {
                    display: flex;
                    i {
                      font-size: 20rpx;
                      color: $theme-color;
                      margin-right: 10rpx;
                    }
                  }
                  .l-m {
                    font-size: 20rpx;
                    color: $textBlack-color;
                    margin-left: 10rpx;
                  }
                  .l-r {
                    font-size: 20rpx;
                    color: $textBlack-color;
                    margin-left: 20rpx;
                  }
                }
                .c-r {
                  display: flex;
                  align-items: center;
                  .r-l {
                    font-size: 20rpx;
                    color: $textBlack-color;
                  }
                  .r-m {
                    width: 2rpx;
                    height: 20rpx;
                    background-color: $textGray-color;
                    margin: 0 10rpx;
                  }
                  .r-r {
                    font-size: 20rpx;
                    color: $textBlack-color;
                  }
                }
              }
            }
            .r-m {
              display: flex;
              align-items: center;
              margin-top: 10rpx;
              .m-l {
                font-size: 20rpx;
                color: $textBlack-color;
              }
              .m-m {
                width: 2rpx;
                height: 20rpx;
                margin: 0 10rpx;
                background-color: $textGray-color;
              }
              .m-r {
                font-size: 20rpx;
                color: $textBlack-color;
              }
            }
            .r-b {
              display: flex;
              align-items: center;
              margin-top: 10rpx;
              .b-l {
                color: #09CFB5;
                font-size: 20rpx;
                border: 2rpx solid #09CFB5;
                text-align: center;
                padding: 0 8rpx;
              }
              .b-r {
                @extend .b-l;
                margin-left: 10rpx;
              }
            }
            .activity-c {
              display: flex;
              flex-direction: column;
              .ac-item {
                display: flex;
                align-items: center;
                margin-top: 20rpx;
                .ac {
                  display: flex;
                  align-items: center;
                  .ac-l {
                    width: 30rpx;
                    height: 30rpx;
                    background-size: cover;
                  }
                  .ac-r {
                    color: $textDarkGray-color;
                    font-size: 20rpx;
                    margin-left: 10rpx;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
