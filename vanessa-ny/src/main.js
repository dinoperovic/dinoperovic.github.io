import Vue from 'vue'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(VueCookie)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
