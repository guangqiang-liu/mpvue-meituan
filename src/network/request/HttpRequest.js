/**
 * Created by guangqiang on 2017/10/3.
 */

/** 封装的基于Fetch网络请求工具类 **/

import responseCode from '@/constants/responseCode'
import {request, login} from '@/utils/wxapi'
import {API_URL, XIAMIMUSIC} from '@/constants/hostConfig'
import {PATH} from '@/constants/pathConfig'
import {currentHost} from "@/constants/hostConfig"
import {errorCode} from "@/constants/errorCodeMap"
import {timestampToCommonDate} from "@/utils/formatTime"
import {_array} from "@/utils/arrayExtension"

/**
 * fetch 网络请求的header，可自定义header 内容
 * @type {{Accept: string, Content-Type: string, accessToken: *}}
 */
const header = {
  'Content-Type': 'application/json'
}

/**
 * GET请求时，拼接请求URL
 * @param url 请求URL
 * @param params 请求参数
 * @returns {*}
 */
const handleUrl = url => params => {
  if (params) {
    let paramsArray = []
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
    if (url.search(/\?/) === -1) {
      typeof (params) === 'object' ? url += '?' + paramsArray.join('&') : url
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return url
}

/**
 * fetch 网络请求超时处理
 * @param original_promise 原始的fetch
 * @param timeout 超时时间 30s
 * @returns {Promise.<*>}
 */
const timeoutFetch = (original_fetch, timeout = 30000) => {
  let timeoutBlock = () => {}
  let timeout_promise = new Promise((resolve, reject) => {
    timeoutBlock = () => {
      // 请求超时处理
      reject('timeout promise')
    }
  })

  let abortable_promise = Promise.race([
    original_fetch,
    timeout_promise
  ])

  setTimeout(() => {
    timeoutBlock()
  }, timeout)

  return abortable_promise
}

async function handleLogin(callback) {
  return callback()
  var loginInfo = wx.getStorageSync('loginInfo') || {}
  var refreshToken = loginInfo.refreshToken
  var newData = new Date().getTime()
  if (loginInfo.accessToken) {
    if (loginInfo.expiration > newData) {
      console.log('未过期')
      return callback()
    } else {
      console.log('已过期')
      let params = {
        url: `${API_URL}${PATH.REFRESH_TOKEN}`,
        data: {refreshToken: refreshToken},
        method: 'POST'
      }
      const refreshTokenInfo = await request(params)
      if (refreshTokenInfo.code != 0) {
        const wxLoginInfo = await login()
        let param = {
          url: `${API_URL}${PATH.LOGIN}?trace=true`,
          data: {appId: currentHost.appId, jsCode: wxLoginInfo.code},
          method: 'POST'
        }
        const qbLoginInfo = await request(param)
        console.log('silentUserId:', qbLoginInfo.data.user.id)
        console.log('silentAccessToken:', qbLoginInfo.data.accessToken)
        wx.setStorageSync('loginInfo', qbLoginInfo.data)
        return callback()
      } else {
        wx.setStorageSync('loginInfo', Object.assign(loginInfo, refreshTokenInfo.data))
        return callback()
      }
    }
  } else {
    console.log('未登录')
    const wxLoginInfo = await login()
    let params = {
      url: `${API_URL}${PATH.LOGIN}?trace=true`,
      data: {appId: currentHost.appId, jsCode: wxLoginInfo.code},
      method: 'POST'
    }
    const qbLoginInfo = await request(params)
    console.log('silentUserId:', qbLoginInfo.data.user.id)
    console.log('silentAccessToken:', qbLoginInfo.data.accessToken)
    wx.setStorageSync('loginInfo', qbLoginInfo.data)
    return callback()
  }
}

const networkLog = (url, params, res, beforeRequest, isSuccess) => {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const route = currentPage.route
  const networkType = wx.getStorageSync('networkType')
  const afterRequest = new Date().getTime()
  const timeDif = afterRequest - beforeRequest
  var networkArr = wx.getStorageSync('networkArr') || []
  if (networkArr.length >= 30) {
    wx.removeStorageSync('networkArr')
    networkArr = []
  }
  var time = timestampToCommonDate(new Date().getTime())
  networkArr = _array.unshift(networkArr, {url, params, res, time, route, timeDif, networkType, isSuccess})
  wx.setStorageSync('networkArr', networkArr)
}

const HttpUtils = {
  /**
   * fetch网络请求
   * @param {string} [url=''] 网络请求URL
   * @param {*} [params={}] 网络请求参数
   * @param {string} [requestType='GET'] 请求类型
   * @param {boolean} [isLoading=true] 是否需要Loading
   */
  fetch: (url = '', params = {}, requestType = 'GET', isLoading = false) => {
    const fetchCallback = () => {
      let promise = timeoutFetch(new Promise((resolve, reject) => {
        wx.showNavigationBarLoading()
        isLoading ? wx.showLoading({title: '加载中...', mask: true}) : null
        const beforeRequest = new Date().getTime()
        wx.request({
          url: url,
          data: params,
          header: header,
          method: requestType,
          success: function (res) {
            let isSuccess = false
            let resCode = res.statusCode
            if (parseInt(resCode / 100) == 2) {
              isSuccess = true
              resolve(res.data)
            } else if (resCode == responseCode.TOKEN_INVALID) {
            } else if (resCode == responseCode.USER_LOGOUT) {
            } else {
              wx.showToast({ title: '服务器异常', icon: 'none', duration: 4000 })
            }
            networkLog(url, params, res.data, beforeRequest, isSuccess)
          },
          fail: function (e) {
            wx.showToast({ title: e.errMsg, icon: 'none', duration: 4000 })
            networkLog(url, params, e, beforeRequest, false)
            reject(e)
          },
          complete: function () {
            isLoading ? wx.hideLoading() : null
            wx.hideNavigationBarLoading()
            wx.stopPullDownRefresh()
          }
        })
      }))
      return promise
    }
    return handleLogin(fetchCallback)
  }
}

export default HttpUtils