<template>
  <div class="tv">
    <div>
      <a href class="img">
        <img v-lazy="'//i8.mifile.cn/v1/a1/7efa7bce-97e0-c135-97f4-e81eaff7bd8f.webp'" alt />
      </a>
    </div>
    <Nav :nav="nav"></Nav>
    <div class="product">
      <div style="line-height:0">
        <img v-lazy="'//i8.mifile.cn/v1/a1/95ac3030-3f26-7aa3-096d-d2f5e6e5b5a0.webp'" alt />
      </div>
      <div style="background:rgb(40, 112, 187);padding:0 .1rem">
        <div style="line-height:0">
          <a href>
            <img v-lazy="'//i8.mifile.cn/v1/a1/6a422d1f-23c8-af0d-5e8a-dca42e4e6308.webp'" alt />
          </a>
        </div>
        <div class="bigpro">
          <div>
            <div>RedmiBook 14 独显版</div>
            <div>￥3999起</div>
          </div>
          <div>
            <div>增强版酷睿™处理器 独立显卡 轻薄便携长续航</div>
            <div>立即购买</div>
          </div>
        </div>
      </div>
      <product :product="product" class="product"></product>
    </div>
  </div>
</template>
<script>
import json from "../../assets/json/home4.json";
import product from "./product.vue";
import Nav from "./menu2.vue"
export default {
  data() {
    return {
      nav: [
        {
          image_url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/662439164e28c3ad0684bc1c4a09cf10.jpg?thumb=1&w=144&h=152"
        },
        {
          image_url:
            "//i8.mifile.cn/v1/a1/8a9f0e23-9fbb-d3e8-f014-95866f0041d6.webp"
        },
        {
          image_url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/385bcd934aaf7c6a0c04332c142244fb.jpg?thumb=1&w=144&h=152"
        },
        {
          image_url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/79eb6930ce565a5c8b34c030cdff9dbc.jpg?thumb=1&w=144&h=152"
        },
        {
          image_url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/07a93329e2b6cc925d7bb091a92b441d.jpg?thumb=1&w=144&h=152"
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
.product {
  background-color: rgb(21, 100, 229);
}
.bigpro {
  padding: 0.25rem 0.3rem;
  display: flex;
  flex-direction: column;
  font-size: 0.4rem;
  background-color: #fff;
}
.bigpro > div:first-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bigpro > div:first-child > div:last-child {
  color: #ea625b
}
.bigpro > div:last-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.bigpro > div:last-child > div:first-child {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0,0,0,.54);
  font-size: .35rem;
}
.bigpro > div:last-child > div:last-child {
  width: 2.5rem;
  background: #ea625b;
  border-radius: 0.05rem;
  text-align: center;
  color: #fff;
  font-size: 0.34rem;
  padding: 0.16rem 0;
  font-weight: 700;
}
</style>
