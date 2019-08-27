<template>
  <div class="nav">
    <div v-for="(item, index) in nav" :key="index" class="navitem">
      <a href>
        <img v-lazy="item.image_url" :key="item.image_url" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
    props:["nav"]
};
</script>
<style scoped>
a {
  line-height: 0;
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
</style>
