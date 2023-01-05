import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-icons/iconfont/material-icons.css';
import { variables } from './variables'
import { routeNames } from './routes'
import { settings } from './setting_functions'
Vue.prototype.$variables = variables
Vue.prototype.$routeNames = routeNames
Vue.prototype.$settings = settings

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
