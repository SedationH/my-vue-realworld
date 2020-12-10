import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 加载样式资源 ? 不知道如何处理 暂时先放到public html中处理

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
