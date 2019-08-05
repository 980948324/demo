<template>
  <transition name="foot" appear>
    <footer id="footer" v-show="showFoot">
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
  </transition>
</template>
<script>
export default {
  data: function() {
    return {
      select: "/",
      showFoot: true
    };
  },
  watch: {
    $route: function(to, from) {
      var selected = ["/", "/type", "/cart", "/my"];
      if (selected.indexOf(to.path) === -1) {
        this.showFoot = false;
      } else {
        this.showFoot = true;
        this.select = to.path;
      }
    }
  },
  beforeMount() {
    var selected = ["/", "/type", "/cart", "/my"];
      if (selected.indexOf(this.$route.path) === -1) {
        this.showFoot = false;
      } else {
        this.showFoot = true;
        this.select = to.path;
      }
  }
};
</script>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
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
  font-size: 12px;
}
.select a {
  color: #ff6700;
}
.foot-enter-to,
.foot-leave {
  transform: translateY(0);
}
.foot-enter,
.foot-leave-to {
  transform: translateY(100%)
}
.foot-enter-active,
.foot-leave-active {
  transition: all .5s ease;
}
</style>
