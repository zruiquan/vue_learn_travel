// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex
import store from './store'
// 解决移动端点击事件延迟300ms问题
import fastClick from 'fastclick'
// 用来重置页面样式表，对基础样式的修饰，保证不同手机浏览器的默认展示样式统一
import 'styles/reset.css'
// 解决1像素边框的问题，多倍屏物理像素实际对应的是2或者3等多像素的问题
import 'styles/border.css'
// 使用iconfont
import 'styles/iconfont.css'
// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 使用fastClick绑定到document.body
fastClick.attach(document.body)
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
