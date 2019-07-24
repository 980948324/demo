<template>
    <div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        getData(){
            var id = this.$router.currentRoute.params.id
            console.log(id)
        }
    },
    mounted() {
        this.getData()
    },
}
</script>
<style scoped>

</style>
