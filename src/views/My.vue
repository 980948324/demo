<template>
  <div class="My">
    <header class="header">
      <div class="header-main">
        <el-avatar
          class="avatar"
          :size="45"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>登录/注册</span>
      </div>
    </header>
    <div class="myorder">
      <div class="myorder-top">
        <span>我的订单</span>
        <div>
          <span style="font-size:14px">全部订单</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <ul class="myorder-bottom">
        <li class="order-item">
          <router-link to="/order">
            <i class="el-icon-wallet"></i>
            <span>待付款</span>
          </router-link>
        </li>
        <li class="order-item">
          <router-link to="/order">
            <i class="el-icon-truck"></i>
            <span>待收货</span>
          </router-link>
        </li>
        <li class="order-item">
          <router-link to="/order">
            <i class="el-icon-paperclip"></i>
            <span>退换修</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="ui-line"></div>
    <ul class="list">
      <li class="list-item">
        <router-link to="/viper">
          <div class="item-main">
            <i class="el-icon-platform-eleme"></i>
            <span>会员中心</span>
          </div>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
      <li class="list-item">
        <router-link to="/coupon">
          <div class="item-main">
            <i class="el-icon-platform-eleme"></i>
            <span>我的优惠</span>
          </div>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="list">
      <li class="list-item">
        <router-link to="/viper">
          <div class="item-main">
            <i class="el-icon-platform-eleme"></i>
            <span>服务中心</span>
          </div>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
      <li class="list-item">
        <router-link to="/coupon">
          <div class="item-main">
            <i class="el-icon-platform-eleme"></i>
            <span>小米之家</span>
          </div>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="list">
      <li class="list-item">
        <router-link to="/viper">
          <div class="item-main">
            <i class="el-icon-platform-eleme"></i>
            <span>F码通道</span>
          </div>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="list">
      <li class="list-item">
        <router-link to="/viper">
          <div class="item-main">
            <i class="el-icon-platform-eleme"></i>
            <span>设置</span>
          </div>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.My {
  background-color: #f5f5f5;
  padding-bottom: 30px;
}
.header {
  background-color: #f37d0f;
  padding: 20px 0;
}
.header-main {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.avatar {
  margin: 0 15px 0 20px;
}
.header-main span {
  color: #fff;
  font-size: 14px;
}
.myorder-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #fff;
}
.myorder-bottom {
  padding: 0 40px;
  display: flex;
  list-style: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}
.order-item {
  display: flex;
  padding: 20px 0;
}
.order-item a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.87);
  font-size: 13px;
}
.order-item a i {
  font-size: 27px;
  color: #999;
}
.ui-line {
  height: 10px;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.list {
  background-color: #fff;
}
.list-item {
  position: relative;
}
.list-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.list-item:not(:first-child)::before {
  content: "";
  position: absolute;
  left: 0;
  top: -2px;
  height: 3px;
  background: #fff;
  width: 50px;
}
.list-item i {
  font-size: 20px;
}
.list-item a {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 15px;
  color: rgba(0, 0, 0, 0.54);
}
.item-main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-main i {
  font-size: 25px;
  margin-right: 8px;
}
</style>
