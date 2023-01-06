import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-icons/iconfont/material-icons.css';
import { variables } from './variables'
import { routeNames } from './routes'
import { functions } from './functions'
import { keys } from './locales/keys'
import i18n from './i18n'

Vue.prototype.$keys = keys
Vue.prototype.$variables = variables
Vue.prototype.$routeNames = routeNames
Vue.prototype.$functions = functions

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
