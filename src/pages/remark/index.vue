<template>
  <div class="container">
    <div class="content-c">
      <div class="input-c">
        <textarea placeholder="请输入备注，最多50个字哦" placeholder-style="font-size: 28rpx"/>
        <span>0 / 50</span>
      </div>
      <div class="tag-c">
        <div class="tag" v-for="(item, index) in tags" :key="index">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <div class="submit">完成</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['不吃辣', '少放葱', '多放辣', '不是蒜', '不吃香菜', '不吃葱']
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .content-c {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    .input-c {
      display: flex;
      height: 300rpx;
      border: 2rpx solid $spLine-color;
      margin: 30rpx;
      position: relative;
      background-color: white;
      box-sizing: border-box;
      textarea {
        margin: 20rpx;
      }
      span {
        position: absolute;
        right: 20rpx;
        bottom: 20rpx;
        font-size: 28rpx;
        color: $textDarkGray-color;
      }
    }
    .tag-c {
      display: flex;
      flex-wrap: wrap;
      background-color: white;
      .tag {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100rpx;
        height: 50rpx;
        border: 2rpx solid $spLine-color;
        margin-left: 30rpx;
        margin-bottom: 30rpx;
        span {
          font-size: 20rpx;
          color: $textBlack-color;
        }
      }
    }
  }
  .submit {
    background-color: #FFCF6E;
    display: flex;
    height: 88rpx;
    width: auto;
    color: $textBlack-color;
    font-size: 32rpx;
    margin: 40rpx;
    align-items: center;
    justify-content: center;
    border-radius: 8rpx;
  }
}
</style>
