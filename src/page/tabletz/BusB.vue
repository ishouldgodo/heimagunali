//BusB 组件
<template>
    <div class="bus-B">
        组件B：
        <label>
        选择checkbox，可以触发组件BusC的监听事件<input type="checkbox" v-model="isChecked" @change="handleCheckbox">
        将B组件中的值 传递给C组件
         =========================

        </label>
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
    methods:{
        handleCheckbox(){
            //分发'getCheckboxStatus'事件
            bus.$emit('getCheckboxStatus',this.isChecked,'我将将这个值从B到c');

            // 分发事件可以将这个组件中的值 传递给另外一个组件
        }
    }
 }
</script>

