// pages/home/side/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotCitys: [],
    isSelectCity: false,
    side: [0, 0, 0],
    pickSide: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let obj = {name: '长春市'},
        hotCitys = []
    for(let i = 9; i > 0; i --) {
      hotCitys.push(obj)
    }
    this.setData({hotCitys})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  searchEvent({detail}) {
    console.log(detail.value)
  },
  sideChange({detail}) {
    let {postcode, value, code} = detail
    let pickSide = value.join(' - '),
        isSelectCity = true,
        side = code
    this.setData({pickSide, isSelectCity, side})
    console.log(detail)
  }
})