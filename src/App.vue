
<script>
import {timestampToCommonDate} from "@/utils/formatTime"
import {_array} from "@/utils/arrayExtension"

export default {
  onLaunch(options) {
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
             updateManager.applyUpdate()
          })
          updateManager.onUpdateFailed(function () {
            wx.showModal({
              title: '更新提示',
              content: '发现新版本，请删除小程序重新搜索下载最新版本！',
            })
          })
        }
      })
    } else {
      wx.showModal({
        title: '温馨提示',
        content: '当前微信版本过低，无法更新小程序，请升级微信到最新版本！'
      })
    }
  },
  created() {
    console.log("app created and cache logs by setStorageSync");
  },
  mounted() {
    wx.onNetworkStatusChange(function(res) {
      wx.setStorageSync('networkType', res.networkType)
      if (!res.isConnected) {
        wx.showToast({
          title: '网络链接失败，请检查网络！',
          icon: 'none',
          duration: 5000
        })
      }
    })
    wx.getNetworkType({
      success: function(res) {
        wx.setStorageSync('networkType', res.networkType)
      }
    })
  },
  onShow(options) {
    if (options.referrerInfo.appId) {
      console.log("options.referrerInfo", options.referrerInfo);
      wx.setStorageSync("referrerInfo", options.referrerInfo);
    }
  },
  onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/notFound/main'
    })
  },
  onError (err) {
    console.log('程序报错啦：', err)
    var pages = getCurrentPages()
    if (pages.length <= 0) return
    var currentPage = pages[pages.length - 1]
    var url = currentPage.route
    var options = JSON.stringify(currentPage.options)
    var time = timestampToCommonDate(new Date().getTime())
    var pageErrArr = wx.getStorageSync('pageErrArr') || []
    pageErrArr = _array.unshift(pageErrArr, {url, options, err, time})
    wx.setStorageSync('pageErrArr', pageErrArr)
  }
};
</script>

<style lang="scss">
@import "assets/iconfont.less";

page {
  box-sizing: border-box;
  background-color: $page-bgcolor;
  min-height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: $page-bgcolor;
}

/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>