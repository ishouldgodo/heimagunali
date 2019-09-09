<template>
  <div>
    <!-- 面包写 -->
    <my-bread value1="权限管理" value2="角色列表"></my-bread>

    <!-- 添加按钮 -->
    <el-row class="addbtn">
      <el-col>
        <el-button type="primary">添加角色</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="tableData">
          <!-- 展开行的内容  以及权限的渲染-->
          <el-row v-for="(item,i) in tableData.row.children" :key="i">
            <el-col :span="4">
              <el-tag>{{item.authName}}</el-tag>
            </el-col>

            <el-col :span="20">
              <!-- 二级权限渲染 -->
              <el-row v-for="(item2,j) in item.children" :key="j">
                <el-col :span="4">
                  <el-tag>{{item2.authName}}</el-tag>
                </el-col>
                <el-col :span="20">
                  <!-- 三级权限 -->
                  <el-tag v-for="(item3,k) in item2.children" :key="k">{{item3.authName}}</el-tag>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <!-- 展开行的内容 end -->
        </template>
      </el-table-column>

      <el-table-column label="#" prop="id" type="index"></el-table-column>
      <el-table-column label="角色名称" prop="roleName"></el-table-column>
      <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
      <el-table-column label="操作" prop="desc"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },

  created() {
    this.getRolelist();
  },

  methods: {
    async getRolelist() {
      const res = await this.$http.get(`roles`);
      this.tableData = res.data.data;
      console.log(res);
    }
  }
};
</script>

<style  scoped>
.addbtn {
  margin-top: 20px;
}
</style>