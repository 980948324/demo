<template>
  <transition name="head" appear>
    <header v-show="showHead">
      <div></div>
      <div>
        <span>{{title}}</span>
      </div>
      <div>
        <i class="el-icon-search"></i>
      </div>
    </header>
  </transition>
</template>
<script>
export default {
  data: function() {
    return {
      title: "",
      showHead: false,
      select: "/"
    };
  },
  methods: {
    changeTitle(toPath, fromPath) {
      if (this.select == "/type") {
        this.title = "分类";
        this.showHead = true;
      } else if (this.select == "/cart") {
        this.title = "购物车";
        this.showHead = true;
      } else {
        this.showHead = false;
      }
    }
  },
  watch: {
    $route: function(to, from) {
      this.select = to.path;
      this.changeTitle(to.path, from.path);
    }
  },
  beforeMount() {
    this.select = this.$route.path;
    this.changeTitle();
  }
};
</script>
<style scoped>
header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  font-size: 16px;
}
header div {
  flex: 1;
}

header div:nth-of-type(2) {
  text-align: center;
}
header div:nth-of-type(3) {
  text-align: right;
}
header div:nth-of-type(3) i {
  font-size: 20px;
  margin-right: 20px;
  color: #999;
}
.head-leave,
.head-enter-to {
  transform: translateY(0);
}
.head-leave-to,
.head-enter {
  transform: translateY(-51px);
}
.head-enter-active,
.head-leave-active {
  transition: all 0.2s ease;
}
</style>
