// components/ng-row/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },
  /**
   * 组件周期，组件实例进入页面节点树 ～ 即将被渲染出来（数据准备就绪）
   */
  attached() {
    // console.log(this.data)
    
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
    
  },
  /**
   * 组件的初始数据
   */
  data: {
    search: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputEvent({detail}) {
      this.data.search = detail.value
    },
    searchEvent() {
      this.triggerEvent('search', this.data.search)
    }
  }
})
