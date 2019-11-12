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
              <!-- 删除 -->
              <!-- 权限idtableData.row.id,     获取角色的id item.id-->
              <el-tag
                @close="delrights(tableData.row.id, item.id)"
                type="success"
                closable
              >{{item.authName}}</el-tag>
              <i class="el-icon-arrow-right"></i>
            </el-col>

            <el-col :span="20">
              <el-row v-for="(item2,j) in item.children" :key="j">
                <el-col :span="4">
                  <!-- 二级权限渲染  -->
                  <el-tag
                    @close="delrights(tableData.row.id, item2.id)"
                    type="info"
                    closable
                  >{{item2.authName}}</el-tag>
                  <i class="el-icon-arrow-right"></i>
                </el-col>
                <el-col :span="20">
                  <!-- 三级权限 -->
                  <el-tag
                    closable
                    @close="delrights(tableData.row.id, item3.id)"
                    type="warning"
                    v-for="(item3,k) in item2.children"
                    :key="k"
                  >{{item3.authName}}</el-tag>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <!-- 无权限提示 -->
          <span v-if="tableData.row.children.length==0">未分配权限</span>

          <!-- 展开行的内容 end -->
        </template>
      </el-table-column>

      <el-table-column label="#" prop="id" type="index"></el-table-column>
      <el-table-column label="角色名称" prop="roleName"></el-table-column>
      <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
      <el-table-column label="操作" prop="desc">
        <template slot-scope="tableData">
          <el-button type="primary" size="small" plain icon="el-icon-edit" circle></el-button>
          <el-button type="danger" size="small" plain icon="el-icon-delete" circle></el-button>
          <el-button
            type="success"
            size="small"
            plain
            icon="el-icon-check"
            circle
            @click="showSetRight(tableData.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 对话框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <!-- 内容区域 -->
      <!-- 树形结构的分析
        data2是数据源  是一个数组
        show-checkbox是一个选择框
        node-key="id" 每个节点的每一值  通常是data数据源中的key名id
        :default-expanded-keys="[2, 3]" 默认要展开的节点的id值
          
        :default-checked-keys="[5]"  那些角色要打钩 它是一个数组 id代表该角色拥有该权限
         :default-expanded-keys="arrexpand"   default-expand-all默认展开所有节点 将:default-expanded-keys="[2, 3]"删除

      -->
      <el-tree
        ref="tree"
        :default-expanded-keys="arrexpand"
        :default-checked-keys="arrgou"
        :data="data2"
        show-checkbox
        node-key="id"
        :props="defaultProps"
      ></el-tree>

      <!-- 结束 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="rolequanxian()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false, //默认隐藏对话框

      data2: [], //树形结构的数据
      arrexpand: [], //要展开的节点的id
      arrgou: [], //勾选的权限
      currentroleid: -1, //角色id
      defaultProps: {
        children: "children", //描述的是该节点 的容器数组（一级节点 下所有的节点）
        label: "authName" //label的值是文字描述  label的值 应该去数据源data2中去找
        // label 的值表现的是该节点的文字描述  第一级节点
      }
    };
  },

  created() {
    this.getRolelist();
  },

  methods: {
    async getRolelist() {
      const res = await this.$http.get(`roles`);
      this.tableData = res.data.data;
      console.log("角色列表的数据", res);
    },

    // 删除权限
    async delrights(roleid, rightid) {
      const res = await this.$http.delete(`roles/${roleid}/rights/${rightid}`);
      console.log("del青丘删除公共", res);
      this.getRolelist(); //成功之后再次调用
    },

    // 分配 权限
    async showSetRight(role) {
      this.currentroleid = role.id; //拿到当前角色的id 下一方法rolequanxian要用
      const res = await this.$http.get(`rights/tree`);
      console.log("点我了", res);
      this.data2 = res.data.data;
      var arrtemp1 = [];

      // 获取所有展开节点的id值  其实你也可以使用 elementui的默认值
      // default-expand-all	是否默认展开所有节点  true全部展开

      this.data2.forEach(item1 => {
        arrtemp1.push(item1.id); //拿到一层的id
        item1.children.forEach(item2 => {
          //循环的仍然是数组  拿到第二层的id
          arrtemp1.push(item2.id);
          item2.children.forEach(item3 => {
            arrtemp1.push(item3.id);
          });
        });
      });
      this.arrexpand = arrtemp1;

      // 勾选该角色拥有的权限
      let newquan = [];
      role.children.forEach(item1 => {
        //循环第一层的数组
        // newquan.push(item1.id);
        item1.children.forEach(item2 => {
          //循环第二层的数组
          // newquan.push(item2.id);
          item2.children.forEach(item3 => {
            newquan.push(item3.id);
          });
        });
      });
      this.arrgou = newquan;

      // 点击弹出对话框
      this.dialogFormVisible = true;
    },

    // 确定按钮增添权限
    async rolequanxian() {
      // roleId当前要修改权限的角色id  ${this.currentroleid}
      // rids 树形节点中所有全选和半选的label的id []

      // 获取全选的id的数组  arr1  getCheckedKeys()它返回来的是一个数组
      let arr1 = this.$refs.tree.getCheckedKeys();
      // 获取半选的id的数组   arr2 getHalfCheckedKeys()它返回来的是一个数组
      let arr2 = this.$refs.tree.getHalfCheckedKeys();

      //  合并两个数组
      let arrhe = arr1.concat(arr2); // let arr=[...arr1,...arr2]
      console.log("hebing", arrhe);

      // el-tree--》js方法 getCheckedKeys
      // 1 给要操作的dom元素  设置ref属性值    input.ref="txt"
      // 2 this.refs.ref属性值.js方法名()     this.$refs.txt.focus()

      const res = await this.$http.post(`roles/${this.currentroleid}/rights`, {
        rids: arrhe.join(",")
      });
      console.log("hha", res);
      // 增添之后  跟新视图
      this.getRolelist();
      this.dialogFormVisible = false; //关闭对话框
    }
  }
};
</script>

<style  scoped>
.addbtn {
  margin-top: 20px;
}
</style>