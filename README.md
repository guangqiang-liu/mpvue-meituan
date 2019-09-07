# mpvue-meituan
> mpvue-meituan 是一款使用mpvue开发的实战小程序项目，完全仿制美团官方外卖点餐小程序开发而成，项目的框架结构完全按照企业开发架构搭建而成。结合了原生小程序的开发能力和Vue能力，使小程序开发起来更加便捷高效，项目使用了比较流行的Vuex框架来作为全局的状态数据管理，使数据交互更加的便捷，结合了sass的使用让写Css样式更加的得心应手。目前市面上有很多使用mpvue开发的示例Demo，但是那些示例Demo都过于简单，没有提供一套系统的框架结构，借鉴的意义不是很大。所以作者就开源了一个企业级框架开发的小程序供大家学习参考，总之是一个极力推荐学习的小程序实战项目。

**掘金专栏文章详解：[mpvue-meituan](https://juejin.im/post/5bbb6198f265da0ac962ba00)**

# 目录
* [项目简介](#项目简介)
* [主要功能](#主要功能)
* [预览效果图](#预览效果图)
* [安装调试](#安装调试)
* [API数据来源](#API数据来源)
* [技术要点](#技术要点)
* [核心组件库](#核心组件库)
* [开发中遇到的坑](#开发中遇到的坑)
* [待完成功能](#待完成功能)
* [待优化bug](#待优化bug)
* [目录结构](#目录结构)
* [总结](#总结)

# 项目简介
> mpvue-meituan 是一款使用mpvue开发的小程序，完全仿制美团官方外卖小程序。目前市面上大部分的小程序开发还是使用微信原生的开发能力，原生的开发能力约束太多，导致小程序开发成本变高。于是市面上衍生出不少小程序开发框架，其中最为流行的有下面三个框架：`wepy` `taro` `mpvue`。这三个框架出自不同的大厂，之前不太了解的小伙伴们可以自行查阅资料。本项目主要介绍如何使用vue来快速开发一款复杂的小程序项目。

# 主要功能(20+页面)
* 首页Tab
	* 首页商家列表
	* 选择收货地址列表
	* 选择城市
	* 商品搜索列表
	* 分类列表
	* 邀请好友领红包
	* 添加购物车页面
	* 食品档案
* 订单Tab
	* 订单列表
	* 提交订单
	* 商品备注
	* 订单详情
	* 商品评论
* 我的Tab
	* 我的页面
	* 美团红包页面
	* 无效红包页面
	* 代金券页面
	* 无效代金券列表
	* 收货地址列表
	* 新增收货地址
	* 帮助反馈
	* 协议说明
* 待补充

# 预览效果图
![mpvue](https://imgs-1257778377.cos.ap-shanghai.myqcloud.com/2019-09-07%2011.40.32.gif)

# 安装调试

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# API数据来源
> mpvue-meituan 项目的数据来源目前均来自美团外卖小程序抓包数据，将抓包数据存储为本地JSON，然后工程访问本地JSON数据。由于美团外卖小程序属于美团正式线上产品，故不能直接访问其真实API，使用本地JSON一样能实现绝大部分需求，少数需要数据交互的需求自己mock数据即可。


# 技术要点
* 微信原生小程序开发能力
* mpvue开发小程序能力
* Vue开发能力
* less，sass 等css编译器用法
* 小程序开发基础框架结构搭建
* 小程序网络层封装
* Vuex全局状态管理框架的使用
* 小程序，vue组件化开发技巧
* 小程序中iconFont使用技巧
* 使用canvas绘制小程序分享海报技巧
* 待补充

# 核心组件库
* mpvue
* vuex
* lodash
* mpvue-wxparse
* minapp-api-promise
* 待补充

# 开发中遇到的坑
> 待补充

# 待完成功能
- [ ] 选择城市列表
- [ ] 分类筛选功能
- [ ] 购物车页面完善优化
- [ ] 发表评论功能
- [ ] 提交订单页面完善优化
- [ ] canvas绘制分享海报
- [x] 网络层工具封装
- [x] vuex状态管理使用
- [x] 常用工具类封装
- [x] 组件化使用
- [x] sass环境的搭建及使用
- [ ] 待补充

# 目录结构

```
.
├── App.vue
├── action
│   └── action.js
├── app.json
├── assets
│   ├── global.scss
│   └── iconfont.less
├── components
│   ├── card.vue
│   └── sep-line.vue
├── constants
│   ├── commonType.js
│   ├── errorCodeMap.js
│   ├── hostConfig.js
│   ├── pathConfig.js
│   └── responseCode.js
├── main.js
├── middlewares
│   └── index.js
├── network
│   ├── cache
│   │   └── cache.js
│   └── request
│       ├── HttpExtension.js
│       └── HttpRequest.js
├── pages
│   ├── addAddress
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── addressList
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── categoryList
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── citySearch
│   │   ├── index.vue
│   │   └── main.js
│   ├── citys
│   │   ├── index.vue
│   │   └── main.js
│   ├── commentList
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── couponList
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── dicedActivity
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── expiredCoupon
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── expiredRedPacket
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── feedback
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── home
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── index
│   │   ├── index.vue
│   │   └── main.js
│   ├── me
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── orderDetail
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── orderList
│   │   ├── data.js
│   │   ├── index.vue
│   │   └── main.js
│   ├── pickProtocol
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── protocol
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── redPacket
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── remark
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── searchList
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── selectAddress
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── share
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   ├── shoppingCart
│   │   ├── data.js
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   └── submitOrder
│       ├── data.js
│       ├── index.vue
│       ├── main.js
│       └── main.json
├── store
│   ├── index.js
│   ├── modules
│   │   ├── shoppingCart.js
│   │   └── submitOrder.js
│   └── mutations-type.js
└── utils
    ├── arrayExtension.js
    ├── bus.js
    ├── deepClone.js
    ├── deviceInfo.js
    ├── formatTime.js
    ├── index.js
    ├── mta_analysis.js
    ├── regex.js
    ├── stringExtension.js
    ├── style.js
    ├── toast.js
    └── wxapi.js

37 directories, 117 files
```

# 总结
> mpvue-meituan 项目是作者大约使用了2周时间开源的一款小程序项目，项目中基本涵盖了企业开发中常用的技术要点，非常适合想学习小程序开发的小伙伴们参考学习。相信此项目能给小伙伴们带来不一样的收获。大家也可以加作者的mpvue小程序交流群交流学习(`QQ群号：694979037`)。
> 
> 当然，如果老铁们认为作者的开源项目还不错，也请点个 **`star`** 支持一下 ❤️❤️❤️❤️ ，也衷心的欢迎小伙伴们提些宝贵的意见和建议。

**掘金专栏文章详解：[mpvue-meituan](https://juejin.im/post/5bbb6198f265da0ac962ba00)**

**欢迎小伙伴们扫码进群**

![mpvue](https://imgs-1257778377.cos.ap-shanghai.myqcloud.com/WechatIMG1127.jpeg)

## 更多文章
* 作者React Native开源项目OneM地址(按照企业开发标准搭建框架完成开发的)：**[https://github.com/guangqiang-liu/OneM](https://github.com/guangqiang-liu/OneM)**：欢迎小伙伴们 **star**
* 作者简书主页：包含60多篇RN开发相关的技术文章[http://www.jianshu.com/u/023338566ca5](http://www.jianshu.com/u/023338566ca5) 欢迎小伙伴们：**多多关注**，**多多点赞**
* 作者React Native QQ技术交流群：**620792950** 欢迎小伙伴进群交流学习

## License

**MIT**