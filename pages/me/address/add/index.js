// pages/me/address/add/index.js
const app = getApp()
let area = require('../../../../utils/area')
Page({
    data: {
        buttonText: '添加地址',
        q: 0,
        type: 'add',
        codes: {},
        side: '',
        orinalSides: [],
        sideIndex: [0, 0, 0],
        state: false,
    },
    onLoad(options) {
        let type = options.type,
            buttonText = '',
            q = 0
        if (type === 'add') {
            wx.setNavigationBarTitle({ title: '新建地址' })
            buttonText = '添加地址'
        } else if (type === 'edit') {
            q = options.q
            wx.setNavigationBarTitle({ title: '修改地址' })
            buttonText = '保存'
        }
        this.init()
        this.setData({ type, q, buttonText })
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
    changeState() {
        this.setData({ state: !this.data.state })
    },
    init() {
        this.initSide()
    },
    initSide() {
        let first = area.getProvince(),
            second = area.getCity(first[0]['key']),
            third = area.getCountry(second[0]['key'])
        this.setData({ orinalSides: [first, second, third] })
    },
    sideChange({ detail }) {
        let { value } = detail,
        orinalSides = this.data.orinalSides,
            province = orinalSides[0][value[0]],
            city = orinalSides[1][value[1]],
            county = orinalSides[2][value[2]],
            province_code = province.key,
            city_code = city.key,
            county_code = county.key
        let codes = { province: province_code, city: city_code, area: county_code },
            side = province.value + '-' + city.value + '-' + county.value
        this.setData({codes, side})
    },
    sideColChange({ detail }) {
        let { column, value } = detail,
        	side = this.data.orinalSides,
        	sideIndex = this.data.sideIndex
        switch (column) {
            case 0:
            	let col2 = area.getCity(side[0][value]['key']),
            		col3 = area.getCountry(col2[0]['key'])
                this.setData({
                    'orinalSides[1]': col2,
                    'orinalSides[2]': col3
                })
                break
            case 1:
                this.setData({
                    'orinalSides[2]': area.getCountry(side[1][value]['key']),
                })
    	}
	    let tag = `sideIndex[${column}]`
	    this.setData({
	        [tag]: value
	    })
	},
})