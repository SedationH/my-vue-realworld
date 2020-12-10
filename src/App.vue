<template>
  <div id="app">
    <RwvHeader />
    <router-view />
  </div>
</template>

<script>
import RwvHeader from './components/TheHeader.vue'

export default {
  components: {
    RwvHeader
  }
}
</script>

<style></style>
