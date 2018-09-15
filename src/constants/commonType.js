/**
 * Created by guangqiang on 2017/10/3.
 */

const monthList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const activityTabList = [
  {
    title: "全部",
    type: "all"
  },
  {
    title: "进行中",
    type: "doing"
  },
  {
    title: "已结束",
    type: "end"
  }
]

const orderStatus = {
  '01': '待支付',
  '11': '已取消',
  '12': '超时取消',
  '20': '已部分支付',
  '21': '支付成功'
}

const bargainTip = [
  '扶我起来，我还能砍！',
  '唔给力吧！',
  '做好事，不用谢',
  '这一刀可还行伐',
  '感情深，砍得狠',
  '今天手感还不错',
  '看我慈悲刀法',
  '砍价应该体面~',
  '纸短情长啊不如砍价~',
  '给点力，砍到底'
]

const bargainStatus = {
  DOING: 'DOING', // 正在砍
  SUCCESS: 'SUCCESS', // 砍价拼团成功
  FAIL: 'FAIL', // 拼团失败
  END: 'END', // 来迟了,
  OVER_LIMIT: 'OVER_LIMIT' // 本次活动领取超过上限
}

// 事件埋点统计类型
const logEventType = {
  enterPage: 3001,
  exitPage: 3002,
  click: 3003,
  slide: 3004,
  gesture: 3005
}

// 同一工程多域名配置
const ApiSource = {
  meituan: 'meituan',
  XIAMIMUSIC: 'XIAMIMUSIC',
  TIMEMOVIE: 'TIMEMOVIE'
}

export {
  monthList,
  logEventType,
  ApiSource,
  activityTabList,
  bargainTip,
  orderStatus,
  bargainStatus
}