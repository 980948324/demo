<template>
    <div class="product">
        <a href="" v-for="(item, index) in product" :key="index" class="product-item">
            <div class="img"><img v-lazy="item.image_url" alt=""></div>
            <div class="introduct">
                <div class="name">{{item.name}}</div>
                <div class="intro">{{item.introduct}}</div>
                <div class="price">
                    <span>￥{{item.price}}起</span>
                    <span v-show="item.old_price!=''">￥{{item.old_price}}</span>
                </div>
                <div class="btn">立即购买</div>
            </div>
        </a>
    </div>
</template>
<script>
import json1 from "../../assets/json/home1.json"
export default {
    data: function(){
        return {
            product:json1
        }
    },
}
</script>
<style scoped>
.product{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: .15rem .1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
}
.product-item{
    width: 4.8rem;
    text-decoration: none;
    font-size: .40rem;
    color: #666;
}
.product-item:nth-child(odd){
    margin-right: .1rem;
}
.img{
    width: 100%;   
}
.img img{
    width: 100%;
    animation: opacity01 1s;
}
.introduct{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .3rem 0;
}
.introduct > div{
    margin-top:.05rem;
}
.name{}
.intro{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .3rem;
    color: rgba(0,0,0,.54);
}
.price{
    color:#ea625b;
    font-size: .4rem
}
.price span:last-of-type{
    color: rgba(0,0,0,.54);
    text-decoration:line-through;
    font-size: .3rem;
    margin-left: .1rem;
}
.btn{
    width: 3rem;
    color: #fff;
    font-size: 0.4rem;
    background-color: #ea625b;
    padding: .15rem 0;
    font-weight: 700;
    text-align: center;
    border-radius: .07rem;
}
</style>
