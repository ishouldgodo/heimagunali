<template>
    <div>
      <timezhou v-for="(item,index) in arrList" :key="index" :con="item"></timezhou>
      

      <aa v-model="name"></aa>
      {{name}}
    
// render函数有哪些优势？？？？
// 如何在<p></p>下面在创建一个元素。或者多件多个元素？？？？

    
    </div>
</template>
<script>
import  timezhou  from "../../components/timezhou/timezhou"
import aa from "./myrender"

    export default {
        data(){
            return{
              arrList:[
                  {img: require("../../assets/img/bg.jpg"), time:"2020-02-12", person:"班主任",advice:"同意" },
                  {img: require("../../assets/img/bg.jpg"), time:"2019-12-12", person:"班主任",advice:"同意" },
              ],
              name:"",
            }
        },

        components:{
            timezhou,
            aa
        },
        created(){
            // map函数会返回一个全新的函数哈（重要 在实际中很有用）
            // map循环空那个数组时，不会报错的。
            // 使用map的优势  可以返回一个全新的数组  可以用于过滤

            let arr=["哈哈","嘿嘿","嘻嘻"];
            arr.map(function(v,i,arr){
             console.log(i); //i是索引值  从0开始的
             console.log(v) //v代表的是类容
            })

            var move=[
                {name:"张三", score:"9.3"},
                {name:"李四", score:"8"}
            ];
            move.map(function (v) {
                v.score=parseFloat(v.score); //将字符串变为了数字类型的。
                return v;
            });
           console.log(move);


        }
    }
</script>

