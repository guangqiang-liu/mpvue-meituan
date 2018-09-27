/** Created by guangqiang on 2018-09-15 14:28:08 */
import Vue from 'vue'
import App from './index'
import store from '@/store'

const app = new Vue({
  store,
  ...App
})
app.$mount()