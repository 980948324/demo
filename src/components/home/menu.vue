<template>
  <div class="menus">
    <a :href="item.url" class="menu-item" v-for="(item, index) in menu" :key="index">
      <img v-lazy="item.image_url" alt />
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
.menu {
  display: flex;
  flex-wrap: wrap;
  height: 1.52rem;
}
.menu-item {
  display: inline-flex;
  width: 20%;
  height: auto;
  background-color: #fff;
}
.menu-item img {
  width: 100%;
}
</style>
