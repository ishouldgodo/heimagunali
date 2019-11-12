<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <!-- <el-table-column type="index" width="50"></el-table-column>
      <el-table-column property="date" label="日期" width="120"></el-table-column>
      <el-table-column property="name" label="姓名" width="120"></el-table-column> -->

       <!--
           property 是渲染的数据字段 
           label   表头
           
       -->

      <el-table-column
       v-for="(item,i) in mytabledata"
       :key="i"
       :property="item.property" 
       :label="item.label"
       empty-text="暂无数据"
       ></el-table-column>
    </el-table>

    
  </div>
</template>

<script>
export default {
    props:{
        mytabledata:{
            type:Array,
            required:true,
        }
    },
  data() {
    return {
      
      currentRow: null
    };
  }
};
</script>

<style  scoped>
</style>