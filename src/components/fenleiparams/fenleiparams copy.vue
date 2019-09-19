<template>
  <el-card class="conqi">
    <!-- 面包屑自定义组件 -->
    <my-bread class="mianbao" value1="商品管理" value2="分类参数"></my-bread>

    <!-- 提示 -->
    <el-alert class="tishi" title="只允许为三级参数设置分类参数" type="success" center show-icon></el-alert>

    <!-- 级联选择器 -->
    <span class="demonstration">商品分类</span>
    <span>{{ this.selectedOptions2}}</span>
    <el-cascader
      clearable
      expand-trigger="hover"
      :options="options"
      :props="defaultProp"
      v-model="selectedOptions2"
      @change="handleChange"
      :show-all-levels="false"
    ></el-cascader>

    <!-- tab栏切换 -->
    <h1>测试tab当前点击的是第几个{{active}}</h1>
    <el-tabs v-model="active" type="card" @tab-click="handleClick">
      <el-tab-pane label="动态参数" name="1">
        <!-- 第一个tab中的内容 -->
        <el-button type="danger">危险按钮</el-button>

        <!--表格  -->
        <el-table :data="newarrpar" style="width: 100%">
          <el-table-column type="expand" label="#值">
            <!-- 这里面显示展开后的内容 
              scope.row.attr_vals  是一个数组，你接受到数据后 处理成了数组
              @close="handleClose(scope.row.attr_vals,tag)"  动态传递参数  tag是一个下标值
            
            -->
            <template slot-scope="scope">
              <el-tag
                :key="tag"
                v-for="tag in scope.row.attr_vals"
                closable
                :disable-transitions="false"
                @close="handleClose(scope.row.attr_vals,   scope.row.attr_id,   tag,   scope.row.attr_name)"
              >{{tag}}</el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm(scope.row.attr_vals,  scope.row.attr_id,   scope.row.attr_name )"
                @blur="handleInputConfirm(scope.row.attr_vals,   scope.row.attr_id,   scope.row.attr_name )"
              ></el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </template>
          </el-table-column>

          <!-- 展示的内容 -->
          <el-table-column label="属性名陈" prop="attr_name"></el-table-column>
          <el-table-column label="操作" prop="name">
            <template :slot-scope="newarrpar">
              <el-button type="primary" size="small" plain icon="el-icon-edit" circle></el-button>
              <el-button type="danger" size="small" plain icon="el-icon-delete" circle></el-button>
              <el-button type="success" size="small" plain icon="el-icon-check" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
        <!--  -->
      </el-tab-pane>

      <!-- 第2个tab -->
      <el-tab-pane label="静态参数" name="2">
        <el-button type="danger">危险按钮</el-button>

        <!--表格  -->
        <el-table :data="tab2datatable" style="width: 100%">
          <el-table-column label="#" type="index"></el-table-column>
          <!-- 自动添加序号 -->
          <el-table-column label="属性名陈" prop="attr_name"></el-table-column>
          <el-table-column label="属性值" prop="attr_vals"></el-table-column>
          <el-table-column label="操作" prop="name">
            <template :slot-scope="tab2datatable">
              <el-button type="primary" size="small" plain icon="el-icon-edit" circle></el-button>
              <el-button type="danger" size="small" plain icon="el-icon-delete" circle></el-button>
              <el-button type="success" size="small" plain icon="el-icon-check" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
        <!--  -->
      </el-tab-pane>
    </el-tabs>
    <!--  tab栏切换 end -->
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      options: [], //练级菜单的数据
      selectedOptions2: [1, 3, 6], //默认选择 1 3 6
      defaultProp: {
        label: "cat_name", //选项名字
        value: "cat_id", //选项的id值
        children: "children" //该选项下的下一个数组
      },
      // 第一个tab中的动态数据
      tab1dongtai: [],

      active: "1", //tab栏默认选中第一个

      newarrpar: [], //表格数据
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",

      tab2datatable: [] //第二个tab栏中的数据
    };
  },
  created() {
    this.getGoodCate();
    this.aa();
  },

  methods: {
    // 获取练级选择器的数据
    async getGoodCate() {
      const res = await this.$http.get(`categories?type=3`);
      this.options = res.data.data;
    },

    // 当值改变就会触发这个函数
    async handleChange() {
      const res = await this.$http.get(`categories/3/attributes?sel=many`);
      console.log("SHU", res.data.data);
    },

    //tab栏切换触发这个函数
    async handleClick(tab, event) {
      console.log(tab, event);
      if (this.active == 2) {
        //点击的是第二个tab栏中的数据
        const res = await this.$http.get(
          `categories/${this.selectedOptions2[2]}/attributes?sel=only`
        );
        console.log("2", res);
        this.tab2datatable = res.data.data;
      }
    },

    async aa() {
      const res = await this.$http.get(
        `categories/${this.selectedOptions2[2]}/attributes?sel=many`
      );
      console.log("第一个tab栏中的数据", res);
      this.newarrpar = res.data.data;
      this.newarrpar.forEach(item => {
        item.attr_vals =
          item.attr_vals.length === 0 ? [] : item.attr_vals.trim().split(",");
      });
    },

    //  -----
    // 点击×删除
    async handleClose(attr_vals, attr_id, tag, attr_name) {
      attr_vals.splice(attr_vals.indexOf(tag), 1);
      console.log("attr_id", attr_id);
      //tag是下标
      let putData = {
        attr_name: attr_name,
        attr_sel: "many",
        attr_vals: attr_vals.join(",")
      };

      const res = await this.$http.put(
        `categories/${this.selectedOptions2[2]}/attributes/${attr_id}`,
        putData
      );
      console.log("ok", res);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    // 回车是添加
    async handleInputConfirm(attr_vals, attr_id, attr_name) {
      let inputValue = this.inputValue;
      if (inputValue) {
        attr_vals.push(inputValue);

        let putData = {
          attr_name: attr_name,
          attr_sel: "many",
          attr_vals: attr_vals.join(",")
        };

        const res = await this.$http.put(
          `categories/${this.selectedOptions2[2]}/attributes/${attr_id}`,
          putData
        );
        console.log("后端返回来的数据", res);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>

<style  scoped>
.conqi {
  height: 100%;
}
.mianbao {
  margin-bottom: 20px;
}
.tishi {
  margin-bottom: 10px;
}

/* 动态tag标签的颜色 */
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>