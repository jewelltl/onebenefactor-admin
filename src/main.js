// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import CxltToastr from 'cxlt-vue2-toastr'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faKey, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App'
import router from './router'
import store from './store'
import './permissions.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import './styles/style.scss'

Vue.config.productionTip = false

library.add(faUser, faKey, faLock)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(CxltToastr, {
  timeOut: 3000,
  position: 'top right'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
