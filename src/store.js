import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      loginname: '',
      avatar_url: '',
      userId: '',
      token: ''
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  mutations: {
    setUserInfo(state, user) {
      state.userInfo = user;
    },
    clearUserInfo(state, user) {
      state.userInfo = {};
    },
  },
  actions: {
    setUserInfo({
      commit
    }, user) {
      window.window.localStorage.user = JSON.stringify(user);
      commit('setUserInfo', user)
    },
    clearUserInfo({
      commit
    }) {
      indow.window.localStorage.user = null
      commit('clearUserInfo')
    }
  }
})
