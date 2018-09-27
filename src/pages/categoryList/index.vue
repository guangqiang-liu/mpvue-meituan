<template>
  <div class="container">
    <div class="content">
      <div class="search-bar" @click="searchClick">
        <i class="icon mt-search-o"></i>
        <span>请输入商家或者商品名称</span>
      </div>
      <div class="category-c">
        <scroll-view class="l" scroll-x>
          <view class="tab-item" v-for="(item, index) in tabList" :key="index">{{item}}</view>
          <view class="line"></view>
        </scroll-view>
        <div class="r">
          <i class="icon mt-arrow-down-o"></i>
        </div>
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
          <div class="item" v-for="(item, index) in itemList" :key="index" @click="categoryClick">
            <div class="item-l">
              <img :src="item.pic_url">
              <img class="tag-img" :src="item.poi_promotion_pic">
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
              </div>
              <div class="r-b">
                <span class="b-l">支持自取</span>
                <span class="b-r">极速配送</span>
              </div>
              <div class="activity-c">
                <div class="ac-item" v-for="(itm, idx) in item.discounts2" :key="idx">
                  <div class="ac">
                    <img class="ac-l" :src="itm.icon_url"/>
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
import {categoryData} from './data'

export default {
  data() {
    return {
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
      itemList: [],
      stars: [1, 2, 3, 4],
      tabList: ['美食', '快餐便当', '汉堡薯条', '意面披萨', '包子粥店', '米粉面馆', '饺子混沌', '麻辣烫冒菜', '川湘菜', '地方菜系', '炸鸡炸串', '特色小吃', '夹馍饼类', '鸭脖卤味', '日料寿司', '韩式料理', '香锅干锅', '嗨吃火锅', '龙虾烧烤', '轻食沙拉']
    }
  },
  methods: {
    searchClick() {
      wx.navigateTo({url: '/pages/searchList/main'})
    },
    categoryClick() {
       wx.navigateTo({url: '/pages/shoppingCart/main'})
    }
  },
  mounted() {
    this.itemList = categoryData.data.poilist
  }
}
</script>

<style lang="scss" scoped>
.container {
  .content {
    display: flex;
    flex-direction: column;
    background-color: #FAFAFA;
    .search-bar {
      display: flex;
      margin: 20rpx;
      background-color: #EFEFEF;
      align-items: center;
      height: 60rpx;
      border-radius: 30rpx;
      margin-bottom: 0;
      i {
        font-size: 28rpx;
        color: $textDarkGray-color;
        margin-left: 20rpx;
      }
      span {
        font-size: 24rpx;
        color: $textDarkGray-color;
        margin-left: 10rpx;
      }
    }
    .category-c {
      display: flex;
      height: 70rpx;
      position: relative;
      background-color: #FAFAFA;
      .l {
        text-align: center;
        line-height: 70rpx;
        white-space: nowrap;
        position: relative;
        .tab-item {
          transition: all 0.2s;
          font-size: 24rpx;
          height: 70rpx;
          display: inline-block;
          color: $textDarkGray-color;
          margin: 0 30rpx;
        }
        .tab-item:first-child {
          color: $theme-color;
          font-weight: bold;
        }
        .line {
          display: block;
          position: absolute;
          left: 38rpx;
          height: 4rpx;
          background: $theme-color;
          bottom: 38rpx;
          transition: left 0.2s;
          z-index: 99;
          width: 32rpx;
        }
      }
      .r {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70rpx;
        height: 70rpx;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #FAFAFA;
        flex: 1;
        i {
          font-size: 24rpx;
          color: $textGray-color;
        }
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
            .tag-img {
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
                    color: $textDarkGray-color;
                    margin-left: 10rpx;
                  }
                  .l-r {
                    font-size: 20rpx;
                    color: $textDarkGray-color;
                    margin-left: 20rpx;
                  }
                }
                .c-r {
                  display: flex;
                  align-items: center;
                  .r-l {
                    font-size: 20rpx;
                    color: $textDarkGray-color;
                  }
                  .r-m {
                    width: 2rpx;
                    height: 20rpx;
                    background-color: $textGray-color;
                    margin: 0 10rpx;
                  }
                  .r-r {
                    font-size: 20rpx;
                    color: $textDarkGray-color;
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
                color: $textDarkGray-color;
              }
              .m-m {
                width: 2rpx;
                height: 20rpx;
                margin: 0 10rpx;
                background-color: $textGray-color;
              }
              .m-r {
                font-size: 20rpx;
                color: $textDarkGray-color;
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
