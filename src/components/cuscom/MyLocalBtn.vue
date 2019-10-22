
<template>
    <div>
        <div>我输局部组件---{{valuea}}</div>
    </div>
</template>

<script>
    export default {
        name:"my-local-btn",
        data(){
            return{

            }
        },
        props:["valuea"]

    }
    // 1. 在文件夹conponents下创建自定义的组件MyComponent.vue，组件样式为：

    // 局部组件命名规范
    /*
      1文件夹名大驼峰 MyLocalBtn.vue
      2 使用的时候 将驼峰转化为横杠 <my-local-btn></my-local-btn>
    */ 
</script>


