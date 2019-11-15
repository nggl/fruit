// pages/me/order/index.js
const app = getApp()
Page({
  data: {
    navs: [
      '全部',
      '待付款',
      '待发货',
      '待收货',
    ],
    navIndex: 0,
    wH: 667,
    backToTop: false,
    page: 1,
    // 1 - 待付款
    // 2 - 待发货
    // 3 - 待收货
    list: [{
      code: 12341234,
      status: 1,
      count: 2,
      price: '130.00',
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
      }]
      }, {
      code: 12341231234,
      status: 2,
      count: 1,
      price: '70.00',
      list: [{
        img: '/static/home/bananer.jpg',
        tt: '台湾 古蒂迷你小饼干夹心饼干美味饼干',
        desc: '500g.奶油味',
        price: '70.00',
        num: 1,
        }]
      }, {
      code: 12341231234,
      status: 3,
      count: 1,
      price: '70.00',
      list: [{
        img: '/static/home/bananer.jpg',
        tt: '台湾 古蒂迷你小饼干夹心饼干美味饼干',
        desc: '500g.奶油味',
        price: '70.00',
        num: 1,
        }]
      }],
    lists: [],
  },
  onLoad(options) {
    let navIndex = options.type
    if(typeof navIndex === 'string') navIndex = parseInt(navIndex)
    if(!navIndex) navIndex = 0
    this.setData({navIndex})
    wx.getSystemInfo({
      success: ({windowHeight}) => {
        this.setData({wH: windowHeight})
      }
    })
    this.init()
  },
  onUnload() {

  },
  onShow() {

  },
  onPageScroll({scrollTop}) {
    let backToTop = false,
        top = this.data.wH
    if(scrollTop > top * 1.2) backToTop = true
    this.setData({backToTop})
  },
  onShareAppMessage() {

  },
  onPullDownRefresh() {
    this.page = 1
    this.init()
    wx.stopPullDownRefresh()
  },
  onReachBottom() {
    this.page ++
    this.addList()
  },
  navChange({target}) {
    let navIndex = target.dataset.index
    this.setData({navIndex})
    this.init()
  },
  backToTopEvent() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  jump2Detail({currentTarget}) {
    wx.navigateTo({
      url: '/pages/me/order/detail/index?status=' + currentTarget.dataset.status
    })
  },
  init() {
    this.getList()
  },
  getList() {
    let list = this.data.list,
        status = this.data.navIndex
    let lists = list.filter(v => {
      if(status === 0) return v
      else if(v.status === status) return v
      else if(status === 4 && v.status > 4) return v
    })
    this.setData({lists})
  },
  addList() {
    // 分页加载
  },
})