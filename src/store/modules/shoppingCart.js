/** Created by guangqiang on 2018-09-27 17:32:35 */
import {formatYMD} from '@/utils/formatTime'
import {_array} from '@/utils/arrayExtension'
import {shoppingCart} from '@/pages/shoppingCart/data'
import {deepClone} from '@/utils/deepClone'

const state = {
  shopInfo: {},
  foods: [],
  spus: [],
  commentInfo: [],
  reduceFee: 0.0,
  visibleSkuModal: false,
  visibleItemModal: false,
  skuInfo: {},
  previewInfo: {}
}

const mutations = {
  changeShopInfoDataMut(state, info) {
    state.shopInfo = info
  },
  changeFoodsDataMut(state, info) {
    state.foods = info
  },
  changeSpusDataMut(state, info) {
    state.spus = info;
  },
  changeCommentDataMut(state, info) {
    state.commentInfo = info
  },
  changeReduceFeeDataMut(state, info) {
    state.reduceFee = info
  },
  changeSkuModalMut(state, info) {
    state.visibleSkuModal = info
  },
  changeItemModalMut(state, info) {
    state.visibleItemModal = info
  },
  changeSkuDataMut(state, info) {
    state.skuInfo = info
  },
  changePreviewDataMut(state, info) {
    state.previewInfo = info
  }
}

const actions = {
  getMenuDataAction({state, commit}) {
    var res = shoppingCart.menuData.data

    var shopInfo = res.poi_info || {}
    shopInfo.prompt_text = res.shopping_cart.prompt_text
    shopInfo.activity_info = JSON.parse(res.shopping_cart.activity_info.policy)
    commit('changeShopInfoDataMut', shopInfo)

    var foods = res.food_spu_tags
    foods = foods.map(item => {
      item.count = 0
      item.totalPrice = 0
      return item
    })
    commit('changeFoodsDataMut', foods)

    var arr = state.foods[0].spus.map(item => {
      item.sequence = 0
      return item
    })
    var spus = {title: foods[0].name, index: 0, list: arr}
    commit('changeSpusDataMut', spus)
  },
  getCommentDataAction({state, commit}) {
    var res = shoppingCart.commentData.data
    var commentData = res
    var comments = res.comments.map(item => {
      var reply = item.add_comment_list[0] || {}
      item.poi_reply_contents = `${reply.desc}：${reply.content}`
      item.commentTags = item.comment_labels.map(item => item.content).join()
      item.comment_time = formatYMD(item.comment_time * 1000)
      return item;
    })
    commentData.comments = comments

    var commentMolds = res.comment_categories.map(item => {
      var num = item.replace(/[^0-9]/ig,"");
      var characters = item.match(/[\u4e00-\u9fa5]/g);
      var title = characters.join("");
      return `${title}(${num})`
    })
    res.labels.map(item => {
      var tag = `${item.content}(${item.label_count})`
      commentMolds.push(tag)
    })
    commentData.commentMolds = commentMolds
    
    commit('changeCommentDataMut', commentData)
  },
  getCategoryMenuDataAction({state, commit}, {index}) {
    var spus = {}
    spus.title = state.foods[index].name
    spus.index = index
    spus.list = state.foods[index].spus.map(item => {
      if (!item.sequence) item.sequence = 0
      return item
    })
    commit('changeSpusDataMut', spus)
  },
  addItemAction({state, commit}, {item, index}) {
    var spus = state.spus
    spus.list[index].sequence += 1
    commit('changeSpusDataMut', spus)

    var foods = state.foods
    var foodsIndex = spus.index
    var selectedFood = foods[foodsIndex]
    selectedFood.count += 1
    selectedFood.totalPrice += item.min_price + (item.min_price > 0 ? 1 : 0 )
    commit('changeFoodsDataMut', foods)
  },
  reduceItemAction({state, commit}, {item, index}) {
    var spus = state.spus
    spus.list[index].sequence -= 1
    if (spus.list[index].sequence <= 0) spus.list[index].sequence = 0
    commit('changeSpusDataMut', spus)

    var foods = state.foods
    var foodsIndex = spus.index
    var selectedFood = foods[foodsIndex]
    selectedFood.count = selectedFood.count - 1
    selectedFood.totalPrice = selectedFood.totalPrice - item.min_price - (item.min_price > 0 ? 1 : 0)
    commit('changeFoodsDataMut', foods)
  },
  closeShoppingCartAction({state, commit}) {
    var array = state.foods
    var selectedArr = []
    array.map((item, index) => {
      item.spus.map((itm, idx) => {
        if (itm.sequence > 0) {
          var price = itm.min_price * itm.sequence
          itm.totalPrice = parseFloat(price).toFixed(1)
          selectedArr.push(itm)
        }
      })
    })
    var shopInfo = state.shopInfo
    shopInfo.selectedArr = selectedArr
    commit('changeShopInfoDataMut', shopInfo)
    wx.navigateTo({url: '/pages/submitOrder/main'})
  },
  selectSkuAction({state, commit}, {item, index}) {
    commit('changeSkuModalMut', true)
    var sku = {}
    var array = item.attrs
    var selectedItems = []
    for (let i = 0; i < array.length; i++) {
      var attr = array[i].values
      attr.map((item, idx) => {
        if (idx === 0) {
          item.selected = true;
          selectedItems.push(item.value)
        } else {
          item.selected = false;
        }
        return item
      })
    }

    sku.item = item
    sku.index = index
    sku.attrs = array
    sku.title = item.name
    sku.selectedCount = item.sequence
    sku.price = parseFloat(item.min_price).toFixed(1)
    sku.selectedItems = selectedItems.join(',')
    sku.time = new Date()
    commit('changeSkuDataMut', sku)
  },
  attrSelectAction({state, commit}, {itm, idx, setIdx}) {
    var sku = state.skuInfo
    var array = sku.attrs
    var selectedItems = sku.selectedItems.split(',')
    var section = array[setIdx]
    for (var i = 0; i < section.values.length; i++) {
      var item = section.values[i]
      if (i === idx) {
        item.selected = true
        selectedItems[setIdx] = item.value
      } else {
        item.selected = false
      }
    }
    sku.selectedItems = selectedItems.join(',')
    sku.time = new Date()
    commit('changeSkuDataMut', sku)
  },
  changeSkuModalDataAction({state, commit}, {num}) {
    var sku = state.skuInfo
    sku.selectedCount = sku.selectedCount + num
    commit('changeSkuDataMut', sku)
  },
  previewItemAction({state, commit}, {item, index}) {
    commit('changeItemModalMut', true)
    var preview = item
    preview.preIndex = index
    preview.description = item.skus[0].description
    commit('changePreviewDataMut', preview)
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}