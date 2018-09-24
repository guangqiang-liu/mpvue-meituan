/**
 * Created by guangqiang on 2017/10/1.
 */

const host = {
  dev: {
    API_URL: 'https://meituan.cangdu.org',
    XIAMI_URL: 'https://api-m.mtime.cn',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com',
    appId: 'wx3d5c531f5e123456',
    envVersion: 'develop'
  },
  test: {
    API_URL: 'https://meituan.cangdu.org',
    XIAMI_URL: 'http://10.10.21.108:9990',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com',
    appId: 'wx3d5c531f5e123456',
    envVersion: 'develop'
  },
  qa: {
    API_URL: 'https://meituan.cangdu.org',
    XIAMI_URL: 'http://xiamirun.avosapps.com',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com'
  },
  pre: {
    API_URL: 'https://meituan.cangdu.org',
    XIAMI_URL: 'https://api-m.mtime.cn',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com',
    appId: 'wx3d5c531f5e123456',
    envVersion: 'develop'
  },
  prd: {
    API_URL: 'https://wx.waimai.meituan.com',
    XIAMI_URL: 'https://api-m.mtime.cn',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com',
    appId: 'wx3d5c531f5e123456',
    envVersion: 'trial'
  }
}

let ENV = 'prd'
let currentHost = host[ENV]

const SET_HOST = (env = 'dev') => {
  ENV = env
  currentHost = host[ENV]
}

const API_URL = currentHost.API_URL
const XIAMI_URL = currentHost.XIAMI_URL
const MSITE_URL = currentHost.MSITE_URL
const VENILOG_URL = currentHost.VENILOG_URL
export {ENV, API_URL, MSITE_URL, VENILOG_URL, XIAMI_URL, SET_HOST, currentHost}