<template>
    <div class="swiper-container">
        <div class="swiper-wrapper" style="transform: translateX(0)" @touchstart="start" @touchmove="move" @touchend="end" ref="swiper">
            <div class="swiper-item" v-for="(item, index) in swiper" :key="index">
                <a href="">
                    <img :src="item.image_url" :alt="item.alt">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"swiper-container",
    data:function(){
        return {
            screenWidth:0,
            startX:0,
            moveLength:0,
            scrollLength:0,
            endX:0,
            swiper:[
                {
                    image_url:"//i8.mifile.cn/v1/a1/5226a61a-1c39-4b80-5eb6-cc4a27ec810e.webp",
                    alt:"first"
                },{
                    image_url:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c352beae76d56e4a98c48c8782a497b2.jpg?thumb=1&w=720&h=360",
                    alt:"second"
                }
            ]
        }
    },
    methods: {
        start(e){
            this.startX = e.targetTouches[0].clientX
        },
        move(e){
            let nowX =  e.targetTouches[0].clientX
            let moveLength = nowX - this.startX
            this.moveLength = moveLength
            let l = this.scrollLength + moveLength
            this.$refs.swiper.style.transform = 'translateX('+ l +'px)'
        },
        end(e){
            console.log('end')
            let width = this.screenWidth / 2
            let totallength = (this.swiper.length-1) * this.screenWidth
            if(((this.scrollLength==0&&this.moveLength<0)||(this.scrollLength==-totallength&&this.moveLength>0))&&(this.moveLength>width || -this.moveLength > width)){
                let l 
                if(this.moveLength>0){
                    l = this.scrollLength + this.screenWidth
                    this.scrollLength += this.screenWidth
                }else{
                    l = this.scrollLength + (-this.screenWidth)
                    this.scrollLength += (-this.screenWidth)
                }
                this.$refs.swiper.style.transform = 'translateX('+ l +'px)'

            }else{
                this.$refs.swiper.style.transform = 'translateX('+ this.scrollLength +'px)'
            }
        }
    },
    mounted() {
        var screenWidth = window.innerWidth
        this.screenWidth = screenWidth
    },
}
</script>
<style scoped>
.swiper-container{
    position: relative;
    background-color: #ccc;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    overflow: hidden;
}
.swiper-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transfrom;
    transition: all .1s ease
}
.swiper-item{
    width: 100%;
    flex-shrink: 0;
}
.swiper-item img{
    width: 100%;
    height: 100%;
}
</style>
