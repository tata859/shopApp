module.exports={
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth: 375,//视口宽度
      // viewportHeight: 667,//视口高度
      unitPrecision:10,    //保留的小数位数
      viewportUnit:'vw',  //指定视口的单位
      minPixelValue:1,//小于或者等于'1px'不转换为视窗单位
      mediaQuery:false,//允许在媒体查询中转换'px'
      selectorBlackList:['tab-bar','tar-bar-item','hy-swiper'],//指定不需要转换的类名
      exclude:[/tabbar/,/Navigation/,/tabControl/,/tab-control/]  // 排除某个组件
    }
  }
}
