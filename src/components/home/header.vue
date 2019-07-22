<template>
    <header id="head">
        <div class="head-top">
            <div class="head-icon">
                <div>
                    <img src="../../assets/mi.png" alt="">
                </div>
            </div>
            <div class="head-search">
                <div>
                    <i class="el-icon-search"></i>
                    搜索商品名称
                </div>
            </div>
            <div class="head-icon">
                <div>
                    <i class="el-icon-user"></i>
                </div>
            </div>
        </div>
        <div class="head-bottom">
            <div class="pulldown" v-show="showPullDown"></div>
            <div class="nav-display">
                <i class="el-icon-arrow-down"></i>
            </div>
            <div class="nav" v-show="!showPullDown">
                <div class="navitem"  v-for="(item, index) in navlist" :key="index">
                    <span :class="showIndex==index?'activeitem':''">{{item}}</span>
                </div>
                <div class="navitem2"></div>
            </div>
        </div>
    </header>
</template>
<script>
export default{
    data:function(){
        return {
            navlist:["推荐","手机","智能","电视","笔记本","家电","生活周边"],
            showIndex:0,
            showPullDown:false
        }
    }
}
</script>
<style scoped>
#head{
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
    width: 100%;
    z-index: 99;
    box-shadow: 5px 0 2px grey;
}
.head-top{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 1.04rem;
    color:#666;
    justify-content: space-between;
}
.head-top div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.head-top i{
    font-size: 20px;
    margin-right: 5px;
}
.head-icon{
    display: flex;
}
.head-icon > div{
    width: .6rem;
    margin: 0 .2rem;
}
.head-icon img{
    width:80%;
}
.head-search{
    flex:1;
    font-size: 14px;
    color:rgba(0,0,0,.3);
}
.head-search div{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 70%;
    background-color: #fff;
    padding-left: 5px;
}

.head-bottom{
    position: relative;
    display: flex;
    flex-direction: row;
    height: .64rem;
}
.nav-display{
    display: flex;
    position: absolute;
    right:0;
    top: 0;
    height: .64rem;
    width: .88rem;
    line-height: .54rem;
    font-size: 20px;
    color: #999;
    text-align: center;
    background-color: #f2f2f2;
    align-items: center;
    justify-content: center;
}
.nav{
    overflow-x: auto;
    white-space: nowrap;
    background: #f2f2f2;
    font-size: .36rem;
    line-height: .64rem;
}
.nav::-webkit-scrollbar {
  display: none;
}
.navitem{
    display: inline-block;
    padding: 0 .35rem;
    color: rgb(116, 116, 116);
}
.navitem span{
    display: inline-block;
    line-height: .54rem;
}
.activeitem{
    color: rgb(237, 91, 0);
    border-bottom: 2px solid rgb(237, 91, 0)
}
.navitem2{
    display: inline-block;
    height: 1px;;
    width: 0.88rem;
}
</style>
