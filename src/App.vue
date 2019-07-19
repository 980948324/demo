<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/home/footer.vue";
export default {
  name: 'app',
  components: {
    Footer
  }
}

</script>
