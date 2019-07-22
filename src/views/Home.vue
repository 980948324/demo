<template>
  <div id="home">
    <Header @func="getIndex" @pull="getPull" ref="header"></Header>
    <div class="model" v-if="showPull" @click="closePull">
      <div class="model-mask"></div>
    </div>
    <div class="bodys" v-show="showIndex==0">
      <Swiper :swipers="home1.swiper"></Swiper>
      <Menu :menu="home1.menu"></Menu>
      <Card></Card>
      <Product :product="json1"></Product>
    </div>
    <div class="bodys" v-show="showIndex==1">
      <Swiper :swipers="home2.swiper"></Swiper>
      <Product :product="json1"></Product>
    </div>
    <div class="bodys" v-show="showIndex==2">
      <Swiper :swipers="home3.swiper"></Swiper>
      <Menu :menu="home3.menu"></Menu>
      <Product3></Product3>
    </div>
    <div class="bodys" v-show="showIndex==3">
      <TV></TV>
    </div>
    <div class="bodys" v-show="showIndex==4">
      <Computer></Computer>
    </div>
    <div class="bodys" v-show="showIndex==5">
      <Swiper :swipers="home6.swiper"></Swiper>
      <Nav :nav="home6.nav"></Nav>
      <div style="line-height:0">
        <img
          style="height:1.1rem;widht:100%;display:block;"
          src="//i8.mifile.cn/v1/a1/eb69d32d-1813-8cda-6ba7-e293b77f52dd.webp"
          alt
        />
      </div>
      <Product :product="json5"></Product>
    </div>
    <div class="bodys" v-show="showIndex==6">
      <Swiper :swipers="home7.swiper"></Swiper>
      <Nav :nav="home7.nav"></Nav>
      <div style="line-height:0">
        <img
          style="height:1.1rem;widht:100%;display:block;"
          src="//i8.mifile.cn/v1/a1/f2635080-3835-53f0-5f80-ac1e50e0784c.webp"
          alt
        />
      </div>
      <Product :product="json5"></Product>
    </div>
  </div>
</template>

