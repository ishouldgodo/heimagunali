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
        <el-input
          @clear="loadUserlist"
          placeholder="请输入内容"
          v-model="query"
          class="input-with-select"
          clearable
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary">添加</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" height="400px">
      <el-table-column type="index" prop="date" label="#" width="180"></el-table-column>

      <el-table-column prop="name" label="姓名" width="180"></el-table-column>

      <el-table-column prop="address" label="邮箱"></el-table-column>

      <el-table-column prop="name" label="电话" width="180"></el-table-column>

      <el-table-column label="创建时间">
        <template slot-scope="tableData">{{ tableData.row.create_time|fmtdata }}</template>
      </el-table-column>

      <el-table-column label="用户状态" width="180">
        <template slot-scope="tableData">
          <el-switch
            @change="getstate()"
            v-model="tableData.row.kg"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="tableData">
          <el-button type="primary" size="small" plain icon="el-icon-edit" circle></el-button>
          <el-button type="success" size="small" plain icon="el-icon-check" circle></el-button>
          <el-button
            @click="mydelete()"
            type="danger"
            size="small"
            plain
            icon="el-icon-delete"
            circle
          ></el-button>
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
      // 需要授权的Api，必须在青丘头中使用Authorization 字段提供token令牌 Authorization orders
      const res = await this.$http.get(
        `orders?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`
      );

      console.log(res);

      this.tableData = res.data.data.goods;
      console.log("123", this.tableData);

      // 组装数据;  create_time
      for (var i = 0; i < this.tableData.length; i++) {
        // 给数组添加一个属性和属性值
        this.tableData[i]["kg"] = this.kaiguan[i];
      }
    },

    loadUserlist() {
      console.log("hhh0");
    },

    // 删除
    mydelete() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //改变状态
    getstate() {
      console.log("状态改变了");
      alert("假装改变了");
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