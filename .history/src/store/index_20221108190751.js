import { getToken } from '@/utils/token'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokenObj: getToken() || {}
  },
  getters: {},
  mutations: {
    setToken(state, obj) {
      state.tokenObj = obj
    }
  },
  actions: {},
  modules: {}
})
