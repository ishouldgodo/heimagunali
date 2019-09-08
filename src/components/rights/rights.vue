<template>
  <div>
    <my-bread value1="权限管理" value2="权限列表"></my-bread>

    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%" class="mytable">
      <el-table-column prop="date" label="#" type="index" width="120"></el-table-column>
      <el-table-column prop="authName" label="权限管理"></el-table-column>
      <el-table-column prop="path" label="路径"></el-table-column>
      <el-table-column prop="address" label="层级">
        <template slot-scope="tableData">
          <span v-if="tableData.row.level=='0'">一级</span>
          <span v-if="tableData.row.level=='1'">二级</span>
          <span v-if="tableData.row.level=='2'">三级</span>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [] //表格数据
    };
  },

  created() {
    this.getRightlist();
  },
  methods: {
    async getRightlist() {
      const res = await this.$http.get(`rights/list`);
      this.tableData = res.data.data;
      console.log(res);
    }
  }
};
</script>

<style  scoped>
.mytable {
  margin-top: 20px;
}
</style>