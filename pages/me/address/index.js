// pages/me/address/index.js
const app = getApp()
Page({
  data: {
  	list: [{
  		id: 1,
  		name: '张三',
  		phone: '123412342',
  		side: '按时发斯蒂芬',
  	}, {
  		id: 2,
  		name: '李四',
  		phone: '123412342',
  		side: '阿萨德开了房间阿斯蒂芬',
  	}],
  	selectedIndex: 1,
  	id: 0,
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
  radioCheck({currentTarget}) {
  	let {id, index} = currentTarget.dataset
  	this.setData({id, selectedIndex: index})
  },
  delItem() {

  },
})