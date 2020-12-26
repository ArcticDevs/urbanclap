import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: '',
    isLoggedIn: false,
  },
  getters: {
    get_token(state) {
      return state.token;
    },
    get_login_status(state){
      return state.isLoggedIn;
    }
  },
  actions: {
  },
  mutations: {
    set_token(state, data) {
      console.log("setToken called");
      document.cookie = "token=" + data;
      state.isLoggedIn = true;
      console.log("login status store :"+state.isLoggedIn);
      return state.token = data
    },
    delete_token(state){
      console.log("deleteToken called");
      state.isLoggedIn = false;
      var d = new Date();
      d.setTime(d.getTime());
      var expires = "expires=" + d.toUTCString();
      document.cookie = "token" + "=" + "" + ";path=/;" + expires;
      return state.token = ''
    }
  }
})
