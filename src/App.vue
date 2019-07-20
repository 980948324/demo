<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Type/header.vue";
import Footer from "./components/home/footer.vue";
export default {
  name: "app",
  data: function () {
    return {}
  },
  components: {
    Header,
    Footer
  },
  methods: {}
}
</script>
<style scoped>
</style>
