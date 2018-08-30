/** Created by guangqiang on 2018-06-29 19:58:09 */

// toast 工具类
class toast {
  
  static msg (title, {icon = 1}) {
    wx.showToast({
      title,
      icon: ['success', 'none'][icon]
    })
  }
  
  static confirm ({title = '提示', content, callback}) {
    wx.showModal({
      title,
      content,
      success: function (res) {
        if (res.confirm) {
          callback(res.confirm)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
}

export default toast