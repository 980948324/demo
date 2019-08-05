<template>
  <div class="detail">
    <header>
      <div>
        <a @click="$router.back()">
          <i class="el-icon-arrow-left"></i>
        </a>
        <a href>
          <i class="el-icon-share"></i>
        </a>
      </div>
    </header>
    <Swiper :swipers="goodsDetail.prod_image"></Swiper>
    <div class="infos">
      <div class="name">{{goodsDetail.prod_name}}</div>
      <div class="intro">
        <font color="#ff4a00">{{goodsDetail.prod_short_intro}}</font>
        {{goodsDetail.prod_intro}}
      </div>
      <div class="price">
        <span>￥{{goodsDetail.prod_price}}</span>
        <span>￥{{goodsDetail.prod_old_price}}</span>
      </div>
    </div>
    <div style="line-height:0">
      <img
        v-lazy="item"
        class="intro_img"
        v-for="(item,index) in goodsDetail.prod_intro_image"
        :key="index"
      />
    </div>

    <div class="cart">
      <div>
        <a href>
          <i class="el-icon-house"></i>
          首页
        </a>
        <a href>
          <i class="el-icon-shopping-cart-1"></i>
          购物车
        </a>
      </div>
      <div>
        <a class="btn" @click="addToCart">加入购物车</a>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "../components/home/swiper";
export default {
  data() {
    return {
      goodsDetail: {}
    };
  },
  methods: {
    getData() {
      var id = this.$router.currentRoute.params.id;
      this.axios
        .get("/api/mi/connect.php?proid=" + id)
        .then(res => {
          if (res.status === 200) {
            res.data[0].prod_image = res.data[0].prod_image.split("|");
            res.data[0].prod_image = res.data[0].prod_image.map(item => ({
              image_url: item
            }));
            res.data[0].prod_intro_image = res.data[0].prod_intro_image.split(
              "|"
            );
            this.goodsDetail = res.data[0];
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    addToCart(){
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    Swiper
  }
};
</script>
<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 50px;
  background: transparent;
}
header > div {
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
}
header > div > a {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: dimgray;
  color: #ddd;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.5rem;
  margin: 0 0.2rem;
}
.infos .name {
  font-size: 0.65rem;
  margin: 0.35rem 0.4rem 0.1rem;
}
.infos .intro {
  font-size: 0.38rem;
  margin: 0 0.4rem;
}
.infos .price {
  display: flex;
  flex-direction: row;
  margin: 0.1rem 0.4rem;
  align-items: flex-end;
}
.infos .price span:first-child {
  color: #ff4a00;
  font-size: 0.6rem;
}
.infos .price span:last-child {
  text-decoration: line-through;
  font-size: 0.4rem;
}
.intro_img {
  width: 100%;
  margin: 0;
}
.cart {
  position: fixed;
  bottom: 0.3rem;
  width: 96%;
  margin: 0 2%;
  display: flex;
  flex-direction: row;
  font-size: 0.5rem;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  color: #999;
  height: 1.3rem;
  border-radius: 0.4rem;
  box-shadow: 0px 2px 4px 1px #999;
}
.cart div:first-child a {
  text-align: center;
  color: #999;
  margin-left: 0.5rem;
  font-size: 0.4rem;
}
.cart div:first-child i {
  font-size: 0.5rem;
}
.cart a {
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
}
.cart .btn {
  background: #ff4a00;
  color: #fff;
  padding: 0.1rem 0.5rem;
  border-radius: 15px;
  margin-right: 0.2rem;
  font-size: .5rem;
}
</style>
