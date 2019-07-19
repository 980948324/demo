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
                </div>
            </div>
            <div class="head-icon">
                <div>
                    <i class="el-icon-goods"></i>
                </div>
            </div>
        </div>
        <div class="head-bottom">
            <div class="item">
                <span>推荐</span>
            </div>
             <div class="item">
                <span>手机</span>
            </div>
             <div class="item">
                <span>智能</span>
            </div>
             <div class="item">
                <span>电视</span>
            </div>
             <div class="item">
                <span>笔记本</span>
            </div>
             <div class="item">
                <span>家电</span>
            </div>
        </div>
    </header>
</template>
<script>
</script>
<style scoped>
#head{
    position: fixed;
    background-color: #f2f2f2;
    width: 100%;
    z-index: 99;
}
.head-top{
    display: flex;
    flex-direction: row;
    height: 40px;
    align-items: center;
}
.head-icon,.div-search{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
}
.head-icon > div,.head-search>div{
    align-items: center;
    margin: 0 15px;
}
.head-icon img{
    width: 100%;
}
.head-search{
    flex:1;
    background: #fff;
    padding: 5px 0;
    border: 1px solid #e5e5e5;
}
i{
    font-size: 20px;
}
.head-bottom{
    display: flex;
    flex-direction: row;
    height: 20px;
    padding: 5px 0;
}
.item{
    padding: 0 11px;
    color: rgb(116, 116, 116);
    font-size: 15px;
}
</style>
