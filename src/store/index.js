import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {

		get_token(state) {
			return state.token;
		},

  },
  actions: {
		// setToken(context, token) {
		//   context.commit("mutate_token", token);
		// },
  },
  mutations: {
    set_token(state,data) {
      return state.token = data
    },
  }
})