<script>
import json1 from "../assets/json/home1";
import json5 from "../assets/json/home5";
import Header from "../components/home/header.vue";
import Swiper from "../components/home/swiper.vue";
import Menu from "../components/home/menu.vue";
import Card from "../components/home/card.vue";
import Product from "../components/home/product.vue";
import Product3 from "../components/home/product-3.vue";
import TV from "../components/home/TV.vue";
import Computer from "../components/home/computer.vue";
import Nav from "../components/home/menu2.vue";
export default {
  name: "home",
  data() {
    return {
      showIndex: 0,
      showPull:false,
      json1: json1,
      json5: json5,
      home1: {
        swiper: [
          {
            image_url:
              "//i8.mifile.cn/v1/a1/5226a61a-1c39-4b80-5eb6-cc4a27ec810e.webp",
            alt: "first"
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c352beae76d56e4a98c48c8782a497b2.jpg?thumb=1&w=720&h=360",
            alt: "second"
          }
        ],
        menu: [
          {
            image_url:
              "//i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b.webp",
            url: ""
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp",
            url: ""
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/26a132d9-c5ae-8a30-2705-f861e2e9f496.webp",
            url: ""
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp",
            url: ""
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp",
            url: ""
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152",
            url: ""
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152",
            url: ""
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152",
            url: ""
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/e49720d6-3a48-ac6e-44d4-79f92b2e890c.webp",
            url: ""
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152",
            url: ""
          }
        ]
      },
      home2: {
        swiper: [
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6760547aa713f72d47f8f81425caa4c.jpg?thumb=1&w=720&h=360",
            alt: "first"
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f08d593e99c34980480f9e2d395c80b4.jpg?thumb=1&w=720&h=360",
            alt: "second"
          }
        ]
      },
      home3: {
        swiper: [
          {
            image_url:
              "//i8.mifile.cn/v1/a1/fe08cdfd-5a9c-0c44-ac75-924ea7494207.webp",
            alt: "first"
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20bc031bc5ca94aece4564369330f60a.jpg?thumb=1&w=720&h=360",
            alt: "second"
          }
        ],
        menu: [
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47dad0c224065a73a4c722eeaf1b8e1.jpg?thumb=1&w=144&h=152",
            url: ""
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/eddc5967-7f37-bf45-72d9-de0db438658b.webp",
            url: ""
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/8d73dc73-3a27-1587-6c43-47998c859a48.webp",
            url: ""
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/afe66888-30af-d023-ebbe-6ed7e4607167.webp",
            url: ""
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/3ad80cd6-0188-1c0a-95d3-aeaa58ede247.webp",
            url: ""
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9b8b8e686044afb2585e78a03ee96b6.png?thumb=1&w=144&h=152",
            url: ""
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3304e52970aa972c4f4ccd6eb424ad7.png?thumb=1&w=144&h=152",
            url: ""
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fed94691e4b361f237d411c3f687c2d4.png?thumb=1&w=144&h=152",
            url: ""
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2bc35b6be2ab377bfc7e8fddeaa54c5.png?thumb=1&w=144&h=152",
            url: ""
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d41a54c825db28e47888db6bd61349de.png?thumb=1&w=144&h=152",
            url: ""
          }
        ]
      },
      home6: {
        swiper: [
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bea80c7f7891a884a89251af847c56f.jpg?thumb=1&w=720&h=360",
            alt: "first"
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/854e5a13-8ee5-30c0-c869-6268cc4f8cc0.webp",
            alt: "second"
          }
        ],
        nav: [
          {
            image_url:
              "//i8.mifile.cn/v1/a1/e44693a1-7703-8f89-fc0f-f280ee271ac9.webp"
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/9debf9a2-ff6b-b166-dc9e-8df8dcadf696.webp"
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/6c04eeb7-ba1f-a125-76b7-2639939d842f.webp"
          },
          {
            image_url:
              "//i8.mifile.cn/v1/a1/560c7937-dff9-459f-44ec-d8690b563e16.webp"
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5519a3c74b524f849f2c30b9f8b96b16.jpg?thumb=1&w=144&h=152"
          }
        ]
      },
      home7: {
        swiper: [
          {
            image_url:
              "//i8.mifile.cn/v1/a1/a327b9f5-b06c-4568-7974-42282e7a9131.webp",
            alt: "first"
          },
          {
            image_url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/99268d31d01c0caf3c7a4eed880571d5.jpg?thumb=1&w=720&h=360",
            alt: "second"
          }
        ],
        nav: [
          {
            image_url:
              "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744a6c8c5fd696193d9f608f683f9c6e.jpg?thumb=1&w=144&h=152"
          },
          {
            image_url:
              "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2aec734a14f5301128219279b016c9a6.jpg?thumb=1&w=144&h=152"
          },
          {
            image_url:
              "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ebe7f67192ddb55b4f8f94f2e1ab4376.jpg?thumb=1&w=144&h=152"
          },
          {
            image_url:
              "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/08b6ade705922f14f196bcd905903caf.jpg?thumb=1&w=144&h=152"
          },
          {
            image_url:
              "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/921ce6cd7c033799e45ca01e32430402.jpg?thumb=1&w=144&h=152"
          }
        ]
      }
    };
  },
  methods: {
    getIndex(index) {
      this.showIndex = index;
    },
    getPull(flag){
      this.showPull = flag
    },
    closePull(){
      this.$refs.header.toggleBar()
    }
  },
  components: {
    Header,
    Swiper,
    Menu,
    Card,
    Product,
    Product3,
    TV,
    Computer,
    Nav
  }
};
</script>
<style scoped>
.bodys {
  padding-top: 1.85rem;
  padding-bottom: 60px;
}
.model{
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.model-mask{
  background-color: rgba(0, 0, 0, .3);
  z-index: 999;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

