<template>
  <div class="container">
    <div class="content">
      <div class="search-bar" @click="searchClick">
        <i class="icon qb-icon-down-arrow-s"></i>
        <span>请输入商家或者商品名称</span>
      </div>
      <div class="category-c">
        <div class="l">

        </div>
        <div class="r">
          <i class="icon qb-icon-down-arrow-s"></i>
        </div>
      </div>
      <div class="category-list">
        <div class="filter-bar">
          <div class="item" v-for="(item, index) in filterList" :key="index">
            <span>{{item}}</span>
            <i class="icon qb-icon-down-arrow-s"></i>
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
              <img src="" alt="">
            </div>
            <div class="item-r">
              <div class="r-t">
                <span class="shop-name">快客(古龙路店)</span>
                <div class="t-c">
                  <div class="c-l">
                    <div class="l-l">
                      <i class="icon qb-icon-down-arrow-s" v-for="(itx, idx) in itemList" :key="idx"></i>
                    </div>
                    <span class="l-m">4.8</span>
                    <span class="l-r">月售202</span>
                  </div>
                  <div class="c-r">
                    <span class="r-l">30分钟</span>
                    <div class="r-m"></div>
                    <span class="r-r">780m</span>
                  </div>
                </div>
              </div>
              <div class="r-m">
                <span class="m-l">起送￥30</span>
                <div class="m-m"></div>
                <span class="m-r">配送 ￥5.6</span>
              </div>
              <div class="r-b">
                <span class="b-l">支持自取</span>
                <span class="b-r">极速配送</span>
              </div>
              <div class="activity-c">
                <div class="ac-item" v-for="(itm, idx) in activityList" :key="idx">
                  <div class="ac">
                    <span class="ac-l">{{itm}}</span>
                    <span class="ac-r">满30减20</span>
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
export default {
  data() {
    return {
      filterList: ['综合排序', '销量最高', '速度最快', '筛选'],
      tags: ['满减优惠', '点评高分', '新商家', '美团专送'],
      itemList: [1, 2, 3, 4, 5, 6, 7],
      activityList: ['减', '折', '首']
    }
  },
  methods: {
    searchClick() {
      wx.navigateTo({url: '/pages/searchList/main'})
    },
    categoryClick() {
       wx.navigateTo({url: '/pages/shoppingCart/main'})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .content {
    display: flex;
    flex-direction: column;
    background-color: $page-bgcolor;
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
        font-size: 28rpx;
        color: $textDarkGray-color;
        margin-left: 10rpx;
      }
    }
    .category-c {
      display: flex;
      align-items: center;
      background-color: magenta;
      height: 70rpx;
      margin-left: 20rpx;
      .l {
        display: flex;
        align-items: center;
        flex: 1;
      }
      .r {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70rpx;
        height: 70rpx;
        background-color: aquamarine;
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
            font-size: 28rpx;
            color: $textBlack-color;
          }
          i {
            font-size: 24rpx;
            color: $textBlack-color;
            margin-left: 10rpx;
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
              font-size: 24rpx;
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
            background-color: olive;
            img {
              width: 160rpx;
              height: 120rpx;
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
                color: #ACF4E3;
                font-size: 20rpx;
                border: 2rpx solid #ACF4E3;
                text-align: center;
                padding: 0 8rpx;
              }
              .b-r {
                color: #ACF4E3;
                font-size: 20rpx;
                border: 2rpx solid #ACF4E3;
                text-align: center;
                padding: 0 10rpx;
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
                    color: white;
                    font-size: 20rpx;
                    background-color: #FE6464;
                    width: 30rpx;
                    height: 30rpx;
                    text-align: center;
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
