//BusC组件
<template>
    <div class="bus-C">
        组件BusC：
        <p>
        这里可以得到组件BusB的checkbox的值：{{isChecked}}
        </p>
    </div>
</template>
<script>
import bus from './aa';
export default{
    data(){
        return{
            isChecked:false
        }
    },
    mounted(){
        // 必须在mounted中去调用一次
        this.getCheckboxStatus1212();
    },
    methods:{
        getCheckboxStatus1212(){
            //监听'getCheckboxStatus'事件
            bus.$on('getCheckboxStatus',(res,c) => {
                //监听到BusB组件的checkbox的状态 do something...
                console.log(res,c)
                this.isChecked = res;	
            })
        }
    },
    beforeDestroy(){
        //取消监听'getCheckboxStatus'事件
        bus.$off('getCheckboxStatus');
    }
}
</script>


