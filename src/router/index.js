import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import Introduction from '../views/Introduction.vue'
export const eventBus = new Vue();
Vue.use(VueRouter)

const routes = [
  {
    path: '/tanitim',
    name: 'Introduction',
    component: Introduction,


  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hesabim',
    name: 'Account',
    component: Account
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach((to, from, failure) => {
  if (failure) {
    console.log('failed navigation', failure)
  }
})
export default router
