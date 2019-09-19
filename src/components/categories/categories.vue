<template>
  <div>
    <!-- treeKey==>nodekey  节点唯一标识
             parentkey  父亲节点的id
             levelKey      当前节点的级别
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
          <span v-if="tabdata1.row.cat_level=='0'">一级</span>
          <span v-else-if="tabdata1.row.cat_level=='1'">二级</span>
          <span v-else-if="tabdata1.row.cat_level=='2'">三级</span>
        </template>
      </el-table-column>

      <!-- cat_deleted slot-scope="tabdata1" 不能添加 :绑定 -->
      <el-table-column label="是否有效">
        <template slot-scope="tabdata1">
          <span v-if="tabdata1.row.cat_deleted==false">无效</span>
          <span v-else-if="tabdata1.row.cat_deleted==true">有效</span>
        </template>
      </el-table-column>

      <!--  -->
      <el-table-column label="操作" prop="name">
        <template slot-scope="tabdata1">
          <el-button type="primary" size="small" plain icon="el-icon-edit" circle></el-button>
          <el-button type="danger" size="small" plain icon="el-icon-delete" circle></el-button>
          <el-button type="success" size="small" plain icon="el-icon-check" circle></el-button>
        </template>
      </el-table-column>
      <!--  -->
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
      console.log("res",res)
      this.tabdata1 = res.data.data.result;
      console.log("88", res.data.data.result);
    }
  }
};
</script>

<style  scoped>
</style>