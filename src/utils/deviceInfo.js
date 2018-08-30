/** Created by guangqiang on 2018-06-29 10:26:46 */

/** 设备信息 **/

const deviceInfo = {
  brand: wx.getSystemInfoSync().brand, // 手机型号
  model: wx.getSystemInfoSync().model, // 手机品牌,
  screenWidth: wx.getSystemInfoSync().screenWidth, // 屏幕宽度
  screenHeight: wx.getSystemInfoSync().screenHeight, // 屏幕高度
  windowWidth: wx.getSystemInfoSync().windowWidth, // 可使用窗口宽度
  windowHeight: wx.getSystemInfoSync().windowHeight, // 可使用窗口高度
  statusBarHeight: wx.getSystemInfoSync().statusBarHeight, // 状态栏的高度
  language: wx.getSystemInfoSync().language, // 微信设置的语言
  version: wx.getSystemInfoSync().version, // 微信版本号
  system: wx.getSystemInfoSync().system, // 操作系统版本
  platform: wx.getSystemInfoSync().platform, // 客户端平台
  fontSizeSetting: wx.getSystemInfoSync().fontSizeSetting, // 用户字体大小设置
  SDKVersion: wx.getSystemInfoSync().SDKVersion, // 客户端基础库版本

  // 当前config: debug \ release
  // mode: __DEV__ ? 'xdebug' : 'release'
}

export {deviceInfo}