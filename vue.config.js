//配置别名
const path = require("path")
module.exports={
  //准备配置
  configureWebpack:{
    resolve:{
      alias:{
        'src' : path.resolve(__dirname,'src'),
        'assets' : path.resolve(__dirname,'src/assets'),
        'common' :path.resolve(__dirname,'src/common'),
        'components': path.resolve(__dirname,'src/components'),
        'network' : path.resolve(__dirname,'src/network'),
        'router' : path.resolve(__dirname,'src/router'),
        'store': path.resolve(__dirname,'src/store'),
        'views' : path.resolve(__dirname,'src/views'),

      }
    }
  }
}
