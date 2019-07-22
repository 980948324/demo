<template>
  <div class="tv">
    <div>
      <a href class="img">
        <img
          v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/04a1dd73c368d44899556c1e3a630c0e.jpg?thumb=1&w=720&h=360'"
          alt
        />
      </a>
    </div>
    <Nav :nav="nav"></Nav>
    <div class="product">
      <div style="line-height:0">
        <img v-lazy="'//i8.mifile.cn/v1/a1/e4f2ad18-be05-929a-e847-450ad068d74a.webp'" alt />
      </div>
      <product :product="product" class="product"></product>
    </div>
  </div>
</template>
<script>
import json from "../../assets/json/home3.json";
import product from "./product.vue";
import Nav from "./menu2.vue"
export default {
  data() {
    return {
      nav: [
        {
          image_url:
            "//i8.mifile.cn/v1/a1/d6b89c95-3a83-fe66-be3a-ef2ee70e0de5.webp"
        },
        {
          image_url:
            "//i8.mifile.cn/v1/a1/9ff81c6e-4fcc-ba35-1c5a-d1474440022e.webp"
        },
        {
          image_url:
            "//i8.mifile.cn/v1/a1/6330648c-e1ee-1cf0-6dfc-0f4a4d9c13e0.webp"
        },
        {
          image_url:
            "//i8.mifile.cn/v1/a1/ce318598-2014-1e0d-ec78-f95f488b532b.webp"
        },
        {
          image_url:
            "//i8.mifile.cn/v1/a1/56a22178-20a2-5ed2-2830-f3235d71ca43.webp"
        }
      ],
      product: json
    };
  },
  components: {
    product,
    Nav
  }
};
</script>
<style scoped>
a {
  line-height: 0;
}
.img {
  display: block;
  width: 100%;
}
.img img {
  width: 100%;
  height: auto;
}
.nav {
  display: flex;
}
.navitem {
  display: flex;
  flex: 1;
}
.navitem img {
  width: 100%;
}
.product img {
  width: 100%;
}
.product{
    background-color: rgb(21, 100, 229)
}
</style>
