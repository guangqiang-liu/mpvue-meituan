/** Created by guangqiang on 2018-08-30 14:28:14 */

import Vue from 'vue'
import App from './App'
import store from './store'
import * as util from './utils'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.util = util

const app = new Vue({
  store,
  ...App
})

app.$mount()