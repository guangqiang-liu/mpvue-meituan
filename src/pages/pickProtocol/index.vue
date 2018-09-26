<template>
  <div class="container">
    <web-view class="webview" :src="url"></web-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://i.waimai.meituan.com/node/fetchrule?isMini=1'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .webview {
    display: flex;
    width: 100%;
    height: 100%;
  }
}
</style>