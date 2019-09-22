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
          <el-button slot="append" @click="getkeydata()" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" @click="adduserdata()">添加</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" height="600px">
      <el-table-column type="index" prop="date" label="#" width="180"></el-table-column>

      <el-table-column prop="username" label="用户名" width="180"></el-table-column>

      <el-table-column prop="email" label="邮箱"></el-table-column>

      <el-table-column prop="mobile" label="电话" width="180"></el-table-column>

      <el-table-column label="创建时间">
        <template slot-scope="tableData">{{ tableData.row.create_time|fmtdata }}</template>
      </el-table-column>

      <el-table-column label="用户状态" width="180">
        <template slot-scope="tableData">
          <el-switch
            @change="getstate()"
            v-model="tableData.row.mg_state"
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

    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[10, 20, 5, 15]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="alltotal"
      ></el-pagination>
    </div>

    <!-- 对话框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名" label-width="100px">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" label-width="100px">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="手机" label-width="100px">
          <el-input v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" label-width="100px">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="getserverinfo()">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: "", //搜索值
      pagenum: 1, //当前页数
      pagesize: 10, //每页条数
      alltotal: 0,

      // 表格
      tableData: [],

      //   对话框的数据
      dialogTableVisible: false, //
      dialogFormVisible: false, //点击是否打开对话框
      form: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      }

      // end
    };
  },
  created() {
    this.getUserlist();
  },

  methods: {
    async getUserlist() {
      // 需要授权的Api，必须在青丘头中使用Authorization 字段提供token令牌 Authorization orders
      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`
      );
      this.alltotal = res.data.data.total;
      console.log("用户数据", res);

      this.tableData = res.data.data.users;
      //   console.log("用户数据", this.tableData);

      //   // 组装数据;  create_time
      //   for (var i = 0; i < this.tableData.length; i++) {
      //     // 给数组添加一个属性和属性值
      //     this.tableData[i]["kg"] = this.kaiguan[i];
      //   }
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
    },

    // 分页
    async handleSizeChange(val) {
      console.log(`每页 ${val} 条`);

      //  const res = await this.$http.get(
      //   `users?query=${this.query}&pagenum=${val}&pagesize=${this.pagesize}`
      // );
      // this.tableData = res.data.data.users;
    },

    // 点击的是第几页
    async handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${val}&pagesize=${this.pagesize}`
      );
      this.tableData = res.data.data.users;
    },

    // 搜索 获取关键字
    async getkeydata() {
      console.log(this.query);
      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`
      );
      this.tableData = res.data.data.users;
      this.alltotal = res.data.data.total;
    },

    // 添加数据
    adduserdata() {
      this.dialogFormVisible = true;
      console.log("获取的数据", this.form);
    },

    // 点击确定按钮发送请求
    async getserverinfo() {
      this.dialogFormVisible = false;
      const res = await this.$http.post(`users`, this.form);
      console.log("添加成功", res);
      
      // 解构  
      const {
        meta: { msg, status }
      } = res.data;

      if (status == 201) {
        this.$message({
          showClose: true,
          message: msg,
          type: "success"
        });
        // 跟新试图
         this.getUserlist();
        //  清空弹出曾数据
        this.form={};
      }else{
        this.$message({
          showClose: true,
          message: msg,
          type: "error"
        });

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