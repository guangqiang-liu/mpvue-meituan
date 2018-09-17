<template>
  <div class="container">
    <div class="list-c">
      <div class="item" v-for="(item, index) in itemList" :key="index">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .list-c {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      flex-direction: column;
      height: 400rpx;
      background-color: white;
      margin-top: 20rpx;
    }
  }
}
</style>
