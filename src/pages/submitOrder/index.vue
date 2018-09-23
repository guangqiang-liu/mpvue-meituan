<template>
  <div class="container">
    <div class="header-c">
      <div class="tab-c">
        <div class="left">外卖配送</div>
        <div class="right">到店自取</div>
      </div>
      <div class="address-c" @click="addressClick">
        <i class="icon mt-location-s"></i>
        <div class="address">
          <span class="address-info">上海市，静安区，上海马戏城，3楼，meituan外卖</span>
          <span class="user-info">刘光强 先生  15214313256</span>
        </div>
        <i class="icon mt-arrow-right-o"></i>
      </div>
      <div class="line-sp"></div>
      <div class="delivery-time">
        <i class="icon mt-clock-o"></i>
        <div class="content">
          <span class="c-l">立即送出</span>
          <span class="c-r">大约 20：00送达</span>
        </div>
        <i class="icon mt-arrow-right-o"></i>
      </div>
    </div>
    <div class="item-list">
      <div class="section">
        <img src="" alt="">
        <span>汉堡王 (龙茗路店))</span>
        <div>商家自配</div>
      </div>
      <div class="list">
        <div class="item" v-for="(item, index) in itemList" :key="index">
          <img src="" alt="">
          <div class="item-r">
            <div class="r-t">
              <span>薯条 (中暑)</span>
              <span>￥10</span>
            </div>
            <span>x2</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="fold">
          <span>点击收起</span>
          <i class="icon mt-arrow-right-o"></i>
        </div>
        <div class="package-cast">
          <span>包装费</span>
          <span>￥8.0</span>
        </div>
        <div class="delivery-cast">
          <span>配送费</span>
          <span>￥8.0</span>
        </div>
        <sep-line></sep-line> 
        <div class="discount">
          <div class="l">
            <div>减</div>
            <span class="title">满减优惠</span>
          </div>
          <span class="r">-￥3.5</span>
        </div>
        <div class="red-packet" @click="redPacketClick">
          <span class="l">美团红包</span>
          <div class="r">
            <span>2张可用</span>
            <i class="icon mt-arrow-right-o"></i>
          </div>
        </div>
        <div class="coupon" @click="couponClick">
          <span class="l">商家代金券</span>
          <div class="r">
            <span>2张可用</span>
            <i class="icon mt-arrow-right-o"></i>
          </div>
        </div>
        <sep-line></sep-line> 
        <div class="totle-price">
          <span class="l">已优惠￥30</span>
          <span class="m">小计</span>
          <span class="r">￥100.9</span>
        </div>
      </div>
    </div>
    <div class="privacy-c">
      <div class="top">
        <div class="t-l">
          <i class="icon mt-lock-o" :style="{color: '#434343', 'font-size': 28 + 'rpx'}"></i>
          <span>号码保护</span>
          <i class="icon mt-help-o" :style="{color: '#999', 'font-size': 20 + 'rpx'}"></i>
        </div>
        <switch bindchange="switch2Change"/>
      </div>
      <span>对商家骑手隐藏您的真实手机号，保护您的隐私</span>
    </div>
    <div class="bottom-c">
      <div class="b-top">
        <span>支付方式</span>
        <span>在线支付</span>
      </div>
      <div class="b-mid" @click="remarkClick">
        <span class="mid-l">备注</span>
        <div class="mid-r">
          <span>口味、偏好等要求</span>
          <i class="icon mt-arrow-right-o"></i>
        </div>
      </div>
      <div class="b-btm">
        <span class="b-l">餐具数量</span>
        <div class="b-r">
          <i class="icon mt-leaf-o" :style="{color: '#00CB91', 'font-size': 38 + 'rpx'}"></i>
          <span class="s-l">一起为环保助力</span>
          <span class="s-r">未选择</span>
          <i class="icon mt-arrow-right-o" :style="{color: '#999', 'font-size': 28 + 'rpx'}"></i>
        </div>
      </div>
    </div>
    <div class="pay-btn">
      <div class="top">
        <span class="s-l">微信支付</span>
        <span class="s-m">￥300.8</span>
        <span class="s-r">已优惠￥100</span>
      </div>
    </div>
  </div>
