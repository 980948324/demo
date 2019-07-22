<template>
    <div class="menus">
        <a :href="item.url" class="menu-item" v-for="(item, index) in menus" :key="index">
            <img :src="item.image_url" alt="">
        </a>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            menus:[
                {
                    image_url:"//i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b.webp",
                    url:""
                },
                {
                    image_url:"//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp",
                    url:""
                },
                {
                    image_url:"//i8.mifile.cn/v1/a1/26a132d9-c5ae-8a30-2705-f861e2e9f496.webp",
                    url:""
                },
                {
                    image_url:"//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp",
                    url:""
                },
                {
                    image_url:"//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp",
                    url:""
                },
                {
                    image_url:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152",
                    url:""
                },
                {
                    image_url:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152",
                    url:""
                },
                {
                    image_url:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152",
                    url:""
                },
                {
                    image_url:"//i8.mifile.cn/v1/a1/e49720d6-3a48-ac6e-44d4-79f92b2e890c.webp",
                    url:""
                },
                {
                    image_url:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152",
                    url:""
                }
            ]
        }
    }
}
</script>
<style scoped>
.menu{
    display: flex;
    flex-wrap: wrap;
    height: 1.52rem
}
.menu-item{
    display: inline-flex;
    width: 20%;
    height: auto;
    background-color: #fff;
}
.menu-item img{
    width: 100%;
}
</style>
