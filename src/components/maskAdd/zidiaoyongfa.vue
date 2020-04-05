<template>
    <div>
       
     <div v-for="(item,index) in list" :key="index" class="demo">
         <input type="text" :id="`demo${index}`">
         <button @click="handler(index)" @blur="getterValue(index)">添加</button>
     </div>

    </div>
</template>

<script>
    export default {
        data(){
          return{
            list:["12"]
          }
        },
        methods:{
            handler(mess){
                this.list.push("jo")
            },
            getterValue(mess){
                let aa=document.getElementById("demo"+mess).value;
                console.log("得到的值是", aa)
            }
        }
    }
</script>
