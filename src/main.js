import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VuelazyLoad from 'vue-lazyload'

FastClick.attach(document.body)

Vue.config.productionTip = false
//图片懒加载插件
Vue.use(VuelazyLoad,/*{
  loading:require('assets/image/0.jpg'),
}*/)

Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
