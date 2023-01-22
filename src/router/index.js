import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import AnotherAccount from '../views/AnotherAccount.vue'
import Introduction from '../views/Introduction.vue'
import Login from '../views/Login.vue'
/* import Conference from '../views/Conference.vue'
 */
Vue.use(VueRouter)
import { middlewares } from './middlewares'

const routes = [
  {
    path: '/tanitim',
    name: 'Introduction',
    component: Introduction,
  },
  {
    path: '/giris-yap',
    name: 'Login',
    component: Login,
    beforeEnter: middlewares.login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: middlewares.auth,
  },
  {
    path: '/kullanici/:username',
    name: 'Account',
    component: Account,
    beforeEnter: (to, from, next) => {
      middlewares.auth(to, from, next)
      middlewares.checkAccount(to, from, next)
    },
  },

  {
    path: '/kullanici/:username',
    name: 'AnotherAccount',
    component: AnotherAccount,
    beforeEnter: (to, from, next) => {
      middlewares.auth(to, from, next)
    },
  },
  /* 
  {
    path: '/konferans',
    name: 'Conference',
    component: Conference,
    beforeEnter: middlewares.auth,
  }, */
  {
    path: '*',
    redirect: '/',
    beforeEnter: middlewares.auth,
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
