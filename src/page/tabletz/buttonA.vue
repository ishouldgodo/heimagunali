<template>
   <div class="bus-A">
   下面是两个兄弟组件：	
   	<BusB />
   	<BusC />
   </div>
</template>
<script>
//引入兄弟组件
import BusB from './BusB'
import BusC from './BusC'
export default{
   data(){
       return{
       }
   },
   components:{
       BusB,
       BusC
   }
}
</script>
