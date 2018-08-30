/**
 * Created by guangqiang on 2017/10/3.
 */

/** 网络请求工具类的拓展类，便于后期网络层修改维护 **/

import HttpUtils from './HttpRequest'
import {API_URL, XIAMIMUSIC, XIAMI_URL} from '@/constants/hostConfig'
import {ApiSource} from '@/constants/commonType'
import {dataCache} from '../cache/cache'

/**
 * GET \ POST
 * 从缓存中读取数据
 * @param isCache 是否缓存
 * @param requestType 网络请求类型
 * @param url 请求url
 * @param params 请求参数
 * @param isLoading 是否显示Loading
 * @param source API资源
 * @param callback 是否有回调函数
 * @returns {value \ promise} 返回的值如果从缓存中取到数据就直接换行数据，或则返回promise对象
 */
const fetchData = (isCache, requestType) => (url, params, isLoading, source, callback) => {
  switch (source) {
    case ApiSource.XIAMIMUSIC:
      url = `${XIAMI_URL}${url}`
      break
    case ApiSource.TIMEMOVIE:
      url = `${TIME_MOVIE_URL}${url}`
      break
    default:
      url = `${API_URL}${url}`
      break
  }
  const fetchFunc = () => {
    let promise = HttpUtils.fetch(url, params, requestType, isLoading)
    if (callback && typeof callback === 'function') {
      promise.then(response => {
        return callback(response)
      })
    }
    return promise
  }
  return dataCache(url, fetchFunc, isCache)
}

/**
 * GET 请求
 * @param url
 * @param params
 * @param source
 * @param callback
 * @returns {{promise: Promise}}
 */
const getFetch = fetchData(false, 'GET')

/**
 * POST 请求
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
const postFetch = fetchData(false, 'POST')

/**
 * PUT 请求
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
const putFetch = fetchData(false, 'PUT')

/**
 * DELETE 请求
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
const deleteFetch = fetchData(false, 'DELETE')

/**
 * GET 请求，带缓存策略
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
const getFetchFromCache = fetchData(true, 'GET')

/**
 * POST请求参数校验，通过middleware 来实现自动校验表单参数是否合法
 * @param url
 * @param params
 */
const postFetchForValidator = (url, params) => {
  let promise
  promise = () => {
    return fetchData(false, 'POST')(url, {})
  }
  return {
    data: params,
    params,
    nextPayload: {
      promise: promise
    }
  }
}

export {getFetch, postFetch, putFetch, deleteFetch, getFetchFromCache, postFetchForValidator}