<template>
  <div class="cart">
    <div class="noitem">
      <router-link to="/">
        <span>购物车还是空的</span>
        <span>去逛逛</span>
      </router-link >
    </div>
    <div class="like">
      <img src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt />
    </div>
    <div class="product">
      <a href v-for="(item, index) in product" :key="index" class="product-item">
        <div class="img">
          <img v-lazy="item.image_url" alt />
        </div>
        <div class="introduct">
          <div class="name">{{item.name}}</div>
          <div class="price">
            <span>￥{{item.price}}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import json from "../assets/json/like.json";
export default {
  data() {
    return {
      product: json
    };
  }
};
</script>
<style scoped>
.cart {
  padding-top: 51px;
  font-size: 16px;
}
.noitem {
  padding: 0.2rem 0.25rem;
  background: #ebebeb;
}
.noitem a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #666;
  padding: 0.2rem 0;
  font-size: 0.3rem;
}
.noitem span:nth-child(2) {
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.87);
  padding: 0.1rem 0.2rem;
  margin-left: 0.2rem;
  font-size: 0.35rem;
}
.like {
  line-height: 0;
}
.like img {
  width: 100%;
}
.product {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;
  justify-content: space-between;
}
.product-item {
  display: flex;
  flex-direction: column;
  flex: 0 1 49.5%;
  text-decoration: none;
  font-size: 0.4rem;
  color: #666;
  margin-bottom: 0.1rem;
  align-items: center;
  justify-content: center;
}
.product-item:nth-child(odd) {
}
.introduct > div {
  margin-top: 0.05rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.img {
  height: 4.85rem;
  line-height: 0;
}
.img img {
  width: 100%;
  height: 100%;
  animation: opacity01 1s;
}
.introduct {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.1rem;
  background: #fff;
}
.introduct > div {
  margin-top: 0.05rem;
}
.name {
}
.intro {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.3rem;
  color: rgba(0, 0, 0, 0.54);
}
.price {
  color: #ea625b;
  font-size: 0.4rem;
}
</style>

