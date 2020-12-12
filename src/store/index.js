import Vue from 'vue'
import Vuex from 'vuex'
import users from './user.module'
import articles from './article.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    articles
  }
})
