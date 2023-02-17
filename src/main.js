import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 在beforeCreate函数钩子里安装全局事件总线，this为vue实例对象
    Vue.prototype.$bus = this
  },
}).$mount('#app')
