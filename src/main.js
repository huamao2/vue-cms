// 入口文件
import Vue from 'vue'

// 导入miui
import './lib/minui/css/mui.min.css'

// 按需导入mintui的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 导入app根组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: ce => ce(app)
})