<template>
    <div>
        <div>{{time}}--这是一个API 或当前的时间</div>
        <div>现在的时间是实时跟新的==={{Showtime}}</div>
    </div>
</template>

<script>
import { getYearMInthDay, gwtRealTIme } from "../../assets/js/common.js"
export default {
    data() {
        return {
            time: "",
            Showtime: "",
            clearTime:null,
        }
    },

    created() {
        this.time = getYearMInthDay();

        // 让页面一开始就加载就显示时间。
        //解决隔1s后才显示时间这个问题
        let newtime = new Date();
        let myHover = newtime.getHours();
        let myMin = newtime.getMinutes();
        let miao = newtime.getSeconds();
        this.Showtime = myHover + ":" + myMin + ":" + miao;

        // 让后每隔1s跟新时间
        this.runTime();
    },

    methods: {
        runTime() {
                this.clearTime = setInterval(() => {
                console.log("我是定时器  我在执行")
                let newtime = new Date();
                let myHover = newtime.getHours();
                let myMin = newtime.getMinutes();
                let miao = newtime.getSeconds();
                this.Showtime = myHover + ":" + myMin + ":" + miao;
            }, 1000)
        }
    },

    beforeDestroy(){
        clearInterval( this.clearTime);
        console.log("---")
    }


}
</script>

<style  scoped>
</style>