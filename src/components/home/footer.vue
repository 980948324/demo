<template>
  <footer id="footer">
    <div class="item" :class="select=='/'?'select':''">
      <router-link to="/">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </router-link>
    </div>
    <div class="item" :class="select=='/type'?'select':''">
      <router-link to="/type">
        <i class="el-icon-tickets"></i>
        <span>分类</span>
      </router-link>
    </div>
    <div class="item" :class="select=='/cart'?'select':''">
      <router-link to="/cart">
        <i class="el-icon-shopping-cart-2"></i>
        <span>购物车</span>
      </router-link>
    </div>
    <div class="item" :class="select=='/my'?'select':''">
      <router-link to="/my">
        <i class="el-icon-user"></i>
        <span>我的</span>
      </router-link>
    </div>
  </footer>
</template>
<script>
export default {
  data: function () {
    return {
      select: '/'
    }
  },
  watch: {
    $route: function (to, from) {
      this.select = to.path
    }
  },
  beforeMount () {
    this.select = this.$route.path
  }
}
</script>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  z-index: 999;
  background-color: #fff;
}
.item {
  flex: 1 1 auto;
  padding: 5px 0;
}
.item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #999;
}
.item i {
  font-size: 25px;
}
.item span {
  font-size: 14px;
}
.select a {
  color: #ff6700;
}
</style>