</template>

<script>
import sepLine from "@/components/sep-line";

export default {
  data() {
    return {
      itemList: [1, 2, 3, 4]
    }
  },
  computed: {
    
  },
  components: {
    sepLine
  },
  methods: {
    addressClick() {
      wx.navigateTo({url: '/pages/addressList/main'})
    },
    redPacketClick() {
      wx.navigateTo({url: '/pages/redPacket/main'})
    },
    couponClick() {
      wx.navigateTo({url: '/pages/couponList/main'})
    },
    remarkClick() {
      wx.navigateTo({url: '/pages/remark/main'})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #F9F9F9;
  .header-c {
    display: flex;
    flex-direction: column;
    margin: 20rpx;
    background-color: white;
    .tab-c {
      display: flex;
      height: 88rpx;
      align-items: center;
      background-color: white;
      .left {
        align-items: center;
        justify-content: center;
        display: flex;
        flex: 1;
        border-right: 2rpx solid $spLine-color;
        font-size: 32rpx;
        color: $textBlack-color;
        height: 88rpx;
      }
      .right {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 88rpx;
        flex: 1;
        background-color: $page-bgcolor;
        font-size: 32rpx;
        color: $textBlack-color;
      }
    }
    .address-c {
      display: flex;
      background-color: white;
      padding: 20rpx 0;
      i {
        font-size: 32rpx;
        margin: 20rpx;
        color: #434343;
      }
      .address {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .address-info {
          font-size: 32rpx;
          color: $textBlack-color;
        }
        .user-info {
          font-size: 20rpx;
          color: $textGray-color;
        }
      }
    }
    .line-sp {
      height: 2rpx;
      background-color: $spLine-color;
      flex: 1;
      margin: 0 20rpx;
    }
    .delivery-time {
      display: flex;
      align-items: center;
      background-color: white;
      padding: 0 20rpx;
      i {
        font-size: 28rpx;
      }
      .content {
        display: flex;
        align-items: center;
        flex: 1;
        margin: 20rpx;
        .c-l {
          font-size: 32rpx;
          color: $textBlack-color;
        }
        .c-r {
          font-size: 24rpx;
          color: $theme-color;
          margin-left: 20rpx;
        }
      }
    }
  }
  .item-list {
    display: flex;
    flex-direction: column;
    margin: 0 20rpx;
    background-color: white;
    .section {
      display: flex;
      align-items: center;
      align-items: center;
      height: 88rpx;
      padding: 0 20rpx;
      img {
        width: 40rpx;
        height: 40rpx;
        border-radius: 20rpx;
        background-color: magenta;
      }
      span {
        font-size: 28rpx;
        color: $textGray-color;
        flex: 1;
        margin-left: 20rpx;
      }
      div {
        color: $textBlack-color;
        font-size: 20rpx;
        padding: 4rpx 10rpx;
        border: 2rpx solid $textBlack-color;
      }
    }
    .list {
      display: flex;
      flex-direction: column;
      background-color: white;
      .item {
        display: flex;
        height: 120rpx;
        flex: 1;
        background-color: $page-bgcolor;
        margin-bottom: 10rpx;
        padding-top: 20rpx;
        img {
          width: 100rpx;
          height: 100rpx;
          background-color: chocolate;
          margin-left: 20rpx;
        }
        .item-r {
          display: flex;
          flex: 1;
          flex-direction: column;
          margin: 0 20rpx;
          .r-t {
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              font-size: 28rpx;
              color: $textBlack-color;
            }
          }
          span {
            font-size: 20rpx;
              color: $textGray-color;
          }
        }
      }
    }
    .footer {
      display: flex;
      flex-direction: column;
      background-color: white;
      .fold {
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: center;
        padding: 10rpx;
        margin-top: 30rpx;
        border: 2rpx solid $spLine-color;
        i {
          font-size: 20rpx;
          color: $textDarkGray-color;
        }
        span {
          font-size: 20rpx;
          color: $textDarkGray-color;
          margin-right: 10rpx;
        }
      }
      .package-cast {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20rpx;
        span {
          font-size: 28rpx;
          color: $textBlack-color;
        }
      }
      .delivery-cast {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20rpx;
        span {
          font-size: 28rpx;
          color: $textBlack-color;
        }
      }
      .discount {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20rpx;
        .l {
          display: flex;
          align-items: center;
          flex: 1;
          div {
            font-size: 20rpx;
            color: white;
            background-color: #FF5151;
            width: 30rpx;
            height: 30rpx;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .title {
            font-size: 20rpx;
            color: $textGray-color;
            margin-left: 10rpx;
          }
        }
        span {
          font-size: 28rpx;
          color: #FF5151;
        }
      }
      .red-packet {
        display: flex;
        align-content: center;
        margin: 20rpx;
        justify-content: space-between;
        .l {
          font-size: 28rpx;
          color: $textBlack-color;
        }
        .r {
          display: flex;
          align-items: center;
          span {
            font-size: 28rpx;
            color: #FF5151;
          }
          i {
            font-size: 28rpx;
            margin-left: 20rpx;
          }
        }
      }
      .coupon {
        display: flex;
        align-content: center;
        margin: 20rpx;
        justify-content: space-between;
        .l {
          font-size: 28rpx;
          color: $textBlack-color;
        }
        .r {
          display: flex;
          align-items: center;
          span {
            font-size: 28rpx;
            color: #FF5151;
          }
          i {
            font-size: 28rpx;
            margin-left: 20rpx;
          }
        }
      }
      .totle-price {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 20rpx;
        .l {
          font-size: 28rpx;
          color: $textGray-color;
        }
        .m {
          font-size: 28rpx;
          color: $textBlack-color;
          margin: 0 20rpx;
        }
        .r {
          font-size: 28rpx;
          color: #FF5151;
        }
      }
    }
  }
  .privacy-c {
    display: flex;
    flex-direction: column;
    height: 160rpx;
    background-color: white;
    margin: 20rpx;
    justify-content: center;
    .top {
      display: flex;
      align-items: center;
      margin: 0 20rpx;
      .t-l {
        display: flex;
        align-items: center;
        flex: 1;
        span {
          font-size: 32rpx;
          color: $textBlack-color;
          margin: 0 10rpx;
        }
      }
    }
    span {
      font-size: 20rpx;
      color: $textGray-color;
      margin: 0 20rpx;
    }
  }
  .bottom-c {
    display: flex;
    background-color: white;
    margin: 20rpx;
    margin-top: 0;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 186rpx;
    .b-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 88rpx;
      margin: 0 20rpx;
      border-bottom: 2rpx solid $spLine-color;
      span {
        font-size: 32rpx;
        color: $textBlack-color;
      }
    }
    .b-mid {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 88rpx;
      margin: 0 20rpx;
      border-bottom: 2rpx solid $spLine-color;
      .mid-l {
        font-size: 32rpx;
        color: $textBlack-color;
      }
      .mid-r {
        display: flex;
        align-items: center;
        span {
          font-size: 32rpx;
          color: $textGray-color;
        }
        i {
          font-size: 28rpx;
          color: $textGray-color;
          margin-left: 20rpx;
        }
      }
    }
    .b-btm {
      display: flex;
      background-color: white;
      margin: 20rpx;
      justify-content: space-between;
      .b-l {
        font-size: 32rpx;
        color: $textBlack-color;
      }
      .b-r {
        display: flex;
        align-items: center;
        margin: 0 20rpx;
        .s-l {
          font-size: 28rpx;
          color: #00CB91;
          margin: 0 10rpx;
        }
        .s-r {
          font-size: 28rpx;
          color: $textGray-color;
          margin-right: 20rpx;
        }
      }
    }
  }
  .pay-btn {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 166rpx;
    background-color: #4EAA31;
    justify-content: center;
    .top {
      display: flex;
      height: 50rpx;
      align-items: center;
      margin-top: 30rpx;
      .s-l {
        font-size: 32rpx;
        color: white;
      }
      .s-m {
        font-size: 36rpx;
        color: white;
        font-weight: bold;
        margin: 0 20rpx;
      }
      .s-r {
        font-size: 24rpx;
        color: white;
      }
    }
  }
}
</style>
