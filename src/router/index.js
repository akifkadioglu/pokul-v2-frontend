import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import EditProfile from '../components/Account/settings/EditProfile.vue'
import ChangePassword from '../components/Account/settings/ChangePassword.vue'
import Introduction from '../views/Introduction.vue'
import Login from '../views/Login.vue'
/* import Conference from '../views/Conference.vue'
 */
Vue.use(VueRouter)
import { middlewares } from './middlewares'
import { routeNames } from '../routes'

const routes = [
  {
    path: '/tanitim',
    name: routeNames.INTRODUCTION,
    component: Introduction,
  },
  {
    path: '/giris-yap',
    name: routeNames.LOGIN,
    component: Login,
    beforeEnter: middlewares.login,
  },
  {
    path: '/',
    name: routeNames.HOME,
    component: Home,
    beforeEnter: middlewares.auth,
  },
  {
    path: '/kullanici/:username',
    name: routeNames.ACCOUNT,
    component: Account,
    beforeEnter: (to, from, next) => {
      middlewares.auth(to, from, next)
    },
  },
  {
    path: '/hesabi-duzenle',
    name: routeNames.EDIT_PROFILE,
    component: EditProfile,
    beforeEnter: (to, from, next) => {
      middlewares.auth(to, from, next)
    },
  },
  {
    path: '/sifre-degistir',
    name: routeNames.CHANGE_PASSWORD,
    component: ChangePassword,
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
