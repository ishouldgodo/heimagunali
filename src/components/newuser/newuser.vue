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
            @change="getstate(tableData.row)"
            v-model="tableData.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="tableData">
          <el-button
            type="primary"
            @click="ediuserdata(tableData.row)"
            size="small"
            plain
            icon="el-icon-edit"
            circle
          ></el-button>
        
          <el-button  @click="getgou(tableData.row)" type="success" size="small" plain icon="el-icon-check" circle></el-button>

          <el-button
            @click="mydelete(tableData.row.id)"
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

    <!-- 添加对话框 -->
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

    <!-- 编辑对话框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible2">
      <el-form :model="ediform">
        <el-form-item label="用户名" label-width="120px">
          <el-input disabled v-model="ediform.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" label-width="120px">
          <el-input v-model="ediform.email" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="电话" label-width="120px">
          <el-input v-model="ediform.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="getxiugaiuerdata()">确 定</el-button>
      </div>
    </el-dialog>
    

    <!-- 勾勾对话框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible3">
        <el-form :model="form3">
            <el-form-item label="用户名" label-width="120px">
              {{currentName}}
            </el-form-item>

            <el-form-item label="活动区域" label-width="120px">
            <el-select v-model="currRoleId">
                <el-option label="请选择"  :value="-1"></el-option>
                <el-option 
                 :label="item.roleName"
                 :value="item.id"
                 v-for="(item,i) in roles" :key="i"></el-option>
            </el-select>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible3 = false">取 消</el-button>
            <el-button type="primary" @click="setRole()">确 定</el-button>
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
      dialogFormVisible: false, //点击是否打开对话框
      form: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },

      // end

      //编辑对话框的数据
      ediform: {
        username: "",
        email: "",
        mobile: ""
      },
      dialogFormVisible2: false,

      ediuserid: "", //编辑发送需要的id
       

      //  勾勾对话框中的数据  
       form3: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },

         currRoleId:"-1",
         dialogFormVisible3: false,
         currentName:"",
         roles:[],//保存用户的角色
         getuserid:"",//记录用户的id
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

    },

    loadUserlist() {
      console.log("hhh0");
    },

    // 删除
    mydelete(userid) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          const res = await this.$http.delete(`users/${userid}`);
          if (res.data.meta.status === 200) {
            this.getUserlist();
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //改变状态
   async  getstate(row) {
      alert("假装改变了");
      const res=await this.$http.put(`users/${row.id}/state/${row.mg_state}`)
    //   console.log("状态改变了",res);
       const { meta: { msg, status }  } = res.data;
      if(status==200){
          this.$message({
          showClose: true,
          message: msg,
          type: "success"
          })
      }
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
      //   console.log("获取的数据", this.form);
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
        this.form = {};
      } else {
        this.$message({
          showClose: true,
          message: msg,
          type: "error"
        });
      }
    },

    // 编辑用户数据 
    ediuserdata(userinfo) {
      this.dialogFormVisible2 = true; //打开编辑的对话框
      //将值赋予给ediform
      this.ediform = userinfo;
      this.ediuserid = userinfo.id; //编辑发送请求需要deid
    },

    // 编辑先远程服务器发送数据
    async getxiugaiuerdata() {
      const res = await this.$http.put(`users/${this.ediuserid}`, this.ediform);
      console.log("shifou ", res);

      const {
        meta: { msg, status }
      } = res.data;
      if (status == 200) {
        this.$message({
          showClose: true,
          message: msg,
          type: "success"
        });
        this.dialogFormVisible2 = false;
      } else {
        this.$message({
          showClose: true,
          message: msg,
          type: "error"
        });
      }
    },

    async getgou(row){
      this.dialogFormVisible3=true;
       this.currentName=row.username;
        this.getuserid=row.id;
       const res1=await this.$http.get("roles");
       console.log("res1",res1) 
       this.roles=res1.data.data;

       const res=await this.$http.get(`users/${row.id}`);
       console.log("从远端胡",res)
       this.currRoleId=res.data.data.rid;
    },
   
  //  修改用户的角色 不休要刷新  因为点击对话按钮 会重新发送请求
   async setRole(){
        const res=await this.$http.put(`users/${this.getuserid}/role`,{rid:this.currRoleId});
        console.log("shifou",res);
        this.dialogFormVisible3=false;
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