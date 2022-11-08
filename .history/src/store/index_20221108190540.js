import { getToken } from '@/utils/token'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken() || {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
