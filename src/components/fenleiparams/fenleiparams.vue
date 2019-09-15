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
    <el-tabs v-model="active" class="mytab" tab-position="top" type="card" style="height: 200px;">
      <!-- 第一个tab切换 -->
      <el-tab-pane name="1" label="基本信息">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="商品 ID" prop="id"></el-table-column>
          <el-table-column label="商品名称" prop="name"></el-table-column>
          <el-table-column label="描述" prop="desc"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane name="2" label="商品参数">静态参数</el-tab-pane>
    </el-tabs>

    <!--  -->
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
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ]
    };
  },
  created() {
    this.getGoodCate();
  },

  methods: {
    // 获取练级选择器的数据
    async getGoodCate() {
      const res = await this.$http.get(`categories?type=3`);
      // console.log("0000000", res);
      this.options = res.data.data;
    },

    // 当值改变就会触发这个函数
    async handleChange(value) {
      const res = await this.$http.get(
        `categories/${this.selectedOptions2[2]}/attributes?sel=many`
      );
      console.log("oooooo", res);
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
</style>