const app = getApp()
Page({
  data: {
  	list:[{
  		src: '/static/home/bananer.jpg',
  		tt: '台湾 古蒂迷你小饼干夹心饼干，日常零食，素食健康',
  		desc: '500g；奶油味',
  		price: '12.00',
  		num: 1,
  	}, {
  		src: '/static/home/bananer.jpg',
  		tt: 'MEDIHEAL 烤杏仁饼干',
  		desc: '500g; 韩国制造，厂家直销',
  		price: '12.00',
  		num: 1,
  	}],
    radio: 0,
  },
  onLoad(options) {

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
  paywayChange({currentTarget}) {
    this.setData({radio: currentTarget.dataset.radio})
  },
  confirmPay() {
    // 确定付款
    wx.switchTab({url: '/tabbar/me/index'})
  }
})