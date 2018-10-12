// 入口文件
import Vue from 'vue'
  
// 导入miui
import './lib/minui/css/mui.min.css'
import './lib/minui/css/icons-extra.css'

// 按需导入mintui的组件
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入app根组件
import app from './App.vue'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入自己的router.js模块
import router from './router.js'

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm = new Vue({
  el: '#app',
  render: ce => ce(app),
  // 挂载路由对象
  router
})