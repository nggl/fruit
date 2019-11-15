// pages/me/order/detail/index.js
const app = getApp()
Page({
  data: {
    status: 2,
    list: [{
      img: '/static/home/bananer.jpg',
      tt: '台湾 古蒂迷你小饼干夹心饼干美味饼干',
      desc: '500g.奶油味',
      price: '70.00',
      num: 1,
      },{
      img: '/static/home/bananer.jpg',
      tt: '台湾 古蒂迷你小饼干夹心饼干美味饼干',
      desc: '500g.奶油味',
      price: '70.00',
      num: 1,
    }],
    radio: 0,
  },
  onLoad(options) {
    let status = options.status
    if(typeof status === 'string') status = parseInt(status)
    console.log(status)
    this.setData({status})
  },
  onUnload() {

  },
  onShow() {

  },
  onShareAppMessage() {

  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
  paywayChange({target}) {
    this.setData({radio: target.dataset.radio})
  }
})