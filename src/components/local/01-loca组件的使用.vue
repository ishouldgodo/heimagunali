<template>
    <div>
        <!-- 使用局部组件 -->
        <my-local-btn valuea="新增数据"></my-local-btn>
    </div>
</template>

<script>
import MyLocalBtn from   "../../components/cuscom/MyLocalBtn";
    export default {
        data(){
            return{

            }
        },
        components: {
            'my-local-btn': MyLocalBtn
        },

    }
</script>

<style  scoped>

</style>