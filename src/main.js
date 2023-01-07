import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import VueCryptojs from 'vue-cryptojs'

import 'material-icons/iconfont/material-icons.css';

import { variables } from './variables'
import { routeNames } from './routes'
import { functions } from './functions'
import { keys } from './locales/keys'
import { icons } from './icons'
import { storage } from './storage'

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
  render: h => h(App)
}).$mount('#app')
