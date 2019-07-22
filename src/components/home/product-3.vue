<template>
    <div class="product">
        <a href="" v-for="(item, index) in product" :key="index" class="product-item">
            <div class="img"><img v-lazy="item.image_url" alt=""></div>
            <div class="introduct">
                <div class="name">{{item.name}}</div>
                <div class="intro">{{item.introduct}}</div>
                <div class="price">
                    <span>￥{{item.price}}</span>
                    <span v-show="item.old_price!=''">￥{{item.old_price}}</span>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
import json from "../../assets/json/home2.json"
export default {
    data: function(){
        return {
            product:json
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
    width: 3.1rem;
    text-decoration: none;
    font-size: .40rem;
    color: #666;
}
.product-item{
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
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.name{}
.intro{
    font-size: .3rem;
    color: rgba(0,0,0,.54);
}
.price{
    color:#ea625b;
    font-size: .38rem;
    font-weight: 700;
}
.price span:last-of-type{
    color: rgba(0,0,0,.54);
    text-decoration:line-through;
    font-size: .3rem;
    margin-left: .1rem;
}
</style>
