// pages/home/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: '',
    minHeight: '300px',
    recomments: [],
    list: [],
    status: 0,  // 0 未搜索， 1 已搜索， 2 搜索无结果
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // TODO: 根据传递的类型修改navigateTitle
    // wx.setNavigationBarTitle({title: ''})



    this.init()

    wx.getSystemInfo({
      success: (res) => {
        this.setData({minHeight: res.windowHeight - 94 + 'px'})
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  init() {
    this.initData()
  },
  initData() {
    let obj = {
      url: '/static/home/bananer.jpg',
      title: '菲律宾香蕉，马来西亚特产，纯种香甜，好吃不贵',
      out: 10,
      having: 30,
      price: '24.00',
    },
    obj1 = {
      url: '/static/home/bananer.jpg',
      title: '菲律宾香蕉，马来西亚特产，纯种香甜，好吃不贵',
      out: 10,
      original: '30.00',
      price: '28.00',
    }
    let recomments = [],
        list = []
    for(let i = 4; i > 0; i --) {
      recomments.push(obj)
      list.push(obj1)
    }
    // recomments.pop()
    this.setData({recomments, list})
  },
  searchEvent({detail}) {
      console.log(detail)
    }
})