import { api } from '../common/api.service'

export default {
  namespaced: true,
  state: {
    feed: [],
    count: 0
  },
  mutations: {
    setArticles(state, { articles, articlesCount }) {
      ;[state.feed, state.count] = [articles, articlesCount]
    }
  },
  actions: {
    async getGlobalFeed(context, payload = { page: 1 }) {
      let route = '/articles'
      const {
        tag = null,
        author = null,
        favourited = null,
        page = 1
      } = payload
      route += tag ? `?tag=${tag}&` : ''
      route += author ? `?author=${author}&` : ''
      route += favourited
        ? `?favourited=${favourited}&`
        : ''
      route += page
        ? `?offset=${(page - 1) * 10}&limit=10`
        : ''
      const response = await api.get(route)
      context.commit('setArticles', response.data)
    }
  }
}
