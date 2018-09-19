// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import i18n from './lang/lang'
import store from './store'
// import { CHECK_AUTH } from '@/store/actions.type'
// import httpInterceptors from './helpers/httpInterceptors'
import ApiService from '@/common/api.service'
import JwtService from '@/common/jwt.service'
// Vue.use(BootstrapVue)
// Vue.use(Vuetify)
Vue.use(require('vue-moment'))

// Vue.use(httpInterceptors)

Vue.config.productionTip = false

ApiService.init()

// Ensure we checked auth before each page load.
router.beforeEach(
  (to, from, next) => {
      next() // This is where it should have been
  }
)

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})

window['vue'] = app
window.store = store
