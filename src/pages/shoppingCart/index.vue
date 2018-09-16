<template>
  <div class="container">
    <div class="header-c">
      <div class="header">
        <div class="h-l">
          <img src="">
        </div>
        <div class="h-r">
          <div class="r-l">
            <span class="shop-name">演示效果</span>
            <span class="delivery">商家配送 / 分钟送达 / 配送费￥5</span>
            <span class="tip">公告：欢迎光临，用餐高峰请提前下单，谢谢</span>
          </div>
          <div class="r-r">
            <i class="icon qb-icon-down-arrow-s"></i>
          </div>
        </div>
      </div>
       <div class="cate-c">
      </div>
    </div>
    <div class="list-c">
      <scroll-view class="list-l" :scroll-y="true">
        <div class="l-item" v-for="(item, index) in leftList" :key="index">
          <span>热销榜</span>
        </div>
      </scroll-view>
      <scroll-view class="list-r" :scroll-y="true">
        <div class="r" v-for="(item, index) in rightList" :key="index">
          <div class="section-header">
            <span class="title">{{item.title}}</span>
            <span class="sub-title">这是子标题</span>
          </div>
          <div class="item-list" v-for="(itx, idx) in item.lists" :key="idx">
            <div class="item">
              <div class="item-l">
                <img src="" alt="">
              </div>
              <div class="item-r">
                <span class="title">手撕包菜</span>
                <span class="sub-title">手撕包菜，酸甜可口</span>
                <span class="sale-num">月售1000 赞100</span>
                <div class="r-t">
                  <span class="price">￥40.3</span>
                  <div class="sku">
                    <span>选规格</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      rightList: [
        {
          title: '热销榜',
          lists: [1, 2, 3, 4]
        },
        {
          title: '热销榜2',
          lists: [1, 2, 3, 4]
        },
        {
          title: '热销榜3',
          lists: [1, 2, 3, 4]
        },
        {
          title: '热销榜4',
          lists: [1, 2, 3, 4]
        },
      ]
    }
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
      background-color: orangered;
      .h-l {
        width: 136rpx;
        height: 136rpx;
        border-radius: 8rpx;
        margin-left: 20rpx;
        img {
          width: 136rpx;
          height: 136rpx;
          background-color: aquamarine;
          border-radius: 8rpx;
        }
      }
      .h-r {
        display: flex;
        height: 150rpx;
        justify-content: space-between;
        background-color: orange;
        margin: 20rpx;
        width: 100%;
        .r-l {
          display: flex;
          flex: 1;
          background-color: darkviolet;
          flex-direction: column;
          justify-content: space-around;
          .shop-name {
            color: white;
            font-size: 32rpx;
            font-weight: bold;
          }
          .delivery {
            color: white;
            font-size: 20rpx;
          }
          .tip {
            color: white;
            font-size: 20rpx;
          }
        }
        .r-r {
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            color: white;
            font-size: 32rpx;
          }
        }
      }
    }
    .cate-c {
      display: flex;
      height: 110rpx;
      background-color: darkgoldenrod;
    }
  }
  .list-c {
    display: flex;
    position: fixed;
    top: 314rpx;
    left: 0;
    right: 0;
    bottom: 0;
    .list-l {
      display: flex;
      flex-direction: column;
      width: 180rpx;
      .l-item {
        display: flex;
        width: 180rpx;
        height: 132rpx;
        align-items: center;
        justify-content: center;
        background-color: darksalmon;
        border-bottom: 2rpx solid  $spLine-color;
        span {
          font-size: 32rpx;
          color: $textBlack-color;
        }
      }
    }
    .list-r {
      display: flex;
      flex-direction: column;
      flex: 1;
      .r {
        display: flex;
        flex-direction: column;
        .section-header {
          display: flex;
          align-items: center;
          background-color: #F5F5F5;
          height: 98rpx;
          background-color: aqua;
          margin-left: 10rpx;
          flex-direction: column;
          .title {
            margin-left: 20rpx;
            font-size: 32rpx;
            color: $textBlack-color;
            font-weight: bold;
          }
          .sub-title {
            margin-left: 20rpx;
            font-size: 24rpx;
            color: $textGray-color;
          }
        }
        .item-list {
          display: flex;
          background-color: blue;
          margin: 0 20rpx;
          flex-direction: column;
          .item {
            height: 200rpx;
            display: flex;
            align-items: center;
            .item-l {
              width: 160rpx;
              height: 160rpx;
              img {
                width: 160rpx;
                height: 160rpx;
                background-color: green
              }
            }
            .item-r {
              display: flex;
              flex-direction: column;
              margin-left: 20rpx;
              justify-content: space-between;
              background-color: mediumseagreen;
              flex: 1;
              height: 160rpx;
              .title {
                font-size: 28rpx;
                color: $textBlack-color;
                font-weight: bold;
                margin-top: 8rpx;
              }
              .sub-title {
                font-size: 20rpx;
                color: $textGray-color;
              }
              .sale-num {
                font-size: 20rpx;
                color: $textGray-color;
              }
              .r-t {
                display: flex;
                align-items: center;
                background-color: hotpink;
                justify-content: space-between;
                .price {
                  font-size: 32rpx;
                  color: red;
                }
                .sku {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: orangered;
                  padding: 8rpx 12rpx;
                  border-radius: 25rpx;
                  span {
                    font-size: 20rpx;
                    color: $textBlack-color
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
