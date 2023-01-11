import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import VueCryptojs from 'vue-cryptojs'
import AmbientImage from 'ambient-image'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../node_modules/ambient-image/dist/lib/ambient-image.min.css'
import 'material-icons/iconfont/material-icons.css';
require('./http/http-common');

import { variables } from './variables'
import { routeNames } from './routes'
import { functions } from './functions'
import { keys } from './locales/keys'
import { icons } from './icons'
import { storage } from './storage'
import { http } from "./http/http"
import { http_requests } from './http/http-requests'

Vue.prototype.$http_requests = http_requests
Vue.prototype.$http = http
Vue.prototype.$storage = storage
Vue.prototype.$functions = functions
Vue.prototype.$icons = icons
Vue.prototype.$keys = keys
Vue.prototype.$variables = variables
Vue.prototype.$routeNames = routeNames
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  VueCryptojs,
  AmbientImage,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount('#app')
