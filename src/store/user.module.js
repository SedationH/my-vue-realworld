import {
  api,
  setToken,
  clearToken
} from '../common/api.service'

export default {
  namespaced: true,
  state: {
    user: null,
    profile: null
  },
  getters: {
    username: state =>
      (state.user && state.user.username) || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    async loginUser(context, { email, password }) {
      clearToken()
      try {
        const response = await api.post('/users/login', {
          user: {
            email,
            password
          }
        })
        if (response.data.user) {
          setToken(response.data.user.token)
          context.commit('setUser', response.data.user)
        }
      } catch (e) {
        console.error(e)
        throw e
      }
    }
  }
}
