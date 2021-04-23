import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      current : 0
  },
  mutations: {
      currentChange(state,prop){
        // console.log(state.current,"store",prop)
          return state.current = prop
      }
  },
  actions: {
  },
  modules: {
  }
})
