// pages/home/detail/index.js
const app = getApp()
let Draw = require('../../../utils/Draw')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swipers: [
            '/static/home/detail-swiper/detail-01.jpg',
            '/static/home/detail-swiper/detail-02.jpg',
            '/static/home/detail-swiper/detail-03.jpg',
        ],
        navs: ['商品详情', '常见问题'],
        navIndex: 0,
        num: 3,
        isCollection: false,
        count: 1,
        actionSheet: false,
        ani: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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
    createBill() {
        // TODO: 生成海报，并且预览
    },
    navChange({ target }) {
        this.setData({ navIndex: target.dataset.index })
    },
    /*getDetail() {
        let htmls = require('../../../temp/about')
        htmls = htmls.data
        require('../../../utils/ttParse/wxParse').wxParse('views', 'html', htmls, this)
    },*/
    collectEvent() {
      let isCollection = !this.data.isCollection
      this.setData({isCollection})
    },
    add() {

    },
    pay() {
        let actionSheet = !this.data.actionSheet,
            ani = !this.data.ani
        this.setData({ani, actionSheet})
    },
    close({target}) {
        if(!target.dataset.token) this.setData({ani: false, actionSheet: false})
    },
    inputCount({detail}) {
        this.setData({count: detail.value})
    },
    addCount() {
        this.setData({count: this.data.count + 1})
    },
    reduceCount() {
        let count = this.data.count
        if(count > 1) this.setData({count: count - 1})
    },
    createOrder() {
        // 创建订单
        wx.navigateTo({
            url: '/pages/home/order/index'
        })
    }
})