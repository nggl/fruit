// components/ng-row/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rowItem: {
      type: Object,
      value: {},
    },
    index: {
      type: Number,
      value: -1,
    }
  },
  /**
   * 组件周期，组件实例进入页面节点树 ～ 即将被渲染出来（数据准备就绪）
   */
  attached() {
    // console.log(this.data)
    let num = this.data.rowItem.num
    if(num > 0) this.setData({num})
  },
  /**
   * 组件周期，页面布局完成
   */
  ready() {
    // console.log(this.data)
  },
  /**
   * 监听函数 - 经过 setData 方法处理，就会被触发
   */
  observers: {
    num(value) {
      // console.log(value)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    num: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addEvent() {
      let num = this.data.num
      num ++
      this.setData({num})
      this.triggerEvent('count', {count: num * this.data.rowItem.price})
    },
    reduceEvent() {
      let num = this.data.num
      if(num > 0) --num
      this.setData({num})
      this.triggerEvent('count', {count: num * this.data.rowItem.price, index: this.data.index})
    },
    numChangeEvent({detail}) {
      let {value} = detail
      console.log(value)
    },
    delItem() {
      this.triggerEvent('delevent', {id: this.data.rowItem.id, index: this.data.index})
    },
  }
})
