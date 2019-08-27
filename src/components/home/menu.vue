<template>
  <div class="menus">
    <a :href="item.url" class="menu-item" v-for="(item, index) in menu" :key="index">
      <img v-lazy="item.image_url" :key="item.image_url" />
    </a>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  props: ["menu"]
}
</script>
<style scoped>
.menus {
  display: flex;
  flex-wrap: wrap;
}
.menu-item {
  display: inline-flex;
  background-color: #fff;
  width: 20%;
}
.menu-item img {
  width: 100%;
  height: 2.2rem;
}
</style>
