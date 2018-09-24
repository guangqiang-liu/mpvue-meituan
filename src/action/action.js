/**
 * Created by guangqiang on 2017/10/3.
 */

import {getFetch, postFetch, putFetch, getFetchFromCache, postFetchForValidator} from '@/network/request/HttpExtension'
import {PATH} from '@/constants/pathConfig'
import {ApiSource} from '@/constants/commonType'

const movieList = params =>  getFetch(PATH.PICTURE_LIST, params, false)
const movieShowTimeList = params =>  getFetch(PATH.MOVIE_SHOWTIME, params, false, ApiSource.TIMEMOVIE, () => {})
const movieComeingNewList = params =>  getFetch(PATH.MOVIE_COMEING_NEW, params, ApiSource.TIMEMOVIE)
const movieDetail = params => getFetch(PATH.MOVIE_DETAIL, params, ApiSource.TIMETICKET)

const queryHomeHeadCategory = params => postFetch(`${PATH.HOME_HEAD_CATEGORY}?ui=${params.ui}&region_id=${params.region_id}&region_version=${params.region_version}`, params, false)
const createActivity = params => postFetch(PATH.CREATE_ACTIVITY, params, true)
const getActivityDetail = params => getFetch(`${PATH.GET_ACTIVITY_DETAIL}/${params.id}?longitude=${params.longitude}&latitude=${params.latitude}&append=${params.append}`, {}, false)
const getActivityDetailGpsNull = params => getFetch(`${PATH.GET_ACTIVITY_DETAIL}/${params.id}?append=${params.append}`, {}, false)
const bargainAction = params => postFetch(PATH.BARGAIN_EVENT, params, true)
const bargainParticipatorList = params => getFetch(PATH.BARGAIN_PARTICIPATOR_LIST, params, false)
const userLogin = params => postFetch(`${PATH.LOGIN}?trace=true`, params, false)
const updateUserLogin = params => putFetch(PATH.UPDATE_USER_INFO, params, false)
const refreshToken = params => postFetch(PATH.REFRESH_TOKEN, params, false)
const queryActivityMaxLimit = params => getFetch(PATH.QUERY_ACTIVITY_MAXLIMIT, params, false)
const conmuseRecordList = params => getFetch(PATH.CONSUME_RECORD_LIST, params, false)
const getActivityList = params => getFetch(PATH.GETACTIVITY_LIST, params, false)
const getConsumeDetailData = params => getFetch(`${PATH.PAYMENT_DETAIL}/${params.id}?append=${params.append}`, {}, false)
const createOrderData = params => postFetch(PATH.CREATE_ORDER, params, false)
const payOrderData = params => postFetch(`${PATH.PAY_ORDER}/${params.id}/pay`, params, false)
const gotCouponFinish = params => postFetch(`${PATH.GOT_COUPON_FINISH}/${params.id}/metadata`, params, false)
const getCouponCard = params => postFetch(PATH.GET_COUPON_CARD, params, false)
const getCouponList = params => getFetch(PATH.GET_COUPON_LIST, params, false)
const queryShopData = params => getFetch(`${PATH.QUERY_SHOP_DATA}/${params.id}?append=${params.append}`, {}, false)
const getMyCouponList = params => getFetch(PATH.GET_MY_COUPON_LIST, params, false)
const shareStatistic = params => postFetch(PATH.SHARE_STATISTIC, params, false)
const cancelOrder = params => putFetch(`${PATH.CANCEL_ORDER}/${params.id}/cancel`, params, false)
const miniAppLogin = params => postFetch(`${PATH.MINIAPP_LIGIN}?scene=bind`, params, false)

const postFormId = () => {}

export {
  movieList,
  movieDetail,
  getCityLocation,
  queryHomeHeadCategory
}