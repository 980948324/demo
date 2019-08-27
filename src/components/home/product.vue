<template>
  <div class="product">
    <a href v-for="(item, index) in product" :key="index" class="product-item">
      <div class="img">
        <img v-lazy="item.image_url" :key="item.image_url" />
      </div>
      <div class="introduct">
        <div class="name">{{item.name}}</div>
        <div class="intro">{{item.introduct}}</div>
        <div class="price">
          <span>￥{{item.price}}起</span>
          <span v-show="item.old_price!=''">￥{{item.old_price}}</span>
        </div>
        <div class="btn">立即购买</div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.product {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.15rem 0.1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.product-item {
  display: flex;
  flex-direction: column;
  width: 4.8rem;
  text-decoration: none;
  font-size: 0.4rem;
  color: #666;
  margin-bottom: 0.1rem;
  align-items: center;
  justify-content: center;
}
.product-item:nth-child(odd) {
  margin-right: 0.15rem;
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
  width: 4.85rem;
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
  width: 4.85rem;
  padding: 0.3rem 0;
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
.price span:last-of-type {
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
  font-size: 0.3rem;
  margin-left: 0.1rem;
}
.btn {
  width: 3rem!important;
  color: #fff;
  font-size: 0.4rem;
  background-color: #ea625b;
  padding: 0.15rem 0;
  font-weight: 700;
  text-align: center;
  border-radius: 0.07rem;
}
</style>
