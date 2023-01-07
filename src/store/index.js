import Vue from 'vue'
import Vuex from 'vuex'
import { keys } from '../locales/keys'
import { variables } from '../variables'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbarText: "",
    isSnackbarOpen: "",
    languages: [
      {
        lang: keys.TURKISH,
        code: variables.TURKISH,
      },
      {
        lang: keys.ENGLISH,
        code: variables.ENGLISH,
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
