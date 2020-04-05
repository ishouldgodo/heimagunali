<template>
    <div>
             <draggable v-model="colors" @update="datadragEnd" :options = "{animation:500}">
                <transition-group>
                    <div v-for="element in colors" :key="element.text" class = "drag-item">
                        {{element.text}}
                    </div>
                </transition-group>
           </draggable>
        
    </div>
</template>

<script>
import draggable from 'vuedraggable'
    export default {
        data(){
            return{
             
                colors: [
                    {
                        text: "111网易互",
                    }, 
                    {
                        text: "22Hotpink",
                    }, 
                    {
                        text: "33Gold",
                    }, 
                    {
                        text: "44Crimson",
                    }, 
                    {
                        text: "55Blueviolet",
                    },
                    {
                        text: "66Lightblue",
                    }, 
                    {
                        text: "77Cornflowerblue",
                    }, 
                    {
                        text: "88Skyblue",
                    }, 
                    {
                        text: "99Burlywood",
                    }
                ],
               
              
                
            }
        },
          components: {
        　　draggable
        },
        methods:{
           

            // 拖拽的时候  就会发生排序哈
            datadragEnd (evt) {
                evt.preventDefault();
                console.log('拖动前的索引 :' + evt.oldIndex)
                console.log('拖动后的索引 :' + evt.newIndex)
                console.log(this.colors);
            }
        },
        mounted () {
	        //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
            document.body.ondrop = function (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
</script>

<style  scoped>
  .test{
        border:1px solid #ccc;
    }
    .drag-item{
        width: 200px;
        height: 50px;
        line-height: 50px;
        margin: auto;
        position: relative;
        background: #ddd;
        margin-top:20px;
    }
    .ghostClass{
        opacity: 1;
    }
    .bottom{
        width: 200px;
        height: 50px;
        position: relative;
        background: blue;
        top:2px;
        left: 2px;
        transition: all .5s linear;
    }
</style>