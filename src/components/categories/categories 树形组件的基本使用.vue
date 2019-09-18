<template>
  <div>
    <!-- treeKey---》nodekey  节点唯一标识
             parentkey  父亲节点的id
             LeveKey      当前节点的级别
             childKey    子节点
      
       prop="cat_name" 显示的字段
    -->
    <el-table height="450" :data="tabdata1" style="width:100%">
      <el-tree-grid
        prop="cat_name"
        label="分类显示"
        treeKey="cat_id"
        parentKey="cat_pid"
        levelKey="cat_level"
        childKey="children"
      ></el-tree-grid>

      <el-table-column label="级别">
        <template slot-scope="tabdata1">
           <span></span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
var ElTreeGrid = require("element-tree-grid");
export default {
  data() {
    return {
      pagenum: 1,
      pagesize: 10,
      tabdata1: []
    };
  },
  components: {
    ElTreeGrid
  },

  created() {
    this.getGoodsCate();
  },

  methods: {
    async getGoodsCate() {
      const res = await this.$http.get(
        `categories?type=3&pagenum=${this.pagenum}&pagesize=${this.pagesize}`
      );
      this.tabdata1 = res.data.data.result;
      console.log("88", res.data.data.result);
    }
  }
};
</script>

<style  scoped>
</style>