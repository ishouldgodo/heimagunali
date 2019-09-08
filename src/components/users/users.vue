<template>
  <el-card class="box-card">
    <!-- 面包写 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">用户管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 搜索 -->
    <el-row class="sousuo">
      <el-col>
        <el-input placeholder="请输入内容" v-model="query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary">添加</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" prop="date" label="#" width="180"></el-table-column>

      <el-table-column prop="name" label="姓名" width="180"></el-table-column>

      <el-table-column prop="address" label="邮箱"></el-table-column>

      <el-table-column prop="name" label="电话" width="180"></el-table-column>

      <el-table-column label="创建时间">
        <template slot-scope="tableData">{{ tableData.row.create_time|fmtdata }}</template>
      </el-table-column>

      <el-table-column label="用户状态" width="180">
        <template slot-scope="tableData">
          <el-switch v-model="tableData.row.kg" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>

      <el-table-column prop="address" label="操作">
        <template slot-scope="tableData">
          <el-button type="primary" size="small" plain icon="el-icon-edit" circle></el-button>
          <el-button type="success" size="small" plain icon="el-icon-check" circle></el-button>
          <el-button type="danger" size="small" plain icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: "", //搜索值
      pagenum: 1,
      pagesize: 10,
      // 表格
      tableData: [],

      //  开关
      kaiguan: [true, true, false, true, true, false, true, true, false, false]
    };
  },
  created() {
    this.getUserlist();
  },

  methods: {
    async getUserlist() {
      // 需要授权的Api，必须在青丘头中使用Authorization 字段提供token令牌 Authorization
      const aa = localStorage.getItem("token");
      console.log("12", aa);

      this.$http.defaults.headers.common["Authorization"] = aa;

      const res = await this.$http.get(
        `orders?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`
      );

      this.tableData = res.data.data.goods;
      console.log(this.tableData);

      // 组装数据
      for (var i = 0; i < this.tableData.length; i++) {
        // 给数组添加一个属性和属性值
        this.tableData[i]["kg"] = this.kaiguan[i];
      }
    }
  }
};
</script>

<style  scoped>
.box-card {
  height: 100%;
}
.sousuo {
  margin: 30px auto;
}
/* 搜索框的长度 */
.el-input-group {
  width: 30%;
}
</style>