<template>
  <div id="app">
    <Header></Header>
    <div class="router">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Type/header.vue";
import Footer from "./components/home/footer.vue";
import Rem from "./assets/js/rem.js";
new Rem();
export default {
  name: "app",
  data: function() {
    return {};
  },
  components: {
    Header,
    Footer
  },
  methods: {}
};
</script>
<style scoped>
.router {
  padding-bottom: 51px;
}
</style>
