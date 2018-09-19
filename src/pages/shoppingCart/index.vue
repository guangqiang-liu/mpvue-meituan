<template>
  <div class="container">
    <div class="header-c">
      <div class="header">
        <div class="h-l">
          <img src="">
        </div>
        <div class="h-r">
          <div class="r-t">
            <span class="t-l">起送￥80</span>
            <div class="s-l"></div>
            <span class="t-m">40分钟</span>
            <div class="s-r"></div>
            <span class="t-r">6.7km</span>
          </div>
          <span class="r-m">公告：本店所有菜品现做现卖保证新鲜! 本店已上线</span>
          <div class="r-b">
            <span class="b-l">减</span>
            <span class="b-r">满35减22；满65减40；满100减48</span>
            <i class="icon qb-icon-down-arrow-s"></i>
          </div>
        </div>
      </div>
       <div class="cate-c">
         <span class="c-l">菜单</span>
         <span class="c-m">评价</span>
         <span class="c-r">商家</span>
       </div>
    </div>
    <div class="list-c">
      <scroll-view class="list-l" :scroll-y="true">
        <div class="l-item" v-for="(item, index) in leftList" :key="index">
          <span>热销榜</span>
        </div>
      </scroll-view>
      <scroll-view class="list-r" :scroll-y="true">
        <div class="section">
          <span class="title">这是标题</span>
        </div>
        <div class="item-list" v-for="(itx, idx) in rightList" :key="idx">
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
      </scroll-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      rightList: [1, 2, 3, 4, 5, 6, 7, 8]
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
          background-color: aquamarine;
          border-radius: 8rpx;
        }
      }
      .h-r {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20rpx;
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
            margin-left: 20rpx;
          }
          .b-r {
            font-size: 24rpx;
            color: white;
            flex: 1;
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
      height: 100rpx;
      align-items: center;
      border-bottom: 2rpx solid $spLine-color;

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
      width: 140rpx;
      background-color: $page-bgcolor;
      .l-item {
        display: flex;
        width: 140rpx;
        align-items: center;
        justify-content: center;
        padding: 20rpx;
        box-sizing: border-box;
        border-bottom: 2rpx solid white;
        span {
          font-size: 24rpx;
          color: $textBlack-color;
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
          align-items: center;
          margin-bottom: 20rpx;
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
              justify-content: space-between;
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
          }
        }
      }
    }
  }
}
</style>
