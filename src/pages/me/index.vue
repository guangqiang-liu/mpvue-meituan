<template>
  <div class="container">
    <div class="header-c">
      <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJvoc0l3Oe4lWTMtUvLd7UYm9IvSWNjM6S5ibZBu3OE5XbCEqgPw9llpibmkyqEX9GbLKOCfTIe6wWQ/132" alt="">
      <div class="info-c">
        <span class="name">光强</span>
        <span class="phone">15214313256</span>
      </div>
    </div>
    <div class="list-c" @click="itemClick">
      <div class="item" v-for="(item, index) in itemList" :key="index" :data-index="index">
        <div class="item-l">
          <i class='icon mt-red-packet-o'></i>
          <span>{{item.title}}</span>
        </div>
        <i class='icon mt-arrow-right-o'></i>
      </div>
    </div>
    <div class="btn">退出账号</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [
        {
          title: '美团红包',
          icon: 'mt-red-packet-o'
        }, 
        {
          title: '商家代金券',
          icon: 'mt-coupon-o'
        },
        {
          title: '我的地址',
          icon: 'mt-my-location-o'
        },
        {
          title: '邀请有奖',
          icon: 'mt-gift-o'
        },
        {
          title: '客服中心',
          icon: 'mt-customer-service-o'
        },
        {
          title: '帮助和反馈',
          icon: 'mt-help-o'
        },
        {
          title: '协议和说明',
          icon: 'mt-protocol-o'
        }]
    }
  },
  computed: {
    iconClass() {
      var str = `icon mt-red-packet-o`
      return str
    }
  },
  methods: {
    itemClick(e) {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .header-c {
    display: flex;
    align-items: center;
    height: 200rpx;
    background-color: #FFD26B;
    img {
      width: 120rpx;
      height: 120rpx;
      border-radius: 60rpx;
      margin-left: 30rpx
    }
    .info-c {
      display: flex;
      flex-direction: column;
      margin-left: 30rpx;
      .name {
        font-size: 32rpx;
        color: $textBlack-color;
        font-weight: bold;
      }
      .phone {
        font-size: 28rpx;
        color: $textBlack-color;
      }
    }
  }
  .list-c {
    display: flex;
    flex-direction: column;
    margin-top: 20rpx;
    background-color: white;
    .item {
      display: flex;
      align-items: center;
      height: 88rpx;
      border-bottom: 2rpx solid $spLine-color;
      padding: 0 20rpx;
      .item-l {
        display: flex;
        flex: 1;
        i {
          font-size: 32rpx;
          color: $textGray-color;
        }
        span {
          font-size: 32rpx;
          color: $textBlack-color;
          margin-left: 30rpx;
        }
      }
      i {
        font-size: 28rpx;
        color: $textGray-color;
      }
    }
    .item:last-child {
      border-bottom: 0rpx solid $spLine-color;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88rpx;
    background-color: white;
    margin-top: 20rpx;
    color: $textBlack-color;
    font-size: 32rpx;
  }
}
</style>
