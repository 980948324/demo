<template>
  <div id="home">
    <Header></Header>
    <div class="bodys">
      <Swiper></Swiper>
      <Menu></Menu>
      <Card></Card>
      <Product></Product>
    </div>
  </div>
</template>

<script>
import Header from '../components/home/header.vue'
import Swiper from '../components/home/swiper.vue'
import Menu from '../components/home/menu.vue'
import Card from '../components/home/card.vue'
import Product from '../components/home/product.vue'
export default {
  name: 'home',
  components: {
    Header,
    Swiper,
    Menu,
    Card,
    Product
  }
}
</script>
<style scoped>
.bodys{
  padding-top: 1.7rem;
  padding-bottom: 150px;
}
</style>

