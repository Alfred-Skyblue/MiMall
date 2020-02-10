import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import router from './router'
import App from './App.vue'
// import env from './env'

// mock 开关
const mock = true
if (mock) {
  require('./mock/api')
}
// 根据前端的跨域方式做调整 /a/b; /api/a/b => /a/b
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 根据环境变量配置不同的接口
// axios.defaults.baseURL = env.baseURL

// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
