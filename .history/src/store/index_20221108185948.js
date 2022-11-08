import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    setUser(state, data) {
      state.user = data
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
