<template>
    <div>
        <div class="stepbox">
            <el-steps :active="1" style="height:200px">
                <!-- 开始  第一个 -->
                <el-step >
                    <!-- slot="icon" 自定义图片  要给图片宽高 -->
                    <i slot="icon">
                        <img class="imgdemo" src="../../assets/img/bg.jpg">
                    </i>
                    
                    <!-- 在图片的上方  自定义时间 要使用绝对定位哈  否者不能出现在图片的上方 -->
                    <template slot="title" class="my-title">
                        <div class="my-title-div" >{{con.time}}</div>
                    </template>

                    <!-- 下方文字描述  -->
                    <template slot="description">
                        <div>hah</div>
                        <div>嘿嘿</div>
                    </template>
                </el-step>
                <!-- 结束 -->

                <el-step title="班主任" description="同意">
                    <template slot="title" class="my-title">
                        <div class="my-title-div" >{{con.time}}</div>
                    </template>
                </el-step>

                <el-step title="教务处" description="没有同意">          
                </el-step>
             </el-steps>
        </div>
    </div>
</template>

<script>
// https://blog.csdn.net/M612a34/article/details/84572689
// https://www.cnblogs.com/5201314m/p/12356017.html   解决如何插入图片
    export default {
        props:["con"],
        data(){
            return{

            }
        },
        created(){
            console.log(this.con )
        }
    }
</script>

<style  scoped>
.stepbox{
    height: 200px;
    /* background: pink; */
    padding-top: 40px;
}

.imgdemo{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-size: 100%;
}

.my-title-div{
    position: absolute;
    top:-48px;
}
</style>