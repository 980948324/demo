<template>
  <footer id="footer">
    <div class="item" :class="select==0?'select':''" @click="select=0">
      <router-link to="/">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </router-link>
    </div>
    <div class="item" :class="select==1?'select':''" @click="select=1">
      <router-link to="/type">
        <i class="el-icon-tickets"></i>
        <span>分类</span>
      </router-link>
    </div>
    <div class="item" :class="select==2?'select':''" @click="select=2">
      <router-link to="/cart">
        <i class="el-icon-shopping-cart-2"></i>
        <span>购物车</span>
      </router-link>
    </div>
    <div class="item" :class="select==3?'select':''" @click="select=3">
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
      select: 0
    }
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
