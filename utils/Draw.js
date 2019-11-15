module.exports = class Draw {
    constructor(ctx) {
        this.ctx = ctx
    }
    /**
     * 绘制虚线
     * @param  {Number} lineWidth 线宽
     * @param  {Array} segment   线段和间距的长度
     * @param  {Number} sx        起始 x 坐标
     * @param  {Number} sy        起始 y 坐标
     * @param  {Number} ex        结束 x 坐标
     * @param  {Number} ey        结束 y 坐标
     * @param  {String} fillStyle 填充色
     * @return {void}           void
     */
    $dash(lineWidth = 1, segment, sx = 0, sy = 0, ex = 1, ey = 1, strokeStyle = '#000') {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.setLineDash(segment)
        ctx.moveTo(sx, sy)
        ctx.lineTo(ex, ey)
        ctx.strokeStyle = strokeStyle
        ctx.stroke()
        ctx.closePath()
    }
    /**
     * 绘制文本
     * @param  {Mixed} txt           需要绘制的文本内容
     * @param  {Number} x            文字水平位置
     * @param  {Number} y            文字竖直位置
     * @param  {String} fillStyle    文字颜色
     * @param  {String} font         文字样式
     * @param  {String} textAlign    水平对齐方式
     * @param  {String} textBaseLine 竖直对齐方式
     * @param  {Boolean} breakWord 	 是否使用换行
     * @param  {Number} poolWidth 	 容器的最大宽度
     * @param  {Number} lineHeight 	 字体高度
     * @return {void}                无返回值
     */
    $text(txt, x, y, fillStyle = '#333', font = 'italic small-caps bold 12px arial', textAlign = 'center', textBaseLine = 'middle', breakWord = false, poolWidth = 200, lineHeight = 40) {
        let ctx = this.ctx
        ctx.beginPath()
        /*文本的属性 */
        ctx.font = font
        /*左右对齐方式 (center left right start end) 基准起始坐标*/
        ctx.textAlign = textAlign
        /*垂直对齐的方式 基线 baseline(top,bottom,middle) 基准起始坐标*/
        ctx.textBaseLine = textBaseLine
        ctx.fillStyle = fillStyle
        if (breakWord) {
            let tW = this.$strWidth(txt),
                tNum = txt.length
            if (tW < poolWidth) ctx.fillText(txt, x, y)
            else {
                // TODO: 换行文本
                // 1. 获得行数
                let line = Math.ceil(tW / poolWidth)
                // 2. 一行有几个字
                let num = Math.ceil(tNum / line)
                for (let i = 0; i < line; i++) {
                    ctx.fillText(txt.substr(i * num, num), x, y + i * lineHeight)
                }
            }
        } else ctx.fillText(txt, x, y)
    }
    /**
     * 绘制一个有填充色的圆角矩形 
     *	@param x:左上角x轴坐标 
     *	@param y:左上角y轴坐标 
     *	@param width:矩形的宽度 
     *	@param height:矩形的高度 
     *	@param radius:圆的半径 
     *	@param fillColor:填充颜色 
     **/
    $fillRoundRect(x, y, width, height, radius, fillColor) {
        // 圆的直径必然小于矩形的宽高
        if (2 * radius > width || 2 * radius > height) return
        let ctx = this.ctx
        ctx.save()
        ctx.translate(x, y)
        this.drawRoundRectPath(width, height, radius)
        ctx.translate(-x, -y)
        ctx.fillStyle = fillColor || '#000'
        ctx.fill()
        ctx.restore()
    }
    /**
     * 该方法用来绘制圆角矩形 
     * @param x:左上角x轴坐标 
     * @param y:左上角y轴坐标 
     * @param width:矩形的宽度 
     * @param height:矩形的高度 
     * @param radius:圆的半径 
     * @param lineWidth:线条粗细 
     * @param strokeColor:线条颜色 
     **/
    $strokeRoundRect(x, y, width, height, radius, lineWidth, strokeColor) {
        if (2 * radius > width || 2 * radius > height) return
        let ctx = this.ctx
        ctx.save()
        ctx.translate(x, y)
        drawRoundRectPath(width, height, radius)
        ctx.translate(-x, -y)
        ctx.lineWidth = lineWidth || 1
        ctx.strokeStyle = strokeColor || '#000'
        ctx.stroke()
        ctx.restore()
    }
    /**
     * 获取在 canvas 上的文本宽度
     * @param  {String} str 文本内容
     * @return {Number}     文本宽度，单位 px
     */
    $strWidth(str) {
        return this.ctx.measureText(str).width
    }
    drawRoundRectPath(width, height, radius) {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.arc(width - radius, height - radius, radius, 0, Math.PI / 2)
        ctx.lineTo(radius, height)
        ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI)
        ctx.lineTo(0, radius)
        ctx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2)
        ctx.lineTo(width - radius, 0)
        ctx.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2)
        ctx.lineTo(width, height - radius)
        ctx.closePath()
    }
}