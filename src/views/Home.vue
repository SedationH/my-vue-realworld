<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="username" class="nav-item">
                <a
                  @click="setFeed('user')"
                  class="nav-link disabled"
                  href="#"
                >
                  Your Feed
                </a>
              </li>
              <li class="nav-item">
                <a
                  @click="setFeed('global')"
                  class="nav-link active"
                  href="#"
                >
                  Global Feed
                </a>
              </li>
            </ul>
          </div>
          <VArticlePreview
            v-for="article in globalArticles"
            :key="article.slug"
            :article="article"
          />
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a href="" class="tag-pill tag-default"
                >programming</a
              >
              <a href="" class="tag-pill tag-default"
                >javascript</a
              >
              <a href="" class="tag-pill tag-default"
                >emberjs</a
              >
              <a href="" class="tag-pill tag-default"
                >angularjs</a
              >
              <a href="" class="tag-pill tag-default"
                >react</a
              >
              <a href="" class="tag-pill tag-default"
                >mean</a
              >
              <a href="" class="tag-pill tag-default"
                >node</a
              >
              <a href="" class="tag-pill tag-default"
                >rails</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VArticlePreview from '@/components/VArticlePreview.vue'
export default {
  name: 'Home',
  components: {
    VArticlePreview
  },
  data: () => ({
    activeFeed: 'global'
  }),
  computed: {
    username() {
      return this.$store.getters['users/username']
    },
    globalArticles() {
      return this.$store.state.articles.feed || []
    }
  },
  methods: {
    setFeed(feedType) {
      if (feedType === 'global') {
        this.activeFeed = 'global'
        this.$store.dispatch('articles/getGlobalFeed')
      }
    }
  }
}
</script>
