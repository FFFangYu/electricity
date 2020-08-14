import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

/* 导入富文本 */
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

/* 导入全局样式表 */
import './assets/css/global.css'

/* 导入字体图标 */
import './assets/fonts/iconfont.css'

import TreeTable from 'vue-table-with-tree-grid'

// 导入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/* axios */
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 在request拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(
  config => {
    NProgress.start()
    // Do something before request is sent
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 在response拦截器中隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)

Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal * 1000)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

Vue.use(VueQuillEditor)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
