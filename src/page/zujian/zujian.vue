<template>
    <div>
      <timezhou v-for="(item,index) in arrList" :key="index" :con="item"></timezhou>
      

      <aa v-model="name"></aa>

      <!-- 上传 -->
      <upload :uploadOption="uploadOption"
               @upload="haha"
               @beupload="opop"
      ></upload>

      <!-- 
      <mask-add :show1.sync="show1"></mask-add>
      <el-button @click="open">click</el-button>

      <zidiaoyongfa :say="say"></zidiaoyongfa> -->

      <el-button @click="caijian">裁剪</el-button>

    

      





    
    </div>
</template>
<script>
import  timezhou  from "../../components/timezhou/timezhou"
import aa from "./myrender"
import upload from "../../components/upload/upload"
import maskAdd  from "../../components/maskAdd/maskAdd"
import zidiaoyongfa from "../../components/maskAdd/zidiaoyongfa"
    export default {
        data(){
            return{
              arrList:[
                  {img: require("../../assets/img/bg.jpg"), time:"2020-02-12", person:"班主任",advice:"同意" },
                  {img: require("../../assets/img/bg.jpg"), time:"2019-12-12", person:"班主任",advice:"同意" },
              ],
              name:"",
              uploadOption:"",

              show1: false,

                tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]

            }
        },

        components:{
            timezhou,
            aa,
            upload,
            maskAdd,
            zidiaoyongfa
        },
        
        methods:{
            haha(mess){
                console.log(mess);
            },
            opop(mess){
                console.log(mess);
            },

            open () {
                this.show1 = true;
            },
            fatherMethod(){
                console.log("被子组件触发了")
            },
            say(){
                console.log("haha  我要说话")
            },

            caijian(){
                console.log("ha")
            }
        }
    }
</script>

