import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VueLazyLoad from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'

Vue.use(VueLazyLoad)

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
